import { Button, Tooltip } from "@material-ui/core";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  BoxArrowInLeft,
  BoxArrowInRight,
  Clipboard2DataFill,
  House,
  List,
  PeopleFill,
  PlayBtn,
  X,
} from "react-bootstrap-icons";
import NavbarToggle from "react-bootstrap/NavbarToggle";
// import { useNavigate } from "react-router-dom";
// import { createStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTeams } from "../../Context/TeamProvider";
import { styled } from "@mui/system";

interface Props {
  logout?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}
// const useStyles = makeStyles((_theme) =>
//   createStyles({
//     root: {},
//     mainHeader: {
//       display: "flex",
//       justifyContent: "center",
//       justifySelf: "center",
//       alignItems: "center",
//       textAlign: "center",
//       background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
//       border: 0,
//       borderRadius: 10,
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "white",
//       height: 50,
//       padding: "10px",
//       margin: "0px 5% 50px 5%",
//       width: "90%",
//     },
//     sidebarToggle: {
//       background: "transparent",
//       border: 0,
//       color: "white",
//     },
//     toggle: {
//       display: "flex",
//       justifyContent: "center",
//       justifySelf: "center",
//       alignItems: "center",
//       textAlign: "center",
//       background: "transparent",
//       border: 0,
//       color: "white",
//       height: "40px",
//       width: "40px",
//       "&:hover": {
//         color: "#FF8E53",
//         cursor: "pointer",
//       },
//     },
//     drawerOpen: {
//       position: "fixed",
//       top: 0,
//       background: "rgba(0,0,0,0.8)",
//       width: "200px",
//       height: "100%",
//       border: "none",
//       transition: "width 0.3s ease-in-out",
//       overflowX: "hidden",
//       zIndex: 1,
//     },
//     drawerClose: {
//       position: "fixed",
//       top: 0,
//       height: "100%",
//       background: "rgba(0,0,0,0.8)",
//       width: "70px",
//       border: "none",
//       transition: "width 0.3s ease-in-out",
//       overflowX: "hidden",
//       zIndex: 1,
//     },
//     toolbar: {
//       display: "flex",
//       alignItems: "center",
//       justifyItems: "left",
//       justifyContent: "left",
//       textAlign: "left",
//       flexDirection: "column",
//     },
//     link: {
//       textDecoration: "none",
//       textAlign: "left",
//       color: "white",
//       fontSize: "1.5rem",
//       fontWeight: "bold",
//       margin: "10px",
//       padding: "10px",
//       "&:hover": {
//         color: "#FF8E53",
//       },
//     },
//     // menuItem: {},
//     menuItemText: {
//       color: "white !important",
//       position: "fixed",
//       bottom: "0px",
//       size: "1.8rem",
//     },
//     menuItemModeSwitcher: {
//       color: "white !important",
//       position: "fixed",
//       bottom: "10px",
//       fontSize: "0.8rem",
//     },
//   })
// );

const Drawer = styled(Navbar)(({ theme }) => ({
  position: "fixed",
  top: 0,
  background: "rgba(0,0,0,0.8)",
  height: "100%",
  border: "none",
  transition: "width 0.3s ease-in-out",
  overflowX: "hidden",
  zIndex: 1,
}));
const NavToggle = styled(NavbarToggle)(({ theme }) => ({
  background: "transparent",
  border: 0,
  color: "white",
}));

const Navigation = styled(Nav)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "left",
  justifyContent: "left",
  textAlign: "left",
  flexDirection: "column",
}));

const LinkItem = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  textAlign: "left",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "10px",
  padding: "10px",
  "&:hover": {
    color: "#FF8E53",
  },
}));
const NavButton = styled(Button)(({ theme }) => ({
  color: "white !important",
  position: "fixed",
  bottom: "0px",
  size: "1.8rem",
}));
const ModeSwitcher = styled(Button)(({ theme }) => ({
  color: "white !important",
  position: "fixed",
  bottom: "10px",
  fontSize: "0.8rem",
}));

export const Sidebar = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  // const classes = useStyles();
  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const { state, mode, setMode } = useTeams();

  const handleModeSwitch = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Drawer
      bg="dark"
      variant="dark"
      style={open ? { width: "200px" } : { width: "70px" }}
    >
      <Navigation>
        <NavToggle onClick={handleDrawerOpen}>
          <div>
            <p>
              <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                {open ? (
                  <X
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      justifySelf: "center",
                      alignItems: "center",
                      textAlign: "center",
                      background: "transparent",
                      border: 0,
                      color: "white",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                ) : (
                  <List
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      justifySelf: "center",
                      alignItems: "center",
                      textAlign: "center",
                      background: "transparent",
                      border: 0,
                      color: "white",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                )}
              </Tooltip>
            </p>
          </div>
        </NavToggle>
        <LinkItem href="/dashboard">
          {open ? (
            <div>
              <p>
                <Tooltip title={"Home"}>
                  <House />
                </Tooltip>
              </p>
            </div>
          ) : (
            <div>
              <p>
                <Tooltip title={"Home"}>
                  <House />
                </Tooltip>
              </p>
            </div>
          )}
        </LinkItem>
        <LinkItem href="/teams">
          {open ? (
            <div>
              <p>
                <Tooltip title={"Teams"}>
                  <PeopleFill />
                </Tooltip>
              </p>
            </div>
          ) : (
            <div>
              <p>
                <Tooltip title={"Teams"}>
                  <PeopleFill />
                </Tooltip>
              </p>
            </div>
          )}
        </LinkItem>
        <LinkItem href="/schedule">
          {open ? (
            <div>
              <p>
                <Tooltip title={"Games"}>
                  <PlayBtn />
                </Tooltip>
              </p>
            </div>
          ) : (
            <div>
              <p>
                <Tooltip title={"Games"}>
                  <PlayBtn />
                </Tooltip>
              </p>
            </div>
          )}
        </LinkItem>
        <LinkItem href="/standings">
          {open ? (
            <div>
              <p>
                <Tooltip title={"Stands"}>
                  <Clipboard2DataFill />
                </Tooltip>
              </p>
            </div>
          ) : (
            <div>
              <p>
                <Tooltip title={"Stands"}>
                  <Clipboard2DataFill />
                </Tooltip>
              </p>
            </div>
          )}
        </LinkItem>
        {/* <Nav.Link className={classes.link} href="/news">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"News"}>
                    <Book />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"News"}>
                    <Book />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link> */}
        <ModeSwitcher
          onClick={handleModeSwitch}
        >
          {mode === "light" ? "Dark" : "Light"}
        </ModeSwitcher>
        {/* <NavButton
          onClick={
            state.user.logged_in ? props.logout : () => router.push("/login")
          }
        >
          {state.user.logged_in ? <BoxArrowInLeft /> : <BoxArrowInRight />}
        </NavButton> */}
      </Navigation>
    </Drawer>
  );
};

export default Sidebar;
