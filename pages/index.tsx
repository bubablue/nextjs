import React from "react";
import { TeamLogo } from "../Components/TeamLogo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Box, createStyles } from "@material-ui/core";
import Colours from "../Context/Theme/Colours";
import { Theme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useTeams } from "../Context/TeamProvider";
import axios from "axios";
import { styled } from "@mui/system";

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

const Root = styled("div")(({ theme }) => ({
  padding: "100px",
  paddingBottom: "300px",
  background: Colours.BW[theme.palette.mode],
  minHeight: "100vh",
}));
const Header = styled("h1")(({ theme }) => ({
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
}));
const Teams = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexWrap: "wrap",
  margin: "10px",
  background: Colours.BW[theme.palette.mode],
}));

const Team = styled("div")(({ theme }) => ({
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
}));

const Name = styled("a")(({ theme }) => ({
  display: "block",
  margin: "50px",
  textDecoration: "none",
  font: "15px Arial, sans-serif",
  color: "grey",
}));

const Dashboard = () => {
  const NHL_URL = "https://statsapi.web.nhl.com/api/v1/teams";
  const [teams, setTeams] = React.useState<any>([]);
  const router = useRouter();
  const getTeams = async () => {
    const response = await fetch(NHL_URL);
    const data = await response.json();
    setTeams(data.teams);
  };
  const { state, setState } = useTeams();
  const classes = useStyles();

  React.useEffect(() => {
    getTeams();
  }, []);

  const handleClick = () => {
    router.push("/dashboard");
  };

  const logOut = async () => {
    const response = await axios.delete("http://localhost:3001/logout", {
      withCredentials: true,
    });
    const user = response.data;
    if (user.logged_out) {
      handleLogout();
    }
  };
  const handleLogout = () => {
    setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
    router.push("/login");
  };

  return (
    <Root>
      <Header onClick={handleClick}>NHL TEAMS</Header>
      <Teams>
        {teams?.map((team: any) => (
          <Team key={team.shortName}>
            {/* <a key={team.name} className={classes.names} href={team.officialSiteUrl}> */}
            <Name
              onClick={() => {
                router.push(`/team/${team.id}`);
              }}
              key={team.name}
              style={{ cursor: "pointer" }}
            >
              <TeamLogo
                team={team.name}
                teamId={team.id}
                height="200px"
                width="200px"
              />
              {team.name}
            </Name>
          </Team>
        ))}
      </Teams>
    </Root>
  );
};

export default Dashboard;
