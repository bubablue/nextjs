import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../../Context/Theme/Colours"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stats: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      borderRadius: 10,
      boxShadow:
        "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
      borderBottom: "0px solid transparent !important",
      borderTop: "0px solid transparent !important",
      // background:
      //   "linear-gradient(-20deg, black 10%, rgb(135,92,37) 70%)",
      // backgroundAttachment: "fixed",
    },
    team: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      justifyItems: "center",
      color: Colours.BW_02[theme.palette.mode],
      margin: "10px",
      border: `1px solid ${Colours.BW_02[theme.palette.mode]}`,
      borderRadius: "10px",
      padding: "10px !important",
      width: "15rem",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      // background: "black",
      border: 0,
      borderRadius: 10,
      color: Colours.BW[theme.palette.mode],
      height: 50,
      padding: "10px",
      width: "auto",
      background: "linear-gradient(-20deg, rgb(0,0,0) 30%, #FF8E53 90%)",
      backgroundAttachment: 'fixed',
    },
    players: {
      display: "inline",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      color: Colours.BW_02[theme.palette.mode],
      margin: "10px",
      // border: '1px solid black',
      // borderRadius: '10px',
      padding: "10px !important",
      width: "20rem",
      height: "47rem",
    },
    images: {
      height: "50px",
      width: "50px",
    },
  })
);

export default useStyles;
