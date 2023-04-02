import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Colours from "../Context/Theme/Colours";

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
      padding: "100px !important",
      background: Colours.BW[theme.palette.mode],
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      border: 0,
      borderRadius: 10,
      color: Colours.BW_02[theme.palette.mode],
      height: 50,
      padding: "10px",
      width: "auto",
      background: Colours.BW[theme.palette.mode],
      backgroundAttachment: "fixed",
    },
    subtitle: {
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
      backgroundAttachment: "fixed",
    },
    players: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      flexWrap: "wrap",
      color: Colours.BW[theme.palette.mode],
      border: "1px solid black",
      borderRadius: "10px",
      padding: "1000px !important",
      width: "20rem",
      height: "47rem",
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
    search:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      background: Colours.BW[theme.palette.mode],
      border: `3px solid ${Colours.GREY_06[theme.palette.mode]}`,
      borderRadius: "10px",
      color: Colours.BW_02[theme.palette.mode],
    },
    filterBar:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: "10px",
      padding: "20px",
      background: Colours.BW[theme.palette.mode],
      border: `3px solid ${Colours.GREY_06[theme.palette.mode]}`,
      borderRadius: "10px",
      color: Colours.BW_02[theme.palette.mode],
      width: "90%",
      minWidth: "fit-content",
    },
    filterBarText:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      background: Colours.BW[theme.palette.mode],
      color: Colours.BW_02[theme.palette.mode],
    },
    playerStatsPaper: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      flexWrap: "wrap",
      width: "90%",
      minWidth: "20rem",
      margin: "10px",
      marginBottom: 100,
      borderRadius: "10px",
      background: Colours.BW[theme.palette.mode],
      border: `3px solid ${Colours.GREY_06[theme.palette.mode]}`,
    },
    listItem:{
      color : Colours.BW_02[theme.palette.mode],
    },
    defaultTable: {},
    sorting:{
      color: `${Colours.BW_02[theme.palette.mode]} !important`,
      fontSize: "1rem",
      margin: "10px",
      '&:hover': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '&:active': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '&:focus': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '& .MuiSvgIcon-root': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '& .MuiSvgIcon-root:hover': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '& .MuiSvgIcon-root:active': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '& .MuiSvgIcon-root:focus': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`,
      },
      '& .MuiTableSortLabel-icon': {
        color: `${Colours.BW_02[theme.palette.mode]} !important`
      }
      
    },
    icons:{
      color: Colours.BW_02[theme.palette.mode],
      fontSize: "1rem",
      margin: "10px",
      '&:hover': {
        color: Colours.GREY_04[theme.palette.mode],
      },
    },
    pagination:{
      color: Colours.BW_02[theme.palette.mode],
    },
    images: {
      height: "50px",
      width: "50px",
    },
    logo: {
      height: "200px",
      width: "200px",
    }
  })
);

export default useStyles;
