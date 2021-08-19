import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "logged in" : "anonymous"}
    </header>
  );
};
export default Header;
// state가 header에서 사용되고 screen에서 수정했다.
