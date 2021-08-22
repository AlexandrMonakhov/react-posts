import React, { useContext } from "react";
import { Button, Input } from "../components";
import { AuthContext } from "../context";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div
      style={{
        height: "calc(100vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Login Page</h1>
      <form action="#" onSubmit={login}>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default Login;
