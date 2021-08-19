import React from "react";
import Screen from "./Screen";
import UserContextProvider from "./context";

function App() {
  return (
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
    // 그래서 이 Screen은 Provider로부터 어떤 data던지 가져올 수 있다.
  );
}

export default App;
