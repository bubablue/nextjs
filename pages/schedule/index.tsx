import { Accordion, AccordionDetails, AccordionSummary, Box, Button, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { TeamLogo } from "../../Components/TeamLogo";
import Colours from "../../Context/Theme/Colours";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useTeams } from "../../Context/TeamProvider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "100px",
      paddingBottom: "300px",
      background: Colours.BW[theme.palette.mode],
    },
    sidebar: {
      position: "fixed",
      top: "0",
      left: "0",
      height: "100%",
      zIndex: 1,
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: "60px",
      background: Colours.BW[theme.palette.mode],
    },
    titleBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: Colours.BW_02[theme.palette.mode],
      border: 0,
      borderRadius: 10,
      color: Colours.BW[theme.palette.mode],
      height: 100,
      padding: "10px",
      width: "90%",
    },
    subtitle: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      background: "black",
      border: 0,
      borderRadius: 10,
      color: Colours.BW_02[theme.palette.mode],
      height: 90,
      padding: "10px",
      width: "auto",
    },
    section: {
      margin: "50px",
      marginBottom: "30px",
      textAlign: "center",
      borderRadius: 10,
      padding: "50px",
    },
    accordion: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      justifyItems: "center",
      margin: "10px",
      borderRadius: 10,
      boxShadow:
        "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
      borderBottom: "0px solid transparent !important",
      borderTop: "0px solid transparent !important",
      background: "transparent !important",
      backgroundAttachment: "fixed",
      "&::before": {
        top: "0",
        borderTop: "0px solid transparent !important",
        borderBottom: "0px solid transparent !important",
        borderLeft: "0px solid transparent !important",
        borderRight: "0px solid transparent !important",
        border: "0px solid transparent !important",
        height: "0",
        backgroundColor: "rgba(0,0,0,0) !important",
      },
    },
    schedule: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      flexWrap: "wrap",
      textAlign: "center",
      color: "white",
      height: "fit-content",
      margin: "10px",
    },
    date: {
      color: Colours.BW_02[theme.palette.mode],
      textAlign: "center",
      margin: "10px",
      cursor: "pointer",
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px",
      width: "80vw",
      height: "5vh",
    },
    game: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      background: "linear-gradient(-20deg, rgb(0,0,0) 30%, #FF8E53 90%)",
      borderRadius: 10,
      margin: "10px",
      width: "350px",
      height: "350px",
    },
    teams: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      font: "15px Arial, sans-serif",
    },
    versus: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      font: "15px Arial, sans-serif",
    },
    time: {
      display: "block",
      textDecoration: "none",
      margin: "10px",
      font: "50px Arial, sans-serif",
      color: "rgb(200,200,200)",
    },
    score: {
      textDecoration: "none",
      font: "30px Arial, sans-serif",
      color: "rgb(200,200,200)",
    },
    link: {
      textDecoration: "none",
      font: "15px Arial, sans-serif",
      color: "rgb(200,200,200) !important",
      borderRadius: 5,
      background: "transparent !important",
      // transition: 'background 0.5s ease-in-out',
      // '&:hover': {
      //   background: 'white !important',
      //   transition: 'background 0.5s ease-in-out',
      // }
    },
    live: {
      background: "red",
      borderRadius: "10px",
      padding: "5px",
      color: "white",
      fontSize: "15px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    images: {
      height: "70px",
      width: "70px",
      // borderRadius: '20%',
      // border: '1px solid black',
      marginLeft: "10px",
      marginRight: "10px",
    },
  })
);

export const Schedule = () => {
  const classes = useStyles({});
  const [schedule, setSchedule] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const array = new Array(100).fill(true);
  const [expanded, setExpanded] = useState<boolean[]>(array);
  const router = useRouter();

  const { logout } = useTeams();

  const getSchedule = useCallback(async () => {
    const NHL_URL =
      "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-01-01&endDate=2023-12-31&hydrate=team,linescore,metadata,seriesSummary(series)";
    await axios
      .get(NHL_URL)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // setSchedule(data);
        setDates(data.dates);
      });
    // return response.data;
  }, []);

  const {
    data: scheduleData,
    status: _reqStatus,
    isLoading,
  } = useQuery(["schedule"], getSchedule, {
    refetchInterval: 5000,
    // onSuccess: (data: any) => {
    //   const newData: any = scheduleData
    //   setDates(newData.dates)
    // },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const isUpToDate = (date: { date: string | number | Date }) => {
    console.log(new Date(Date.now()).getUTCDate());
    return new Date(Date.now()).getMonth() > new Date(date.date).getMonth() ||
      (new Date(Date.now()).getMonth() === new Date(date.date).getMonth() &&
        new Date(Date.now()).getUTCDate() - 2 >=
          new Date(date.date).getUTCDate())
      ? true
      : false;
  };

  const isToday = (date: { date: string | number | Date }) => {
    return new Date(Date.now()).getUTCFullYear() ===
      new Date(date.date).getUTCFullYear() &&
      new Date(Date.now()).getMonth() === new Date(date.date).getMonth() &&
      new Date(Date.now()).getUTCDate() === new Date(date.date).getUTCDate()
      ? true
      : false;
  };

  const scheduled = (game: { gameDate: string | number | Date }) => {
    return new Date(Date.now()).getUTCFullYear() ===
      new Date(game.gameDate).getUTCFullYear() &&
      new Date(Date.now()).getMonth() === new Date(game.gameDate).getMonth() &&
      new Date(Date.now()).getUTCDate() === new Date(game.gameDate).getUTCDate()
      ? true
      : false;
  };

  const setGames = () => {
    dates.map((date: any) => {
      setExpanded((prev) => {
        const newExpanded = [...prev];
        const oldExpanded = [...prev];
        newExpanded[dates.indexOf(date)] = !newExpanded[dates.indexOf(date)];
        return isUpToDate(date) ? newExpanded : oldExpanded;
      });
    });
  };

  const status = (game: any) => {
    switch (game.status.abstractGameState) {
      case "Live":
        return (
          <div>
            <p
              className={classes.live}
              onClick={() => router.push(`/games/${game.gamePk}`)}
            >
              LIVE
            </p>
            <p className={classes.score}>
              {game.teams.home.score} - {game.teams.away.score}
            </p>
          </div>
        );
      case "Final":
        return (
          <p className={classes.score}>
            {game.teams.home.score} - {game.teams.away.score}
          </p>
        );
      case "Postponed":
        return <p>Not Played Yet</p>;
      case "Cancelled":
        return <p>Not Available</p>;
      case "Preview":
        return <p></p>;
      default:
        return <p>Not Available</p>;
    }
  };

  const scheduledGames = (date: any) => {
    return date.games.map(
      (game: { gamePk?: any; teams?: any; gameDate: any; status?: any }) => {
        return (
          <div
            className={classes.game}
            key={`game-${game.gamePk}-date-${date.date}`}
            id={`schedule-${game.gamePk}-date-${date.date}`}
          >
            <p
              className={classes.teams}
              key={`${game.teams.home.team.name}-home`}
            >
              {game.teams.home.team.name} vs {game.teams.away.team.name}
            </p>
            <div
              className={classes.versus}
              key={`${game.teams.home.team.name}-home-vs-${game.teams.away.team.name}-away`}
            >
              <TeamLogo
                team={game.teams.home.team.name}
                teamId={game.teams.home.team.id}
                classProp={classes.images}
                key={`${game.teams.home.team.name}-home-logo`}
              />
              <p>VS</p>
              <TeamLogo
                team={game.teams.away.team.name}
                teamId={game.teams.away.team.id}
                classProp={classes.images}
                key={`${game.teams.away.team.name}-away-logo`}
              />
            </div>
            <p
              className={classes.time}
              key={`${game.teams.home.team.name}-home-vs-${game.teams.away.team.name}-away-time`}
            >
              {`${new Date(game.gameDate).getHours()}:${
                new Date(game.gameDate).getMinutes() === 0
                  ? "00"
                  : new Date(game.gameDate).getMinutes()
              }`}
            </p>
            {status(game)}
            {(scheduled(game) ||
              game.status.abstractGameState === "Preview") && (
              <Button
                className={classes.link}
                onClick={() => {
                  window.open("https://www.espnplayer.com/home", "_blank");
                }}
                key={`button-${game.gamePk}-date-${date.date}`}
              >
                Watch Live on ESPN
              </Button>
            )}
          </div>
        );
      }
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar logout={logout} />
      </div>
      <div>
        <div className={classes.titleBox}>
          <h1 className={classes.title}>Schedule</h1>
        </div>
        {dates.map((date: any, index: any) => {
          return (
            isToday(date) && (
              <div
                className={classes.section}
                key={`section-${date.date}-today`}
              >
                <Accordion
                  expanded={true}
                  className={classes.accordion}
                  key={`accordion-${date.date}-today`}
                >
                  <div
                    className={classes.date}
                    onClick={() => {
                      setGames();
                    }}
                    key={`title-${date.date}-today`}
                  >
                    <h2>Available Today</h2>
                  </div>
                  <div
                    className={classes.schedule}
                    key={`schedule-${date.date}-today`}
                  >
                    {scheduledGames(date)}
                  </div>
                </Accordion>
              </div>
            )
          );
        })}
      </div>
      <div className={classes.titleBox}>
        <h2 className={classes.title}>Scheduled Games</h2>
      </div>
      <div className={classes.section}>
        {dates.map((date: any, index: number) => {
          if (index > 3) {
            return (
              <Accordion
                expanded={expanded[index]}
                className={classes.accordion}
                key={`accordion-${date.date}-all`}
              >
                <div
                  className={classes.date}
                  onClick={() => {
                    setExpanded((prev) => {
                      const newExpanded = [...prev];
                      newExpanded[index] = !newExpanded[index];
                      return newExpanded;
                    });
                  }}
                  key={`title-${date.date}`}
                >
                  <h2 key={`date-${date.date}`}>{date.date}</h2>
                </div>
                <div className={classes.schedule} key={`schedule-${index}`}>
                  {scheduledGames(date)}
                </div>
              </Accordion>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Schedule;
