/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { TeamsContext } from "../Context/TeamProvider";

interface props {
  team: string;
  teamId: string;
  classProp?: string;
  width?: string;
  height?: string;
}

export const TeamLogo = (props: props) => {
  const {
    Boston_Bruins,
    Buffalo_Sabres,
    Detroit_Red_Wings,
    Florida_Panthers,
    Montreal_Canadiens,
    Ottawa_Senators,
    Tampa_Bay_Lightning,
    Toronto_Maple_Leafs,
    Carolina_Hurricanes,
    Columbus_Blue_Jackets,
    New_Jersey_Devils,
    New_York_Islanders,
    New_York_Rangers,
    Philadelphia_Flyers,
    Pittsburgh_Penguins,
    Washington_Capitals,
    Chicago_Blackhawks,
    Colorado_Avalanche,
    Dallas_Stars,
    Minnesota_Wild,
    Nashville_Predators,
    St_Louis_Blues,
    Winnipeg_Jets,
    Anaheim_Ducks,
    Arizona_Coyotes,
    Calgary_Flames,
    Edmonton_Oilers,
    Los_Angeles_Kings,
    San_Jose_Sharks,
    Seattle_Kraken,
    Vancouver_Canucks,
    Vegas_Golden_Knights,
  } = useContext(TeamsContext);

  function switchTeams(team: string, teamId: string) {
    switch (team) {
      case "Boston Bruins":
        return (
          <img
            key={`Boston_Bruins-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Boston_Bruins.src}
            alt="Boston Bruins"
          />
        );
      case "Buffalo Sabres":
        return (
          <img
            key={`Buffalo_Sabres-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Buffalo_Sabres.src}
            alt="Buffalo Sabres"
          />
        );
      case "Detroit Red Wings":
        return (
          <img
            key={`Detroit_Red_Wings-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Detroit_Red_Wings.src}
            alt="Detroit Red Wings"
          />
        );
      case "Florida Panthers":
        return (
          <img
            key={`Florida_Panthers-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Florida_Panthers.src}
            alt="Florida Panthers"
          />
        );
      case "Montréal Canadiens":
        return (
          <img
            key={`Montreal_Canadiens-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Montreal_Canadiens.src}
            alt="Montreal Canadiens"
          />
        );
      case "Ottawa Senators":
        return (
          <img
            key={`Ottawa_Senators-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Ottawa_Senators.src}
            alt="Ottawa Senators"
          />
        );
      case "Tampa Bay Lightning":
        return (
          <img
            key={`Tampa_Bay_Lightning-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Tampa_Bay_Lightning.src}
            alt="Tampa Bay Lightning"
          />
        );
      case "Toronto Maple Leafs":
        return (
          <img
            key={`Toronto_Maple_Leafs-${teamId}`}
            className={props.classProp}
            width={props.width}
            height={props.height}
            src={Toronto_Maple_Leafs.src}
            alt="Toronto Maple Leafs"
          />
        );
      case "Carolina Hurricanes":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Carolina_Hurricanes-${teamId}`}
            src={Carolina_Hurricanes.src}
            alt="Carolina Hurricanes"
          />
        );
      case "Columbus Blue Jackets":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Columbus_Blue_Jackets-${teamId}`}
            src={Columbus_Blue_Jackets.src}
            alt="Columbus Blue Jackets"
          />
        );
      case "New Jersey Devils":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`New_Jersey_Devils-${teamId}`}
            src={New_Jersey_Devils.src}
            alt="New Jersey Devils"
          />
        );
      case "New York Islanders":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`New_York_Islanders-${teamId}`}
            src={New_York_Islanders.src}
            alt="New York Islanders"
          />
        );
      case "New York Rangers":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`New_York_Rangers-${teamId}`}
            src={New_York_Rangers.src}
            alt="New York Rangers"
          />
        );
      case "Philadelphia Flyers":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Philadelphia_Flyers-${teamId}`}
            src={Philadelphia_Flyers.src}
            alt="Philadelphia Flyers"
          />
        );
      case "Pittsburgh Penguins":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Pittsburgh_Penguins-${teamId}`}
            src={Pittsburgh_Penguins.src}
            alt="Pittsburgh Penguins"
          />
        );
      case "Washington Capitals":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Washington_Capitals-${teamId}`}
            src={Washington_Capitals.src}
            alt="Washington Capitals"
          />
        );
      case "Chicago Blackhawks":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Chicago_Blackhawks-${teamId}`}
            src={Chicago_Blackhawks.src}
            alt="Chicago Blackhawks"
          />
        );
      case "Colorado Avalanche":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Colorado_Avalanche-${teamId}`}
            src={Colorado_Avalanche.src}
            alt="Colorado Avalanche"
          />
        );
      case "Dallas Stars":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Dallas_Stars-${teamId}`}
            src={Dallas_Stars.src}
            alt="Dallas Stars"
          />
        );
      case "Minnesota Wild":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Minnesota_Wild-${teamId}`}
            src={Minnesota_Wild.src}
            alt="Minnesota Wild"
          />
        );
      case "Nashville Predators":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Nashville_Predators-${teamId}`}
            src={Nashville_Predators.src}
            alt="Nashville Predators"
          />
        );
      case "St. Louis Blues":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`St_Louis_Blues-${teamId}`}
            src={St_Louis_Blues.src}
            alt="St. Louis Blues"
          />
        );
      case "Winnipeg Jets":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Winnipeg_Jets-${teamId}`}
            src={Winnipeg_Jets.src}
            alt="Winnipeg Jets"
          />
        );
      case "Anaheim Ducks":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Anaheim_Ducks-${teamId}`}
            src={Anaheim_Ducks.src}
            alt="Anaheim Ducks"
          />
        );
      case "Arizona Coyotes":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Arizona_Coyotes-${teamId}`}
            src={Arizona_Coyotes.src}
            alt="Arizona Coyotes"
          />
        );
      case "Calgary Flames":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Calgary_Flames-${teamId}`}
            src={Calgary_Flames.src}
            alt="Calgary Flames"
          />
        );
      case "Edmonton Oilers":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Edmonton_Oilers-${teamId}`}
            src={Edmonton_Oilers.src}
            alt="Edmonton Oilers"
          />
        );
      case "Los Angeles Kings":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Los_Angeles_Kings-${teamId}`}
            src={Los_Angeles_Kings.src}
            alt="Los Angeles Kings"
          />
        );
      case "San Jose Sharks":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`San_Jose_Sharks-${teamId}`}
            src={San_Jose_Sharks.src}
            alt="San Jose Sharks"
          />
        );
      case "Vancouver Canucks":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Vancouver_Canucks-${teamId}`}
            src={Vancouver_Canucks.src}
            alt="Vancouver Canucks"
          />
        );
      case "Vegas Golden Knights":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Vegas_Golden_Knights-${teamId}`}
            src={Vegas_Golden_Knights.src}
            alt="Vegas Golden Knights"
          />
        );
      case "Seattle Kraken":
        return (
          <img
            className={props.classProp}
            width={props.width}
            height={props.height}
            key={`Seattle_Kraken-${props.teamId}`}
            src={Seattle_Kraken.src}
            alt="Seattle Kraken"
          />
        );
      default:
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img />;
    }
  }
  return switchTeams(props.team, props.teamId);
};
