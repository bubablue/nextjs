import { Button } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { TeamLogo } from "../../Components/TeamLogo";
import { useTeams } from "../../Context/TeamProvider";
import {
  DateDiv,
  Game,
  LinkButton,
  Live,
  MuiAccordion,
  Root,
  ScheduleDiv,
  Score,
  Section,
  Subtitle,
  Teams,
  Time,
  Title,
  TitleBox,
  Versus,
} from "../../styles/schedule";

export const Schedule = () => {
  // const classes = useStyles({});
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
            <Live onClick={() => router.push(`/games/${game.gamePk}`)}>
              LIVE
            </Live>
            <Score>
              {game.teams.home.score} - {game.teams.away.score}
            </Score>
          </div>
        );
      case "Final":
        return (
          <Score>
            {game.teams.home.score} - {game.teams.away.score}
          </Score>
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
          <Game
            key={`game-${game.gamePk}-date-${date.date}`}
            id={`schedule-${game.gamePk}-date-${date.date}`}
          >
            <Teams key={`${game.teams.home.team.name}-home`}>
              {game.teams.home.team.name} vs {game.teams.away.team.name}
            </Teams>
            <Versus
              key={`${game.teams.home.team.name}-home-vs-${game.teams.away.team.name}-away`}
            >
              <TeamLogo
                team={game.teams.home.team.name}
                teamId={game.teams.home.team.id}
                height={"70px"}
                width={"70px"}
                style={{ marginRight: "10px", marginLeft: "10px" }}
                key={`${game.teams.home.team.name}-home-logo`}
              />
              <p>VS</p>
              <TeamLogo
                team={game.teams.away.team.name}
                teamId={game.teams.away.team.id}
                height={"70px"}
                width={"70px"}
                style={{ marginRight: "10px", marginLeft: "10px" }}
                key={`${game.teams.away.team.name}-away-logo`}
              />
            </Versus>
            <Time
              key={`${game.teams.home.team.name}-home-vs-${game.teams.away.team.name}-away-time`}
            >
              {`${new Date(game.gameDate).getHours()}:${
                new Date(game.gameDate).getMinutes() === 0
                  ? "00"
                  : new Date(game.gameDate).getMinutes()
              }`}
            </Time>
            {status(game)}
            {(scheduled(game) ||
              game.status.abstractGameState === "Preview") && (
              <LinkButton
                onClick={() => {
                  window.open("https://www.espnplayer.com/home", "_blank");
                }}
                key={`button-${game.gamePk}-date-${date.date}`}
              >
                Watch Live on ESPN
              </LinkButton>
            )}
          </Game>
        );
      }
    );
  };

  // close all accordions
  const closeAll = () => {
    dates.map((date: any) => {
      setExpanded((prev) => {
        const newExpanded = [...prev];
        newExpanded[dates.indexOf(date)] = false;
        return newExpanded;
      });
    });
  };

  // open all accordions
  const openAll = () => {
    dates.map((date: any) => {
      setExpanded((prev) => {
        const newExpanded = [...prev];
        newExpanded[dates.indexOf(date)] = true;
        return newExpanded;
      });
    });
  };

  return (
    <Root>
      <div>
        <TitleBox>
          <Title>Schedule</Title>
        </TitleBox>
        <TitleBox>
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            onClick={() => {
              openAll();
            }}
          >
            Open All
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              closeAll();
            }}
          >
            Close All
          </Button>
        </TitleBox>
        {dates.map((date: any, index: any) => {
          return (
            isToday(date) && (
              <Section key={`section-${date.date}-today`}>
                <MuiAccordion
                  expanded={true}
                  key={`accordion-${date.date}-today`}
                >
                  <DateDiv
                    onClick={() => {
                      setGames();
                    }}
                    key={`title-${date.date}-today`}
                  >
                    <h2>Available Today</h2>
                  </DateDiv>
                  <ScheduleDiv key={`schedule-${date.date}-today`}>
                    {scheduledGames(date)}
                  </ScheduleDiv>
                </MuiAccordion>
              </Section>
            )
          );
        })}
      </div>
      <TitleBox>
        <Subtitle>Scheduled Games</Subtitle>
      </TitleBox>
      <Section>
        {dates.map((date: any, index: number) => {
          if (index > 3) {
            return (
              <MuiAccordion
                expanded={expanded[index]}
                key={`accordion-${date.date}-all`}
              >
                <DateDiv
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
                </DateDiv>
                <ScheduleDiv key={`schedule-${index}`}>
                  {scheduledGames(date)}
                </ScheduleDiv>
              </MuiAccordion>
            );
          }
        })}
      </Section>
    </Root>
  );
};

export default Schedule;
