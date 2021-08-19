import React from "react";
import Header from "./Header";
import { useFns } from "./context";

// Screen이 provider안에 있어서 logUserIn을 사용할 수 있는 것이다.
const Screen = () => {
  const { logUserIn } = useFns;
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};
export default Screen;
