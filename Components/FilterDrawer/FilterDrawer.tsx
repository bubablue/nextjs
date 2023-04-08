import { Select } from "@material-ui/core";
import { Button, Drawer } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { useTeams } from "../../Context/TeamProvider";
import Colours from "../../Context/Theme/Colours";
import useStyles from "./styles";

interface Props {
  state: {
    team: string;
    position: string;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      team: string;
      position: string;
    }>
  >;
}

export const FilterDrawer: React.FC<Props> = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  const { mode } = useTeams();
  const state = props.state;
  const setState = props.setState;

  const classes = useStyles();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={classes.root}>
      <Button type="primary" onClick={showDrawer} className={classes.filterDrawerButton}>
        Filter
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={visible}
        className={classes.drawer}
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          justifyItems: "center",
          color: Colours.BW_02[mode],
          border: `1px solid ${Colours.BW_02[mode]}`,
          borderRadius: "10px",
          padding: "100px !important",
          background: Colours.BW[mode],
        }}
      >
        <div className={classes.drawerContent}>
          <div className={classes.drawerHeader}>
            <h1
              style={{
                color: Colours.BW_02[mode],
              }}
            >
              Filters
            </h1>
          </div>
          <div className={classes.drawerBody}>
            <div className={classes.drawerBodyItem}>
              <div className={classes.drawerBodyItemHeader}>
                <h4
                  style={{
                    color: Colours.BW_02[mode],
                  }}
                >
                  Position
                </h4>
              </div>
              <div className={classes.drawerBody}>
                <Select
                  native
                  value={state.position}
                  inputProps={{
                    name: "position",
                    id: "position-native-simple",
                  }}
                  onChange={(event) => {
                    setState({
                      ...state,
                      position: event.target.value as string,
                    });
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={"Goalie"}>Goalie</option>
                  <option value={"Defenseman"}>Defenseman</option>
                  <option value={"Left Wing"}>Left Wing</option>
                  <option value={"Right Wing"}>Right Wing</option>
                  <option value={"Center"}>Center</option>
                </Select>
              </div>
            </div>
            <div className={classes.drawerBodyItem}>
              <div className={classes.drawerBodyItemHeader}>
                <h4
                  style={{
                    color: Colours.BW_02[mode],
                  }}
                >
                  Team
                </h4>
              </div>
              <div className={classes.drawerBodyItemBody}>
                <Select
                  native
                  value={state.team}
                  inputProps={{
                    name: "team",
                    id: "team-native-simple",
                  }}
                  onChange={(event) => {
                    setState({
                      ...state,
                      team: event.target.value as string,
                    });
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option>New Jersey Devils</option>
                  <option>New York Islanders</option>
                  <option>New York Rangers</option>
                  <option>Philadelphia Flyers</option>
                  <option>Pittsburgh Penguins</option>
                  <option>Boston Bruins</option>
                  <option>Buffalo Sabres</option>
                  <option>Montréal Canadiens</option>
                  <option>Ottawa Senators</option>
                  <option>Toronto Maple Leafs</option>
                  <option>Carolina Hurricanes</option>
                  <option>Florida Panthers</option>
                  <option>Tampa Bay Lightning</option>
                  <option>Washington Capitals</option>
                  <option>Chicago Blackhawks</option>
                  <option>Detroit Red Wings</option>
                  <option>Nashville Predators</option>
                  <option>St. Louis Blues</option>
                  <option>Calgary Flames</option>
                  <option>Colorado Avalanche</option>
                  <option>Edmonton Oilers</option>
                  <option>Vancouver Canucks</option>
                  <option>Anaheim Ducks</option>
                  <option>Dallas Stars</option>
                  <option>Los Angeles Kings</option>
                  <option>San Jose Sharks</option>
                  <option>Columbus Blue Jackets</option>
                  <option>Minnesota Wild</option>
                  <option>Winnipeg Jets</option>
                  <option>Arizona Coyotes</option>
                  <option>Vegas Golden Knights</option>
                  <option>Seattle Kraken</option>
                </Select>
              </div>
            </div>
            {/* <div className={classes.drawerBodyItem}>
              <div className={classes.drawerBodyItemHeader}>
                <Title
                  level={5}
                  style={{
                    color: Colours.BW_02[mode],
                  }}
                >
                  Division
                </Title>
              </div>
              <div className={classes.drawerBodyItemBody}>
                <Select
                  native
                  value={state.division}
                  inputProps={{
                    name: "division",
                    id: "division-native-simple",
                  }}
                  onChange={(event) => {
                    setState({
                      ...state,
                      division: event.target.value as string,
                    });
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Atlantic</option>
                  <option value={2}>Metropolitan</option>
                  <option value={3}>Central</option>
                  <option value={4}>Pacific</option>
                </Select>
              </div>
            </div> */}
            {/* <div className={classes.drawerBodyItem}>
              <div className={classes.drawerBodyItemHeader}>
                <Title
                  level={5}
                  style={{
                    color: Colours.BW_02[mode],
                  }}
                >
                  Conference
                </Title>
              </div>
              <div className={classes.drawerBodyItemBody}>
                <Select
                  native
                  value={state.conference}
                  inputProps={{
                    name: "conference",
                    id: "conference-native-simple",
                  }}
                  onChange={(event) => {
                    setState({
                      ...state,
                      conference: event.target.value as string,
                    });
                  }}
                  className={classes.select}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Eastern</option>
                  <option value={2}>Western</option>
                </Select>
              </div>
            </div> */}
          </div>
        </div>
        <div className={classes.drawerButtons}>
          <Button type="primary" onClick={onClose}>
            Close
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
