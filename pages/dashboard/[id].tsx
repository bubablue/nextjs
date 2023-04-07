import { Button, Card } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { TeamLogo } from "../../Components/TeamLogo";
import useStyles from "../../styles/team";

export const TeamStats = () => {
  const router = useRouter();
  const { id } = router.query;
  const NHL_URL = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-01-01&endDate=2023-12-31&hydrate=team,linescore,metadata,seriesSummary(series)&teamId=${id}&site=en_nhlCA&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.ticket,schedule.game.seriesSummary`;
  const classes = useStyles();

  const [display, setDisplay] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);

  let getStats = useCallback(
    async (url: string) => {
      const response = await axios.get(url);
      setData(response.data.dates);
      return response.data;
    },
    [id]
  );

  let getTeamName = useCallback(async () => {
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/teams/${id}`
    );
    return response.data.teams[0].name;
  }, [id]);

  const { data: teamName } = useQuery(["Team", id], () => getTeamName(), {
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const { status: statsStatus, isLoading } = useQuery(
    ["Schedule", id],
    () => getStats(NHL_URL),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchInterval: 5000,
      refetchOnMount: true,
    }
  );

  useEffect(() => {
    getStats(NHL_URL);
  }, [getStats]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (statsStatus === "error") {
    return <p>Error</p>;
  }

  const handleChange = () => {
    setDisplay(!display);
  };

  const isMobile = window.innerWidth <= 1000;

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Team Stats</h1>
      <div className={classes.subtitle}>
        <h2>{teamName}</h2>
      </div>
      <div className={classes.section}>
        <h2>Team Stats</h2>
        {
          <div>
            {data.map((stats: any) => {
              return (
                <div
                  key={
                    stats.games[0].teams.home.team.name +
                    stats.games[0].teams.away.team.name
                  }
                >
                  {stats.games.map((game: any) => {
                    return (
                      <Card
                        className={classes.accordion}
                        key={
                          game.teams.home.team.name + game.teams.away.team.name
                        }
                      >
                        <div className={classes.teams}>
                          <div className={classes.date}>
                            <h3>
                              {game.teams.home.team.name} -{" "}
                              {game.teams.away.team.name}
                            </h3>
                            <p style={{ color: "grey" }}>
                              {new Date(game.gameDate).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <div>
                            <h3
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <TeamLogo
                                classProp={classes.imagesSmall}
                                team={game.teams.home.team.name}
                                teamId={game.teams.home.team.id}
                              />
                              <div className={classes.score}>
                                {game.teams.home.score} -{" "}
                                {game.teams.away.score}
                              </div>
                              <TeamLogo
                                classProp={classes.imagesSmall}
                                team={game.teams.away.team.name}
                                teamId={game.teams.home.team.id}
                              />
                            </h3>
                          </div>
                        </div>
                        <div>
                          {game.tickets?.map((ticket: any) => {
                            return (
                              game.status.abstractGameState != "Final" && (
                                <div
                                  key={ticket.ticketType + ticket.ticketLink}
                                >
                                  <Button
                                    href={ticket.ticketLink}
                                    className={classes.link}
                                  >
                                    {ticket.ticketType}
                                  </Button>
                                </div>
                              )
                            );
                          })}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default TeamStats;
