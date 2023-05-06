import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response: any) => {
        if (response.data.status === "created") {
          router.push("/dashboard");
        }
      })
      .catch((error: any) => {
        // console.log("login error", error);
      });
  };
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleChangeaPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const Root = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "50px",
    borderRadius: "10px",
    height: "110rem",
    boxShadow: "0 3px 5px 2px grey",
    background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
  }));

  const HeaderBox = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "50px",
    padding: "50px",
    borderRadius: "10px",
    height: "auto",
    //   boxShadow: "0 3px 5px 2px grey",
    background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
  }));

  const Form = styled("form")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "50px",
    padding: "50px",
    borderRadius: "10px",
    height: "auto",
    //   boxShadow: "0 3px 5px 2px grey",
    //   background: "linear-gradient(45deg, rgb(0,0,0) 30%, #FF8E53 90%)",
  }));

  const Input = styled("input")(() => ({
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid black",
    background: "black",
    color: "white",
  }));

  const Button = styled("button")(() => ({
    margin: "20px !important",
    padding: "10px",
    borderRadius: "10px",
    //   boxShadow: "0 3px 5px 2px grey",
    background: "white !important",
  }));

  return (
    <Root>
      <HeaderBox>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangeaPassword}
          />
          <Button type="submit" >
            Log In
          </Button>
          <Link href="/registration" >
            Sign Up
          </Link>
        </Form>
      </HeaderBox>
    </Root>
  );
};

export default Login;
