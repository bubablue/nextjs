// import '@/styles/globals.css'
import axios from "axios";
import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import TeamsProvider from "../Context/TeamProvider";
import NhlThemeProvider from "../Context/Theme/ThemeProvider";
import Dashboard from "./dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import UserSidebar from "../components/Sidebar/UserSidebar/UserSidebar";

export default function App({ Component, pageProps }) {

  const router = useRouter();
  
  const [state, setState] = React.useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  const checkLoginStatus = async () => {
    await axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((r) => r.data)
      .then((user) => {
        if (user.logged_in) {
          handleLogin(user);
        } else {
          // handleLogout();
        }
      })
      .catch((err) => {
        console.log(err);
        // handleLogout();
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    checkLoginStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Component, pageProps]);

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
    router.push('/login')
  };

  const handleLogin = (user) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: user,
    });
  };

  return (
    <TeamsProvider>
      <NhlThemeProvider state={state}>
        <Sidebar logout={logOut} position={"left"}/>
        <Component {...pageProps} />
        <UserSidebar position={"right"} />
      </NhlThemeProvider>
    </TeamsProvider>
  );
}
