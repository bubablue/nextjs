// // import { createStyles } from "@material-ui/core";
// import { Grid } from "@mui/material";
// // import { Theme } from "@mui/material/styles";
// // import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/system";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React from "react";

// // const useStyles = makeStyles((_theme: Theme) =>
// //   createStyles({
// //     root: {
// //       display: "flex",
// //       flexDirection: "column",
// //       justifyContent: "center",
// //       alignSelf: "center",
// //       alignItems: "center",
// //       textAlign: "center",
// //       padding: "50px",
// //       //   borderRadius: "10px",
// //       height: "110rem",
// //       //   boxShadow: "0 3px 5px 2px grey",
// //       background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// //     },
// //     headerBox: {
// //       display: "flex",
// //       flexDirection: "column",
// //       justifyContent: "center",
// //       alignSelf: "center",
// //       alignItems: "center",
// //       textAlign: "center",
// //       margin: "50px",
// //       padding: "50px",
// //       borderRadius: "10px",
// //       height: "auto",
// //       //   boxShadow: "0 3px 5px 2px grey",
// //       background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// //     },
// //     form: {
// //       display: "flex",
// //       flexDirection: "column",
// //       justifyContent: "center",
// //       alignSelf: "center",
// //       alignItems: "center",
// //       textAlign: "center",
// //       margin: "50px",
// //       padding: "50px",
// //       borderRadius: "10px",
// //       height: "auto",
// //       //   boxShadow: "0 3px 5px 2px grey",
// //       //   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// //     },
// //     input: {
// //       margin: "10px",
// //       padding: "10px",
// //       borderRadius: "10px",
// //       border: "1px solid black",
// //       background: "black",
// //       color: "white",
// //     },
// //     button: {
// //       margin: "20px !important",
// //       padding: "10px",
// //       borderRadius: "10px",
// //       //   boxShadow: "0 3px 5px 2px grey",
// //       background: "white !important",
// //     },
// //     titleBox: {
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //     },
// //     title: {
// //       display: "flex",
// //       justifyContent: "center",
// //       alignItems: "center",
// //       background: "black",
// //       border: 0,
// //       borderRadius: 10,
// //       boxShadow: "0 3px 5px 2px grey",
// //       color: "white",
// //       height: 80,
// //       padding: "10px",
// //       margin: "50px 10% 50px 10%",
// //       width: "80%",
// //     },
// //   })
// // );

// const Root = styled(Grid)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignSelf: "center",
//   alignItems: "center",
//   textAlign: "center",
//   padding: "50px",
//   //   borderRadius: "10px",
//   height: "110rem",
//   //   boxShadow: "0 3px 5px 2px grey",
//   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// }));

// const HeaderBox = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignSelf: "center",
//   alignItems: "center",
//   textAlign: "center",
//   margin: "50px",
//   padding: "50px",
//   borderRadius: "10px",
//   height: "auto",
//   //   boxShadow: "0 3px 5px 2px grey",
//   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// }));

// const Form = styled("form")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignSelf: "center",
//   alignItems: "center",
//   textAlign: "center",
//   margin: "50px",
//   padding: "50px",
//   borderRadius: "10px",
//   height: "auto",
//   //   boxShadow: "0 3px 5px 2px grey",
//   //   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
// }));

// const Input = styled("input")(({ theme }) => ({
//   margin: "10px",
//   padding: "10px",
//   borderRadius: "10px",
//   border: "1px solid black",
//   background: "black",
//   color: "white",
// }));

// const Button = styled("button")(({ theme }) => ({
//   margin: "20px !important",
//   padding: "10px",
//   borderRadius: "10px",
//   //   boxShadow: "0 3px 5px 2px grey",
//   background: "white !important",
// }));

// export const Registration = () => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
//   // const classes = useStyles();
//   const router = useRouter();

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     axios
//       .post(
//         "http://localhost:3001/registrations",
//         {
//           user: {
//             email: email,
//             password: password,
//             password_confirmation: passwordConfirmation,
//           },
//         },
//         { withCredentials: true }
//       )
//       .then((response: any) => {
//         if (response.data.status === "created") {
//           router.push("/login");
//         }
//       })
//       .catch((error: any) => {
//         // console.log("registration error", error);
//       });
//   };
//   const handleChange = (e: any) => {
//     setEmail(e.target.value);
//   };
//   const handleChangeaPassword = (e: any) => {
//     setPassword(e.target.value);
//   };
//   const handleChangeaPasswordConfirmation = (e: any) => {
//     setPasswordConfirmation(e.target.value);
//   };

//   return (
//     <Root>
//       <HeaderBox>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleChange}
//           />
//           <Input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={handleChangeaPassword}
//           />
//           <Input
//             type="password"
//             name="password_confirmation"
//             placeholder="Password Confirmation"
//             value={passwordConfirmation}
//             onChange={handleChangeaPasswordConfirmation}
//           />
//           <Button type="submit">Submit</Button>
//         </Form>
//       </HeaderBox>
//     </Root>
//   );
// };

// export default Registration;
import React from 'react'

export const index = () => {
  return (
    <div>index</div>
  )
}
export default index