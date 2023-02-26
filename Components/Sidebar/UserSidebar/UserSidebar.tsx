import { Box, Tooltip } from "@material-ui/core";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  Clipboard2DataFill,
  Journal,
  LayoutTextWindow,
  List,
  Microsoft,
  X
} from "react-bootstrap-icons";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import useStyles from "./styles";

export const UserSidebar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={open ? classes.drawerOpen : classes.drawerClose}
    >
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className={classes.toolbar}>
          <NavbarToggle
            className={classes.sidebarToggle}
            onClick={handleDrawerOpen}
          >
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                    {open ? (
                      <X className={classes.toggle} />
                    ) : (
                      <List className={classes.toggle} />
                    )}
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={open ? "Close Menu" : "Open Menu"}>
                    {open ? (
                      <X className={classes.toggle} />
                    ) : (
                      <List className={classes.toggle} />
                    )}
                  </Tooltip>
                </p>
              </Box>
            )}
          </NavbarToggle>
          <Nav.Link className={classes.link} href="/dashboard">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Dashboard"}>
                    <Microsoft />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Dashboard"}>
                    <Microsoft />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/myteam">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"My Team"}>
                    <Journal />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"My Team"}>
                    <Journal />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/schedule">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Games"}>
                    <LayoutTextWindow />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Games"}>
                    <LayoutTextWindow />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
          <Nav.Link className={classes.link} href="/standings">
            {open ? (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Stands"}>
                    <Clipboard2DataFill />
                  </Tooltip>
                </p>
              </Box>
            ) : (
              <Box className={classes.menuItem}>
                <p>
                  <Tooltip title={"Stands"}>
                    <Clipboard2DataFill />
                  </Tooltip>
                </p>
              </Box>
            )}
          </Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};
