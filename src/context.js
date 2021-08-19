import React, { useState, useContext } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nico",
    loggedIn: false,
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  return (
    // 어떤 context로 부터 값을 가져오고 싶은지 알려줘야한다.
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
    // provider란 context를 가져올 수 있게 하기 위한 부모와 같은 역할이다.
    // provider에 value를 할당했다. user는 위의 user객체이고 logUseIn은 함수
    // 이 provider를 모든 children에 대한 부모로 만들고 싶었기 때문이다.
    // App.js으로 가보자
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
