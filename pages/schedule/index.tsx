import { Accordion, Button, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { TeamLogo } from "../../Components/TeamLogo";
import Colours from "../../Context/Theme/Colours";
import { useTeams } from "../../Context/TeamProvider";
import useStyles from "../../styles/schedule"

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
