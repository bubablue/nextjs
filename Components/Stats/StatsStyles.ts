import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((_theme) =>
  createStyles({
    root: {
      padding: "100px",
      paddingBottom: "300px",
    },
    stats: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      margin: "10px",
      borderRadius: 10,
      boxShadow:
        "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
      borderBottom: "0px solid transparent !important",
      borderTop: "0px solid transparent !important",
      // background:
      //   "linear-gradient(-20deg, black 10%, rgb(135,92,37) 70%)",
      // backgroundAttachment: "fixed"
      "&::before": {
        top: "0",
        borderTop: "0px solid transparent !important",
        borderBottom: "0px solid transparent !important",
        borderLeft: "0px solid transparent !important",
        borderRight: "0px solid transparent !important",
        border: "0px solid transparent !important",
        height: "0",
        backgroundColor: "rgba(0,0,0,0) !important",
      },

    },
    team: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      justifyItems: "center",
      color: "white",
      // border: "20px solid rgb(5,5,80)",
      // borderRadius: "50px",
      padding: "10px !important",
      width: "550px",
    },
    title: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      // border: '1px solid black',
      // borderRadius: 10,
      color: "white",
      height: 50,
      padding: "10px",
      width: "auto",
    },
    statistics: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      // border: '1px solid black',
      // borderRadius: 10,
      justifyContent: "center",
      justifyItems: "center",
      flexWrap: "wrap",
      color: "black",
      marginTop: "100px",
      height: "500px",
      width: "500px",
    },
    statsText:{
      display: 'inline-block',
      font: "15px Arial-Black",
    },
    chart:{
      display: 'flex',
      height: '410px !important',
      width: '410px !important',
      // border: '1px solid black',
      // borderRadius: 10,
    },
    vs: {
      display: "flex",
      flexDirection: "row",
      borderRadius: 10,
      color: "black",
    },
    images: {
      height: "300px",
      width: "300px",
      // border: "30px solid darkblue",
      // borderRadius: "50px",
    },
  })
);

export default useStyles;
