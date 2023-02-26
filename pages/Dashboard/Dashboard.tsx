import React from "react";
import { TeamLogo } from "../../Components/TeamLogo";
import { makeStyles } from "@mui/styles";
import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
// import useStyles from "./Styles";

const Dashboard = () => {
  const NHL_URL = "https://statsapi.web.nhl.com/api/v1/teams";
  const [teams, setTeams] = React.useState<any>([]);

  const getTeams = async () => {
    const response = await fetch(NHL_URL);
    const data = await response.json();
    setTeams(data.teams);
    console.log(data);
  };

  const useStyles = makeStyles((_theme: Theme) => {
    return createStyles({
      images: {
        width: "100px",
        height: "100px",
      },
    });
  });
  const classes = useStyles();

  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <h1></h1>
      {teams &&
        teams.map((team: any) => (
          <div key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.venue.name}</p>
            <TeamLogo
              classProp={classes.images}
              team={team.name}
              teamId={team.id}
            />
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
