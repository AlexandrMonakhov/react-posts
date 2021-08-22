import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import Button from "../button";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth", "true");
  };

  return (
    <div className="navbar">
      {isAuth && <Button onClick={logout}>Sign Out</Button>}
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
