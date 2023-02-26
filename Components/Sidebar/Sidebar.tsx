import { useRouter } from "next/router";
import React from "react";
import { useTeams } from "../../Context/TeamProvider";
import useStyles from "./styles";
import { BoxArrowInLeft, BoxArrowInRight } from "react-bootstrap-icons";
import { Button, Tooltip } from "@material-ui/core";

interface Props {
  logout?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
}

export const Sidebar = (props: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const { state, mode, setMode } = useTeams();
  const logout = props.logout;
  const router = useRouter();

  const handleModeSwitch = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  console.log("Sidebar.tsx: ", logout);

  return (
    <>
    </>
  );
};
export default Sidebar;
