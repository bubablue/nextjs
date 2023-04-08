import {
  Chip,
  IconButton,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  useTheme,
} from "@material-ui/core";
import { Button } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import {
  ChevronBarLeft,
  ChevronBarRight,
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { FilterDrawer } from "../../Components/FilterDrawer/FilterDrawer";
import { TeamLogo } from "../../Components/TeamLogo";
import { useTeams } from "../../Context/TeamProvider";
import Colours from "../../Context/Theme/Colours";
import useStyles from "../../styles/teams";

export const PlayersGeneral = () => {
  const [teams, setTeams] = React.useState<any[]>([]);
  const [rowsData, setRowsData] = React.useState<any[]>([]);

  const NHL_URL =
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster";
  const classes = useStyles();
  const router = useRouter();

  async function getTeams() {
    const response = await axios.get(NHL_URL);
    return response.data.teams;
  }

  const { data, status, error } = useQuery("teams", getTeams, {
    onSuccess: (data) => {
      setTeams(data);
    },
  });

  const players = useCallback(async (id: string) => {
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=20192020`
    );
    return response.data;
  }, []);

  const createData = (
    team: string,
    name: string | number,
    position: string,
    id: number
  ) => {
    return {
      team,
      name,
      position,
      id,
    };
  };

  const handleClick = (id: number) => {
    router.push(`/stats/${id}`);
  };

  React.useMemo(
    () =>
      teams.map((team: any) => {
        return team.roster.roster.map((player: any) => {
          return (
            !rowsData.length &&
            setRowsData((prev) => [
              ...prev,
              createData(
                team.name,
                player.person.fullName,
                player.position.name,
                player.person.id
              ),
            ])
          );
        });
      }),
    [teams]
  );

  interface Data {
    team: string;
    name: string;
    position: string;
    id: number;
  }
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("team");

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  type Order = "asc" | "desc";

  const getComparator = <K extends keyof any>(
    order: Order,
    orderBy: K
  ): ((
    a: { [key in K]: number | string },
    b: { [key in K]: number | string }
  ) => number) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const getMultisortComparator = <K extends keyof any>(
    multiSortState: { property: keyof Data; order: Order }[]
  ) => {
    return (
      a: {
        team: string | number;
        name: string | number;
        position: string | number;
        id: string | number;
      },
      b: {
        team: string | number;
        name: string | number;
        position: string | number;
        id: string | number;
      }
    ) => {
      for (let i = 0; i < multiSortState.length; i++) {
        const { property, order } = multiSortState[i];
        const comparator = getComparator(order, property);
        const compare = comparator(a, b);
        if (compare !== 0) {
          return compare;
        }
      }
      return 0;
    };
  };
  interface multiSortState {
    order: Order;
    orderBy: keyof Data;
  }

  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
      event: React.MouseEvent<HTMLButtonElement>,
      newPage: number
    ) => void;
  }
  function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <div style={{ flexShrink: 0, margin: 10 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? (
            <ChevronBarRight className={classes.icons} />
          ) : (
            <ChevronBarLeft className={classes.icons} />
          )}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <ChevronRight className={classes.icons} />
          ) : (
            <ChevronLeft className={classes.icons} />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <ChevronLeft className={classes.icons} />
          ) : (
            <ChevronRight className={classes.icons} />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? (
            <ChevronBarLeft className={classes.icons} />
          ) : (
            <ChevronBarRight className={classes.icons} />
          )}
        </IconButton>
      </div>
    );
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [search, setSearch] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  interface filterState {
    team: string;
    position: string;
  }

  const [filterState, setFilterState] = React.useState<filterState>({
    team: "",
    position: "",
  });

  const handleDelete = (prop: keyof filterState) => {
    setFilterState({ ...filterState, [prop]: "" });
  };

  const filteredRows = rowsData.filter((row) => {
    return (
      (row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.team.toLowerCase().includes(search.toLowerCase()) ||
        row.position.toLowerCase().includes(search.toLowerCase()) ||
        row.id.toString().includes(search.toLowerCase()) ||
        search === "") &&
      (filterState.team === "" || row.team === filterState.team) &&
      (filterState.position === "" || row.position === filterState.position)
    );
  });

  const handleSorting =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

  const [multisort, setMultisort] = React.useState<boolean>(false);
  const [multisortState, setMultisortState] = React.useState<
    Array<{ property: keyof Data; order: Order }>
  >([]);

  const handleMultisort =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      if (multisort) {
        const isAsc = multisortState.some(
          (item) => item.property === property && item.order === "asc"
        );
        const newMultisortState = multisortState.filter(
          (item) => item.property !== property
        );
        setMultisortState([
          ...newMultisortState,
          { property, order: isAsc ? "desc" : "asc" },
        ]);
      } else {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
      }
    };
  interface multiSortState {
    team: string;
    position: string;
    name: string;
    id: number;
  }
  const handleDeleteSorting = (prop: keyof multiSortState) => {
    const newMultisortState = multisortState.filter(
      (item) => item.property !== prop
    );
    setMultisortState(newMultisortState);
  };

  const columns = [
    {
      id: "team",
      label: "Team",
      minWidth: 170,
      align: "center",
      format: (value: string) => value.toLocaleString(),
    },
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      align: "center",
      format: (value: string) => value.toLocaleString(),
    },
    {
      id: "position",
      label: "Position",
      minWidth: 170,
      align: "center",
      format: (value: string) => value.toLocaleString(),
    },
    {
      id: "id",
      label: "Id",
      minWidth: 50,
      align: "center",
      format: (value: number) => value.toLocaleString(),
    },
  ];
  const rows = filteredRows.map((row) => {
    return {
      team: row.team,
      name: row.name,
      position: row.position,
      id: row.id,
    };
  });

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Players</h1>
      <div className={classes.filterBar}>
        {Object.keys(multisortState).map((key, index) => {
          return (
            JSON.stringify(multisortState) !== JSON.stringify([]) && (
              <Chip
                label={multisortState[index]["property"]}
                onDelete={() =>
                  handleDeleteSorting(
                    multisortState[index]["property"] as keyof multiSortState
                  )
                }
              />
            )
          );
        })}
        {JSON.stringify(multisortState) === JSON.stringify([]) && (
          <p className={classes.filterBarText}>No sorting applied</p>
        )}
      </div>
      <div className={classes.filterBar}>
        {Object.keys(filterState).map((key) => {
          return (
            filterState[key as keyof filterState] !== "" && (
              <Chip
                label={filterState[key as keyof filterState]}
                onDelete={() => handleDelete(key as keyof filterState)}
              />
            )
          );
        })}
        {JSON.stringify(filterState) ===
          JSON.stringify({ team: "", position: "" }) && (
          <p className={classes.filterBarText}>No filters applied</p>
        )}
      </div>
      <TableContainer component={Paper} className={classes.playerStatsPaper}>
        <Input
          className={classes.search}
          placeholder="Search"
          onChange={handleSearch}
        />
        <FilterDrawer state={filterState} setState={setFilterState} />
        <Button
          onClick={() => {
            setMultisort(!multisort);
            setMultisortState([]);
          }}
        >
          {multisort ? "Disable Multisort" : "Enable Multisort"}
        </Button>
        {/* <h1 className={classes.title}>{teams[index].name}</h1> */}
        <Table aria-label="simple table" className={classes.defaultTable}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <TableSortLabel
                    active={
                      multisort
                        ? multisortState.some(
                            (item) => item.property === column.id
                          )
                        : orderBy === column.id
                    }
                    direction={
                      multisort
                        ? multisortState.find(
                            (item) => item.property === column.id
                          )?.order
                        : order
                    }
                    onClick={
                      multisort
                        ? handleMultisort(column.id as keyof Data)
                        : handleSorting(column.id as keyof Data)
                    }
                    className={classes.sorting}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(
              rows,
              multisort
                ? getMultisortComparator(
                    multisortState as typeof multisortState
                  )
                : getComparator(order, orderBy)
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((player: any) => {
                return (
                  <TableRow hover={true} key={player.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.listItem}
                    >
                      <TeamLogo
                        team={player.team}
                        teamId={player.team}
                        classProp={classes.images}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.listItem}
                    >
                      {player.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      className={classes.listItem}
                    >
                      {player.position}
                    </TableCell>
                    <TableCell
                      align="left"
                      onClick={() => handleClick(player.id)}
                      className={classes.listItem}
                    >
                      {player.id}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
              colSpan={3}
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              className={classes.pagination}
            />
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  );
};
export default PlayersGeneral;
