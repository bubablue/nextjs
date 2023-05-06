// import { Theme } from "@mui/material";
// import { createStyles, makeStyles } from "@mui/styles";
import { Button, Card } from "@material-ui/core";
import Colours from "../Context/Theme/Colours";
import { styled } from "@mui/system";

// const useStyles = makeStyles(
//   (theme: Theme) =>
//     createStyles({
//       root: {
//         padding: '10px',
//         paddingBottom: '300px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         overflow: 'hidden',
//         background: Colours.BW[theme.palette.mode],
//       },
//       title: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: Colours.BW_02[theme.palette.mode],
//         border: 0,
//         borderRadius: 10,
//         color: Colours.BW[theme.palette.mode],
//         height: 100,
//         padding: "10px",
//         width: "90%",
//         // background: "linear-gradient(-20deg, rgb(0,0,0) 30%, #FF8E53 90%)",
//         // backgroundAttachment: 'fixed',
//       },
//       subtitle: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: Colours.BW_02[theme.palette.mode],
//         border: 0,
//         borderRadius: 10,
//         color: Colours.BW[theme.palette.mode],
//         height: 90,
//         padding: "10px",
//         width: "80%",
//       },
//       section:{
//         margin: '50px',
//         marginBottom: '300px',
//         textAlign: "center",
//         borderRadius: 10,
//         padding: "50px",
//         color: Colours.BW_02[theme.palette.mode],
//       },
//       accordion:{
//         display: 'flex',
//         alignContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         justifyContent: "center",
//         justifyItems: "center",
//         margin: '10px',
//         borderRadius: 10,
//         boxShadow: '10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important',
//         borderBottom: '0px solid transparent !important',
//         borderTop: '0px solid transparent !important',
//         background: "transparent !important",
//         backgroundAttachment: 'fixed',
//         '&::before': {
//           top: '0',
//           borderTop: '0px solid transparent !important',
//           borderBottom: '0px solid transparent !important',
//           borderLeft: '0px solid transparent !important',
//           borderRight: '0px solid transparent !important',
//           border: '0px solid transparent !important',
//           height: '0',
//           backgroundColor: 'rgba(0,0,0,0) !important',
//         },
//       },
//       date:{
//         color: Colours.BW_02[theme.palette.mode],
//         margin: '10px',
//         border: `1px solid ${Colours.BW_02[theme.palette.mode]}`,
//         borderRadius: '10px',
//         padding: '10px', 
//         width: '80%',
//         cursor: 'pointer',
//         background: Colours.BW[theme.palette.mode],
//         transition: 'background 0.5s ease-in-out',
//         '&:hover': {
//           background: "rgba(0,0,0, 0.1)",
//           transition: 'background 0.5s ease-in-out',
//         }
//       },
//       teams: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: "wrap",
//         font: "15px Arial, sans-serif",
//       },
//       time: {
//         display: "block",
//         textDecoration: "none",
//         margin: "10px",
//         font: "50px Arial, sans-serif",
//         color: "rgb(200,200,200)",
//       },
//       components:{
//         color: Colours.BW_02[theme.palette.mode],
//       },
//       score: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: "wrap",
//         width: "100px",
//         textDecoration: "none",
//         font: "40px Arial-Black, sans-serif",
//         color: Colours.BW_02[theme.palette.mode],
//         margin: "10px",
//       },
//       link: {
//         textDecoration: "none",
//         font: "15px Arial, sans-serif",
//         color: `${Colours.GREY_04[theme.palette.mode]} !important`,
//         borderRadius: 5,
//         background: 'transparent !important',
//         transition: 'background 0.5s ease-in-out',
//         '&:hover': {
//           background: `${Colours.BW[theme.palette.mode]} !important`,
//           color: `${Colours.BW_02[theme.palette.mode]} !important`,
//           transition: 'background 0.5s ease-in-out',
//         }
//       },
//       images: {
//         height: '300px',
//         width: '300px',
//       },
//       imagesSmall: {
//         height: '60px',
//         width: '60px',
//       }
//     })
// )

export const Root = styled('div')(({ theme }) => ({
  padding: '10px',
  paddingBottom: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  background: Colours.BW[theme.palette.mode],
}));

export const Title = styled('h1')(({ theme }) => ({
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

export const Subtitle = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: Colours.BW_02[theme.palette.mode],
  border: 0,
  borderRadius: 10,
  color: Colours.BW[theme.palette.mode],
  height: 90,
  padding: "10px",
  width: "80%",
}));

export const Section = styled('div')(({ theme }) => ({
  margin: '50px',
  marginBottom: '300px',
  textAlign: "center",
  borderRadius: 10,
  padding: "50px",
  color: Colours.BW_02[theme.palette.mode],
}));

export const Accordion = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: "center",
  justifyItems: "center",
  margin: '10px',
  borderRadius: 10,
  boxShadow: '10px 2px 10px 10px rgba(255, 255, 255, 0), -10px -2px 10px 10px rgba(255, 255, 255, 0)  !important',
  borderBottom: '0px solid transparent !important',
  borderTop: '0px solid transparent !important',
  background: "transparent !important",
  backgroundAttachment: 'fixed',
  '&::before': {
    top: '0',
    borderTop: '0px solid transparent !important',
    borderBottom: '0px solid transparent !important',
    borderLeft: '0px solid transparent !important',
    borderRight: '0px solid transparent !important',
    border: '0px solid transparent !important',
    height: '0',
    backgroundColor: 'rgba(0,0,0,0) !important',
  },
}));

export const DateDiv = styled('div')(({ theme }) => ({
  color: Colours.BW_02[theme.palette.mode],
  margin: '10px',
  border: `1px solid ${Colours.BW_02[theme.palette.mode]}`,
  borderRadius: '10px',
  padding: '10px',
  width: '80%',
  cursor: 'pointer',
  background: Colours.BW[theme.palette.mode],
  transition: 'background 0.5s ease-in-out',
  '&:hover': {
    background: "rgba(0,0,0, 0.1)",
    transition: 'background 0.5s ease-in-out',
  }
}));

export const Teams = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  font: "15px Arial, sans-serif",
}));

export const Time = styled('div')(({ theme }) => ({
  display: "block",
  textDecoration: "none",
  margin: "10px",
  font: "50px Arial, sans-serif",
  color: "rgb(200,200,200)",
}));

export const Components = styled('div')(({ theme }) => ({
  color: Colours.BW_02[theme.palette.mode],
}));

export const Score = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100px",
  textDecoration: "none",
  font: "40px Arial-Black, sans-serif",
  color: Colours.BW_02[theme.palette.mode],
  margin: "10px",
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  font: "15px Arial, sans-serif",
  color: `${Colours.GREY_04[theme.palette.mode]} !important`,
  borderRadius: 5,
  background: 'transparent !important',
  transition: 'background 0.5s ease-in-out',
  '&:hover': {
    background: `${Colours.BW[theme.palette.mode]} !important`,
    color: `${Colours.BW_02[theme.palette.mode]} !important`,
    transition: 'background 0.5s ease-in-out',
  }
}));

export const Images = styled('img')(({ theme }) => ({
  height: '300px',
  width: '300px',
}));

export const ImagesSmall = styled('img')(({ theme }) => ({
  height: '60px',
  width: '60px',
}));

// export default useStyles;