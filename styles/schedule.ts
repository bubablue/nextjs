import { Accordion } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { styled } from "@mui/system";
import Colours from "../Context/Theme/Colours";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: "100px",
//       paddingBottom: "300px",
//       background: Colours.BW[theme.palette.mode],
//     },
//     titleBox: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     title: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: Colours.BW_02[theme.palette.mode],
//       border: 0,
//       borderRadius: 10,
//       color: Colours.BW[theme.palette.mode],
//       height: 100,
//       padding: "10px",
//       width: "90%",
//     },
//     subtitle: {
//       display: "flex",
//       justifyContent: "center",
//       flexDirection: "column",
//       alignItems: "center",
//       background: "black",
//       border: 0,
//       borderRadius: 10,
//       color: Colours.BW_02[theme.palette.mode],
//       height: 90,
//       padding: "10px",
//       width: "auto",
//     },
//     section: {
//       margin: "50px",
//       marginBottom: "30px",
//       textAlign: "center",
//       borderRadius: 10,
//       padding: "50px",
//     },
//     accordion: {
//       display: "flex",
//       alignContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//       justifyContent: "center",
//       textAlign: "center",
//       justifyItems: "center",
//       margin: "10px",
//       borderRadius: 10,
//       boxShadow:
//         "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
//       borderBottom: "0px solid transparent !important",
//       borderTop: "0px solid transparent !important",
//       background: "transparent !important",
//       backgroundAttachment: "fixed",
//       "&::before": {
//         top: "0",
//         borderTop: "0px solid transparent !important",
//         borderBottom: "0px solid transparent !important",
//         borderLeft: "0px solid transparent !important",
//         borderRight: "0px solid transparent !important",
//         border: "0px solid transparent !important",
//         height: "0",
//         backgroundColor: "rgba(0,0,0,0) !important",
//       },
//     },
//     schedule: {
//       display: "flex",
//       justifyContent: "center",
//       justifySelf: "center",
//       alignItems: "center",
//       flexWrap: "wrap",
//       textAlign: "center",
//       color: "white",
//       height: "fit-content",
//       margin: "10px",
//     },
//     date: {
//       color: Colours.BW_02[theme.palette.mode],
//       textAlign: "center",
//       margin: "10px",
//       cursor: "pointer",
//       border: "1px solid black",
//       borderRadius: "10px",
//       padding: "10px",
//       width: "80vw",
//       height: "fit-content",
//     },
//     game: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundAttachment: "fixed",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//       background: "linear-gradient(-20deg, rgb(0,0,0) 30%, #FF8E53 90%)",
//       borderRadius: 10,
//       margin: "10px",
//       width: "350px",
//       height: "350px",
//     },
//     teams: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexWrap: "wrap",
//       font: "15px Arial, sans-serif",
//     },
//     versus: {
//       display: "flex",
//       justifyContent: "center",
//       flexDirection: "row",
//       alignItems: "center",
//       flexWrap: "wrap",
//       font: "15px Arial, sans-serif",
//     },
//     time: {
//       display: "block",
//       textDecoration: "none",
//       margin: "10px",
//       font: "50px Arial, sans-serif",
//       color: "rgb(200,200,200)",
//     },
//     score: {
//       textDecoration: "none",
//       font: "30px Arial, sans-serif",
//       color: "rgb(200,200,200)",
//     },
//     link: {
//       textDecoration: "none",
//       font: "15px Arial, sans-serif",
//       color: "rgb(200,200,200) !important",
//       borderRadius: 5,
//       background: "transparent !important",
//       // transition: 'background 0.5s ease-in-out',
//       // '&:hover': {
//       //   background: 'white !important',
//       //   transition: 'background 0.5s ease-in-out',
//       // }
//     },
//     live: {
//       background: "red",
//       borderRadius: "10px",
//       padding: "5px",
//       color: "white",
//       fontSize: "15px",
//       fontWeight: "bold",
//       cursor: "pointer",
//     },
//     images: {
//       height: "70px",
//       width: "70px",
//       // borderRadius: '20%',
//       // border: '1px solid black',
//       marginLeft: "10px",
//       marginRight: "10px",
//     },
//   })
// );

export const Root = styled("div")(({ theme }) => ({
  padding: "100px",
  paddingBottom: "300px",
  background: Colours.BW[theme.palette.mode],
}));

export const TitleBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Title = styled("h1")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: Colours.BW_02[theme.palette.mode],
  border: 0,
  borderRadius: 10,
  color: Colours.BW[theme.palette.mode],
  height: 100,
  padding: "10px",
  width: "90%",
}));

export const Subtitle = styled("h2")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  background: "black",
  border: 0,
  borderRadius: 10,
  color: Colours.BW_02[theme.palette.mode],
  height: 90,
  padding: "10px",
  width: "90%",
}));

export const Section = styled("div")(({ theme }) => ({
  margin: "50px",
  marginBottom: "30px",
  textAlign: "center",
  borderRadius: 10,
  padding: "50px",
}));

export const MuiAccordion = styled(Accordion)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  justifyItems: "center",
  margin: "10px",
  borderRadius: 10,
  boxShadow:
    "10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important",
  borderBottom: "0px solid transparent !important",
  borderTop: "0px solid transparent !important",
  background: "transparent !important",
  backgroundAttachment: "fixed",
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
}));

export const ScheduleDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  justifySelf: "center",
  alignItems: "center",
  flexWrap: "wrap",
  textAlign: "center",
  color: "white",
  height: "fit-content",
  margin: "10px",
}));

export const DateDiv = styled("div")(({ theme }) => ({
  color: Colours.BW_02[theme.palette.mode],
  textAlign: "center",
  margin: "10px",
  cursor: "pointer",
  border: "1px solid black",
  borderRadius: "10px",
  padding: "10px",
  width: "80vw",
  height: "fit-content",
}));

export const Game = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundAttachment: "fixed !important",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  background: "linear-gradient(-20deg, rgb(0,0,0) 30%, #FF8E53 90%)",
  borderRadius: 10,
  margin: "10px",
  width: "350px",
  height: "350px",
}));

export const Teams = styled("p")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  font: "15px Arial, sans-serif",
}));

export const Versus = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  font: "15px Arial, sans-serif",
}));

export const Time = styled("p")(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  margin: "10px",
  font: "50px Arial, sans-serif",
  color: "rgb(200,200,200)",
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  font: "15px Arial, sans-serif",
  color: "rgb(200,200,200) !important",
  borderRadius: 5,
  background: "transparent !important",
  cursor: "pointer",
  // transition: 'background 0.5s ease-in-out',
  // '&:hover': {
  //   background: 'white !important',
  //   transition: 'background 0.5s ease-in-out',
  // }
}));

export const Live = styled("p")(({ theme }) => ({
  background: "red",
  borderRadius: "10px",
  padding: "5px",
  color: "white",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
}));

export const Score = styled("p")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  font: "15px Arial, sans-serif",
}));


// export default useStyles;
