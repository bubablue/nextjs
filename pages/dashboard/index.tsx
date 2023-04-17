import { Box, createStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import React from "react";
import { TeamLogo } from "../../Components/TeamLogo";
import { useTeams } from "../../Context/TeamProvider";
import Colours from "../../Context/Theme/Colours";
import Link from "next/link";
import team from "../../styles/team";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: "100px",
      paddingBottom: "300px",
      background: Colours.BW[theme.palette.mode],
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "center",
      justifySelf: "center",
      alignItems: "center",
      textAlign: "center",
      background: Colours.BW_02[theme.palette.mode],
      border: 0,
      borderRadius: 10,
      // boxShadow: theme.palette.mode === 'light' ? "0 3px 5px 2px grey" : 'none',
      color: Colours.BW[theme.palette.mode],
      height: 80,
      padding: "10px",
      margin: "50px 10% 50px 10%",
      width: "80%",
    },
    teams: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexWrap: "wrap",
      margin: "10px",
      background: Colours.BW[theme.palette.mode],
    },
    team: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      // border: '5px solid black',
      borderRadius: "10px",
      width: "200px",
      height: "200px",
    },
    names: {
      display: "block",
      margin: "50px",
      textDecoration: "none",
      font: "15px Arial, sans-serif",
      color: "grey",
    },
    images: {
      height: "200px",
      width: "200px",
    },
  });
});

const Dashboard = () => {
  const NHL_URL = "https://statsapi.web.nhl.com/api/v1/teams";
  const [teams, setTeams] = React.useState<any>([]);
  const router = useRouter();
  const getTeams = async () => {
    const response = await fetch(NHL_URL);
    const data = await response.json();
    setTeams(data.teams);
  };
  const { logout } = useTeams();
  const classes = useStyles();

  React.useEffect(() => {
    getTeams();
  }, []);

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.header} onClick={handleClick}>
        NHL TEAMS
      </h1>
      <div className={classes.teams}>
        {teams?.map((team: any) => (
          <div className={classes.team} key={team.shortName}>
            {/* <a key={team.name} className={classes.names} href={team.officialSiteUrl}> */}
            <Link
              key={team.name}
              className={classes.names}
              href={`/team/${team.id}`}
            >
              <TeamLogo
                classProp={classes.images}
                team={team.name}
                teamId={team.id}
              />
              {team.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
