import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../../Context/Theme/Colours";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      justifyItems: "center",
      color: Colours.BW_02[theme.palette.mode],
      // border: `1px solid ${Colours.BW_02[theme.palette.mode]}`,
      // borderRadius: "10px",
      background: Colours.BW[theme.palette.mode],
    },
    filterDrawerButton: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      position: "relative",
      right: 0,
    },
    drawer: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      justifyItems: "center",
      color: Colours.BW_02[theme.palette.mode],
      // border: `1px solid ${Colours.BW_02[theme.palette.mode]}`,
      // borderRadius: "10px",
      padding: "100px !important",
      background: Colours.BW[theme.palette.mode],
    },
    select: {
      color: Colours.BW_02[theme.palette.mode],
      "& .MuiSelect-select": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-icon": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-selectMenu": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-select:focus": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-select.Mui-disabled": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-select.Mui-disabled:focus": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-select.Mui-disabled:hover": {
        color: Colours.BW_02[theme.palette.mode],
      },
      "& .MuiSelect-select.Mui-disabled:active": {
        color: Colours.BW_02[theme.palette.mode],
      },
    },
    drawerContent: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerHeader: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerBody: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerBodyItem: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerBodyItemHeader: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerBodyItemBody: {
      color: Colours.BW_02[theme.palette.mode],
    },
    drawerButtons: {
      display: "flex",
      position: "absolute",
      bottom: 50,
      right: 50,
    },
  })
);

export default useStyles;
