import {
    createStyles
} from "@material-ui/core";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Colours from "../Context/Theme/Colours";
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px",
        width: "auto",
        background: Colours.BW[theme.palette.mode],
        color: Colours.BW_02[theme.palette.mode],
      },
      team: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        padding: "20px",
        // border: '5px solid black',
        borderRadius: "10px",
        width: "fit-content",
        height: "fit-content",
        background: "grey",
        backgroundAttachment: "fixed",
        color: "white",
      },
      player: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        padding: "20px",
        // border: '5px solid black',
        borderRadius: "10px",
        width: "250px",
        height: "250px",
        cursor: "pointer",
      },
      playerName: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        margin: "10px",
      },
      playerStats: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        background: Colours.BW[theme.palette.mode],
      },
      playerStatsBox: {
        display: "flex",
        flexDirection: "row",
        textAlign: "left",
        alignItems: "center",
      },
      paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        marginBottom: "100px",
        padding: "20px",
        // border: '5px solid black',
        borderRadius: "10px",
        width: "90%",
      },
      table: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
        padding: "20px",
      },
      playerStatsPaper: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "90%",
        margin: "10px",
        marginBottom: 100,
        borderRadius: "10px",
      },
      defaultTable: {},
      deleteButton: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        margin: "10px",
        cursor: "pointer",
        background: Colours.RED[theme.palette.mode],
        color: "white",
      },
      images: {
        height: "200px",
        width: "200px",
      },
    })
  );
  export default useStyles;