import React, { createContext, useContext, useEffect, useState } from "react";
import Anaheim_Ducks from "../public/Logos/Icons/Anaheim_Ducks.png";
import Arizona_Coyotes from "../public/Logos/Icons/Arizona_Coyotes.png";
import Boston_Bruins from "../public/Logos/Icons/Boston_Bruins.png";
import Buffalo_Sabres from "../public/Logos/Icons/Buffalo_Sabres.png";
import Calgary_Flames from "../public/Logos/Icons/Calgary_Flames.png";
import Carolina_Hurricanes from "../public/Logos/Icons/Carolina_Hurricanes.png";
import Chicago_Blackhawks from "../public/Logos/Icons/Chicago_Blackhawks.png";
import Colorado_Avalanche from "../public/Logos/Icons/Colorado_Avalanche.png";
import Columbus_Blue_Jackets from "../public/Logos/Icons/Columbus_Blue_Jackets.png";
import Dallas_Stars from "../public/Logos/Icons/Dallas_Stars.png";
import Detroit_Red_Wings from "../public/Logos/Icons/Detroit_Red_Wings.png";
import Edmonton_Oilers from "../public/Logos/Icons/Edmonton_Oilers.png";
import Florida_Panthers from "../public/Logos/Icons/Florida_Panthers.png";
import Los_Angeles_Kings from "../public/Logos/Icons/Los_Angeles_Kings.png";
import Minnesota_Wild from "../public/Logos/Icons/Minnesota_Wild.png";
import Montreal_Canadiens from "../public/Logos/Icons/Montreal_Canadiens.png";
import Nashville_Predators from "../public/Logos/Icons/Nashville_Predators.png";
import New_Jersey_Devils from "../public/Logos/Icons/New_Jersey_Devils.png";
import New_York_Islanders from "../public/Logos/Icons/New_York_Islanders.png";
import New_York_Rangers from "../public/Logos/Icons/New_York_Rangers.png";
import Ottawa_Senators from "../public/Logos/Icons/Ottawa_Senators.png";
import Philadelphia_Flyers from "../public/Logos/Icons/Philadelphia_Flyers.png";
import Pittsburgh_Penguins from "../public/Logos/Icons/Pittsburgh_Penguins.png";
import San_Jose_Sharks from "../public/Logos/Icons/San_Jose_Sharks.png";
import Seattle_Kraken from "../public/Logos/Icons/Seattle_Kraken.png";
import St_Louis_Blues from "../public/Logos/Icons/St_Louis_Blues.png";
import Tampa_Bay_Lightning from "../public/Logos/Icons/Tampa_Bay_Lightning.png";
import Toronto_Maple_Leafs from "../public/Logos/Icons/Toronto_Maple_Leafs.png";
import Vancouver_Canucks from "../public/Logos/Icons/Vancouver_Canucks.png";
import Vegas_Golden_Knights from "../public/Logos/Icons/Vegas_Golden_Knights.png";
import Washington_Capitals from "../public/Logos/Icons/Washington_Capitals.png";
import Winnipeg_Jets from "../public/Logos/Icons/Winnipeg_Jets.png";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export interface IAppcontext {
  Anaheim_Ducks: StaticImageData;
  Arizona_Coyotes: StaticImageData;
  Boston_Bruins: StaticImageData;
  Buffalo_Sabres: StaticImageData;
  Calgary_Flames: StaticImageData;
  Carolina_Hurricanes: StaticImageData;
  Chicago_Blackhawks: StaticImageData;
  Colorado_Avalanche: StaticImageData;
  Columbus_Blue_Jackets: StaticImageData;
  Dallas_Stars: StaticImageData;
  Detroit_Red_Wings: StaticImageData;
  Edmonton_Oilers: StaticImageData;
  Florida_Panthers: StaticImageData;
  Los_Angeles_Kings: StaticImageData;
  Minnesota_Wild: StaticImageData;
  Montreal_Canadiens: StaticImageData;
  Nashville_Predators: StaticImageData;
  New_Jersey_Devils: StaticImageData;
  New_York_Islanders: StaticImageData;
  New_York_Rangers: StaticImageData;
  Ottawa_Senators: StaticImageData;
  Philadelphia_Flyers: StaticImageData;
  Pittsburgh_Penguins: StaticImageData;
  San_Jose_Sharks: StaticImageData;
  Seattle_Kraken: StaticImageData;
  St_Louis_Blues: StaticImageData;
  Tampa_Bay_Lightning: StaticImageData;
  Toronto_Maple_Leafs: StaticImageData;
  Vancouver_Canucks: StaticImageData;
  Vegas_Golden_Knights: StaticImageData;
  Washington_Capitals: StaticImageData;
  Winnipeg_Jets: StaticImageData;
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
  state: any;
  setState: (state: any) => void;
}

export const TeamsContext = createContext<IAppcontext>({
  Anaheim_Ducks,
  Arizona_Coyotes,
  Boston_Bruins,
  Buffalo_Sabres,
  Calgary_Flames,
  Carolina_Hurricanes,
  Chicago_Blackhawks,
  Colorado_Avalanche,
  Columbus_Blue_Jackets,
  Dallas_Stars,
  Detroit_Red_Wings,
  Edmonton_Oilers,
  Florida_Panthers,
  Los_Angeles_Kings,
  Minnesota_Wild,
  Montreal_Canadiens,
  Nashville_Predators,
  New_Jersey_Devils,
  New_York_Islanders,
  New_York_Rangers,
  Ottawa_Senators,
  Philadelphia_Flyers,
  Pittsburgh_Penguins,
  San_Jose_Sharks,
  Seattle_Kraken,
  St_Louis_Blues,
  Tampa_Bay_Lightning,
  Toronto_Maple_Leafs,
  Vancouver_Canucks,
  Vegas_Golden_Knights,
  Washington_Capitals,
  Winnipeg_Jets,
  mode: "light",
  setMode: () => {},
  state: {},
  setState: () => {},
});

export const TeamsProvider = (props: { children?: React.ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("light");

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
  }, [state]);


  const handleLogin = (user) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: user,
    });
  };
  const toggleDarkMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('UserTheme', newMode)
    }
    // document.documentElement.style.removeProperty('background')
    // document.body.style.removeProperty('background')
  }

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('UserTheme')
    ) {
      const newMode = localStorage.getItem('UserTheme')
      if (newMode === 'light' || newMode === 'dark') {
        setMode(newMode)
      }
    }
  }, [])
  return (
    <TeamsContext.Provider
      value={{
        Anaheim_Ducks,
        Arizona_Coyotes,
        Boston_Bruins,
        Buffalo_Sabres,
        Calgary_Flames,
        Carolina_Hurricanes,
        Chicago_Blackhawks,
        Colorado_Avalanche,
        Columbus_Blue_Jackets,
        Dallas_Stars,
        Detroit_Red_Wings,
        Edmonton_Oilers,
        Florida_Panthers,
        Los_Angeles_Kings,
        Minnesota_Wild,
        Montreal_Canadiens,
        Nashville_Predators,
        New_Jersey_Devils,
        New_York_Islanders,
        New_York_Rangers,
        Ottawa_Senators,
        Philadelphia_Flyers,
        Pittsburgh_Penguins,
        San_Jose_Sharks,
        Seattle_Kraken,
        St_Louis_Blues,
        Tampa_Bay_Lightning,
        Toronto_Maple_Leafs,
        Vancouver_Canucks,
        Vegas_Golden_Knights,
        Washington_Capitals,
        Winnipeg_Jets,
        mode,
        setMode: toggleDarkMode,
        state,
        setState,
      }}
    >
      {props.children}
    </TeamsContext.Provider>
  );
};

export const useTeams = () => useContext(TeamsContext);

export default TeamsProvider
