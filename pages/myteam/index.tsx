import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  createStyles,
} from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import Colours from "../../Context/Theme/Colours";
import { TeamLogo } from "../../Components/TeamLogo";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px",
      width: "auto",
      background: Colours.BW[theme.palette.mode],
      color: Colours.BW_02[theme.palette.mode],
    },
    team: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "fit-content",
      height: "fit-content",
      background: "grey",
      backgroundAttachment: "fixed",
      color: "white",
    },
    player: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "250px",
      height: "250px",
      cursor: "pointer",
    },
    playerName: {
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
      alignItems: "center",
      margin: "10px",
    },
    playerStats: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      background: Colours.BW[theme.palette.mode],
    },
    playerStatsBox: {
      display: "flex",
      flexDirection: "row",
      textAlign: "left",
      alignItems: "center",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
      marginBottom: "100px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "90%",
    },
    table: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
    },
    playerStatsPaper: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      flexWrap: "wrap",
      width: "90%",
      margin: "10px",
      marginBottom: 100,
      borderRadius: "10px",
    },
    defaultTable: {},
    deleteButton: {
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
      alignItems: "center",
      margin: "10px",
      cursor: "pointer",
      background: Colours.RED[theme.palette.mode],
      color: "white",
    },
    images: {
      height: "200px",
      width: "200px",
    },
  })
);

export const MyTeam = () => {
  const classes = useStyles();
  const router = useRouter();
  const [team, setTeam] = React.useState<any[]>([]);
  const [teams, setTeams] = React.useState<any[]>([]);

  const getPlayers = useCallback(async () => {
    const login = await axios.get("http://localhost:3001/logged_in", {
      withCredentials: true,
    });
    const response = await axios.get("http://localhost:3001/players", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params: {
        user_id: login.data.user.id,
      },
    });
    return response.data;
  }, []);

  const { data: players, status: playersStatus } = useQuery(
    "players",
    getPlayers,
    {
      enabled: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setTeam([]);
        console.log(data);
        return data.map(async (player: any) => {
          let response = await axios.get(
            `https://statsapi.web.nhl.com/api/v1/people/${player.player_id}`
          );
          setTeam((prev: any) => [...prev, response.data]);
          getTeams(response.data);
          return response.data;
        });
      },
    }
  );

  const getTeams = useCallback(async (player: any) => {
    setTeams([]);
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${player.people[0].id}/stats?stats=statsSingleSeason&season=20222023`
    );
    setTeams((prev: any) => [
      ...prev,
      [response.data, player.people[0].fullName],
    ]);
    return response.data.teams;
  }, []);

  const deletePlayer = useMutation(
    async (player_id) => {
      const login = await axios.get("http://localhost:3001/logged_in", {
        withCredentials: true,
      });
      return axios.delete(`http://localhost:3001/players`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          player_id: player_id,
          user_id: login.data.user.id,
        },
      });
    },
    {
      onSuccess: (data, variables, context) => {
        team.splice(
          team.findIndex((player: any) => player.people[0].id === variables),
          1
        );
        setTeam([...team]);
      },
    }
  );

  useEffect(() => {
    getPlayers();
  }, [team]);

  const createData = (
    name: string | number,
    data1: string | number,
    data2?: string | number,
    data3?: string | number,
    data4?: string | number,
    data5?: string | number,
    data6?: string | number,
    data7?: string | number,
    data8?: string | number,
    data9?: string | number,
    data10?: string | number,
    data11?: string | number,
    data12?: string | number,
    data13?: string | number,
    data14?: string | number,
    data15?: string | number,
    data16?: string | number,
    data17?: string | number,
    data18?: string | number,
    data19?: string | number,
    data20?: string | number,
    data21?: string | number,
    data22?: string | number,
    data23?: string | number,
    data24?: string | number,
    data25?: string | number,
    data26?: string | number
  ) => {
    return {
      name,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
      data10,
      data11,
      data12,
      data13,
      data14,
      data15,
      data16,
      data17,
      data18,
      data19,
      data20,
      data21,
      data22,
      data23,
      data24,
      data25,
      data26,
    };
  };

  const rows = React.useMemo(
    () =>
      teams.map((team: any) => {
        return createData(
          team[1],
          team[0].stats[0].splits[0].stat.goals,
          team[0].stats[0].splits[0].stat.assists,
          team[0].stats[0].splits[0].stat.points,
          team[0].stats[0].splits[0].stat.games,
          team[0].stats[0].splits[0].stat.powerPlayGoals,
          team[0].stats[0].splits[0].stat.powerPlayPoints,
          team[0].stats[0].splits[0].stat.penaltyMinutes,
          team[0].stats[0].splits[0].stat.shots,
          team[0].stats[0].splits[0].stat.shotPct,
          team[0].stats[0].splits[0].stat.gameWinningGoals,
          team[0].stats[0].splits[0].stat.overTimeGoals,
          team[0].stats[0].splits[0].stat.shortHandedGoals,
          team[0].stats[0].splits[0].stat.shortHandedPoints,
          team[0].stats[0].splits[0].stat.blocked,
          team[0].stats[0].splits[0].stat.hits,
          team[0].stats[0].splits[0].stat.faceOffPct,
          team[0].stats[0].splits[0].stat.plusMinus,
          team[0].stats[0].splits[0].stat.evenTimeOnIce,
          team[0].stats[0].splits[0].stat.powerPlayTimeOnIce,
          team[0].stats[0].splits[0].stat.shortHandedTimeOnIce,
          team[0].stats[0].splits[0].stat.timeOnIce,
          team[0].stats[0].splits[0].stat.shifts,
          team[0].stats[0].splits[0].stat.timeOnIcePerGame,
          team[0].stats[0].splits[0].stat.evenTimeOnIcePerGame,
          team[0].stats[0].splits[0].stat.shortHandedTimeOnIcePerGame,
          team[0].stats[0].splits[0].stat.powerPlayTimeOnIcePerGame
        );
      }),
    [teams]
  );

  const GoalieRows = React.useMemo(
    () =>
      teams.map((team: any) => {
        return createData(
          team[1],
          team[0].stats[0].splits[0].stat.evenShots,
          `${
            Math.round(
              team[0].stats[0].splits[0].stat.evenStrengthSavePercentage
            ) || 0
          }%`,
          team[0].stats[0].splits[0].stat.games,
          team[0].stats[0].splits[0].stat.gamesStarted,
          team[0].stats[0].splits[0].stat.goalAgainstAverage,
          team[0].stats[0].splits[0].stat.goalsAgainst,
          team[0].stats[0].splits[0].stat.losses,
          team[0].stats[0].splits[0].stat.ot,
          `${
            Math.round(
              team[0].stats[0].splits[0].stat.powerPlaySavePercentage
            ) || 0
          }%`,
          team[0].stats[0].splits[0].stat.powerPlaySaves,
          team[0].stats[0].splits[0].stat.powerPlayShots,
          team[0].stats[0].splits[0].stat.savePercentage,
          team[0].stats[0].splits[0].stat.saves,
          `${
            Math.round(
              team[0].stats[0].splits[0].stat.shortHandedSavePercentage
            ) || 0
          }%`,
          team[0].stats[0].splits[0].stat.shortHandedSaves,
          team[0].stats[0].splits[0].stat.shortHandedShots,
          team[0].stats[0].splits[0].stat.shotsAgainst,
          team[0].stats[0].splits[0].stat.shutouts,
          team[0].stats[0].splits[0].stat.ties,
          team[0].stats[0].splits[0].stat.timeOnIce,
          team[0].stats[0].splits[0].stat.timeOnIcePerGame,
          team[0].stats[0].splits[0].stat.wins
        );
      }),
    [teams]
  );

  return (
    <Box>
      <Box className={classes.root}>
        {players && team.length ? (
          team.map((player: any) => {
            return (
              <Box className={classes.team} key={player.people[0].id}>
                <TeamLogo
                  team={player.people[0].currentTeam.name}
                  teamId={player.people[0].currentTeam.id}
                  classProp={classes.images}
                />
                <Box className={classes.player}>
                  <h2
                    className={classes.playerName}
                    onClick={() => router.push(`/stats/${player.people[0].id}`)}
                  >
                    {player.people[0].fullName}
                  </h2>
                  <p>
                    {player.people[0].primaryPosition.name} -{" "}
                    {player.people[0].primaryPosition.type}
                  </p>
                  <h3>{player.people[0].primaryNumber}</h3>
                  <p>{player.people[0].currentTeam.name}</p>
                  <p>{player.people[0].currentTeam.abbreviation}</p>
                </Box>
                <Button
                  onClick={() => {
                    deletePlayer.mutate(player.people[0].id);
                  }}
                  className={classes.deleteButton}
                >
                  Delete player
                </Button>
              </Box>
            );
          })
        ) : (
          <p>Add new players</p>
        )}
      </Box>
      <Box className={classes.playerStats}>
        <TableContainer component={Paper} className={classes.playerStatsPaper}>
          <Table aria-label="simple table" className={classes.defaultTable}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h2>Player</h2>
                </TableCell>
                <TableCell align="right">Goals</TableCell>
                <TableCell align="right">Assists</TableCell>
                <TableCell align="right">Points</TableCell>
                <TableCell align="right">Games</TableCell>
                <TableCell align="right">Power Play Goals</TableCell>
                <TableCell align="right">Power Play Points</TableCell>
                <TableCell align="right">Penalty Minutes</TableCell>
                <TableCell align="right">Shots</TableCell>
                <TableCell align="right">Shot Percentage</TableCell>
                <TableCell align="right">Game Winning Goals</TableCell>
                <TableCell align="right">Over Time Goals</TableCell>
                <TableCell align="right">Short Handed Goals</TableCell>
                <TableCell align="right">Short Handed Points</TableCell>
                <TableCell align="right">Blocked Shots</TableCell>
                <TableCell align="right">Hits</TableCell>
                <TableCell align="right">Face Off Percentage</TableCell>
                <TableCell align="right">Plus/Minus</TableCell>
                <TableCell align="right">Even Time on Ice</TableCell>
                <TableCell align="right">Power Play Time on Ice</TableCell>
                <TableCell align="right">Short Handed Time on Ice</TableCell>
                <TableCell align="right">Total Time on Ice</TableCell>
                <TableCell align="right">Shifts</TableCell>
                <TableCell align="right">Time on Ice per Game</TableCell>
                <TableCell align="right">Even Time on Ice per Game</TableCell>
                <TableCell align="right">
                  Short Handed Time on Ice per Game
                </TableCell>
                <TableCell align="right">
                  Power Play Time on Ice per Game
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover={true} key={`${row.name}-table`}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.data1}</TableCell>
                  <TableCell align="right">{row.data2}</TableCell>
                  <TableCell align="right">{row.data3}</TableCell>
                  <TableCell align="right">{row.data4}</TableCell>
                  <TableCell align="right">{row.data5}</TableCell>
                  <TableCell align="right">{row.data6}</TableCell>
                  <TableCell align="right">{row.data7}</TableCell>
                  <TableCell align="right">{row.data8}</TableCell>
                  <TableCell align="right">{row.data9}</TableCell>
                  <TableCell align="right">{row.data10}</TableCell>
                  <TableCell align="right">{row.data11}</TableCell>
                  <TableCell align="right">{row.data12}</TableCell>
                  <TableCell align="right">{row.data13}</TableCell>
                  <TableCell align="right">{row.data14}</TableCell>
                  <TableCell align="right">{row.data15}</TableCell>
                  <TableCell align="right">{row.data16}</TableCell>
                  <TableCell align="right">{row.data17}</TableCell>
                  <TableCell align="right">{row.data18}</TableCell>
                  <TableCell align="right">{row.data19}</TableCell>
                  <TableCell align="right">{row.data20}</TableCell>
                  <TableCell align="right">{row.data21}</TableCell>
                  <TableCell align="right">{row.data22}</TableCell>
                  <TableCell align="right">{row.data23}</TableCell>
                  <TableCell align="right">{row.data24}</TableCell>
                  <TableCell align="right">{row.data25}</TableCell>
                  <TableCell align="right">{row.data26}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className={classes.playerStats}>
        <TableContainer component={Paper} className={classes.playerStatsPaper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <h2>Goalies</h2>
                </TableCell>
                <TableCell align="right">Even Shots</TableCell>
                <TableCell align="right">
                  Even Strength Save Percentage
                </TableCell>
                <TableCell align="right">Games</TableCell>
                <TableCell align="right">Games Started</TableCell>
                <TableCell align="right">Goal Against Average</TableCell>
                <TableCell align="right">Goals Against</TableCell>
                <TableCell align="right">Losses</TableCell>
                <TableCell align="right">Overtime</TableCell>
                <TableCell align="right">Power Play Save Percentage</TableCell>
                <TableCell align="right">Power Play Saves</TableCell>
                <TableCell align="right">Power Play Shots</TableCell>
                <TableCell align="right">Save Percentage</TableCell>
                <TableCell align="right">Saves</TableCell>
                <TableCell align="right">
                  Short Handed Save Percentage
                </TableCell>
                <TableCell align="right">Short Handed Saves</TableCell>
                <TableCell align="right">Short Handed Shots</TableCell>
                <TableCell align="right">Shots Against</TableCell>
                <TableCell align="right">Shutouts</TableCell>
                <TableCell align="right">Ties</TableCell>
                <TableCell align="right">Time On Ice</TableCell>
                <TableCell align="right">Time On Ice Per Game</TableCell>
                <TableCell align="right">Wins</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {GoalieRows.map((row) => (
                <TableRow hover={true} key={`${row?.name}-table-goalies`}>
                  <TableCell component="th" scope="row">
                    {row?.name}
                  </TableCell>
                  <TableCell align="right">{row?.data1}</TableCell>
                  <TableCell align="right">{row?.data2}</TableCell>
                  <TableCell align="right">{row?.data3}</TableCell>
                  <TableCell align="right">{row?.data4}</TableCell>
                  <TableCell align="right">{row?.data5}</TableCell>
                  <TableCell align="right">{row?.data6}</TableCell>
                  <TableCell align="right">{row?.data7}</TableCell>
                  <TableCell align="right">{row?.data8}</TableCell>
                  <TableCell align="right">{row?.data9}</TableCell>
                  <TableCell align="right">{row?.data10}</TableCell>
                  <TableCell align="right">{row?.data11}</TableCell>
                  <TableCell align="right">{row?.data12}</TableCell>
                  <TableCell align="right">{row?.data13}</TableCell>
                  <TableCell align="right">{row?.data14}</TableCell>
                  <TableCell align="right">{row?.data15}</TableCell>
                  <TableCell align="right">{row?.data16}</TableCell>
                  <TableCell align="right">{row?.data17}</TableCell>
                  <TableCell align="right">{row?.data18}</TableCell>
                  <TableCell align="right">{row?.data19}</TableCell>
                  <TableCell align="right">{row?.data20}</TableCell>
                  <TableCell align="right">{row?.data21}</TableCell>
                  <TableCell align="right">{row?.data22}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyTeam;