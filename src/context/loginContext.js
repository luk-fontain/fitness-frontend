import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (Cookies.get("isLogged")) setIsLogged(true);
    if (Cookies.get("userId")) {
      const cookieId = Cookies.get("userId");
      setUserId(cookieId.slice(3, cookieId.length - 1));
    }
  }, [isLogged]);

  // useEffect(() => {
  //     console.log("userId im logincontext nach slice ", userId)
  // }, [userId])

  return (
    <LoginContext.Provider
      value={{
        login: [isLogged, setIsLogged],
        id: [userId, setUserId],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};



export const LogoutContext = createContext();

export const LogoutContextProvider = (props) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  // später token weg machen
  // const [token, setToken] = useState(false);
  const { login } = useContext(LoginContext);
  const [isLogged, setIsLogged] = login;

  const logoutHandler = async () => {
    const response = await axios.post(
      "http://localhost:4000/logout",
      {},
      { withCredentials: true }
    );
    console.log("responseInLoginContext", response);
    setIsLogged(false);

    Cookies.remove("email");
    navigate("/");
  };

  return (
    <LogoutContext.Provider
      value={{
        auth: [isAuth, setIsAuth],
        // tokenValue: [token, setToken],
        logout: logoutHandler,
      }}
    >
      {props.children}
    </LogoutContext.Provider>
  );
};
