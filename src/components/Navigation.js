import React, { useContext, useState } from "react";
import "../style/navigation.css";
import Sidebar from "./Sidebar.js";
import { RegisterContext } from "../context/registerContext.js";
import { LoginContext, LogoutContext } from "../context/loginContext.js";

function Navigation() {
  
  const [isRegistered, setIsRegistered] = useContext(RegisterContext);
  // const [isLogged, setIsLogged] = useContext(LoginContext);
  const { login, id } = useContext(LoginContext);
  const { auth, logout } = useContext(LogoutContext);
  const [isAuth, setIsAuth] = auth;
  // const [token, setToken] = tokenValue;
  const [isLogged, setIsLogged] = login;
  const [userId, setUserId] = id;
  const logoutHandler = logout;


  const handleRegister = () => {
    setIsRegistered(true);
  }
  const handleLogin = () => {
    setIsLogged(true);
  }
  
  const setLoginRegisterButton = () => {
    const navClass = "nav-link"
    const navContainer = "nav-container";
    if (isRegistered) {
      return (      
        <a className={navClass} href="/login" onClick={handleLogin}>
        Einloggen
      </a>
      )
    }
    if (isLogged) {
      return (
        <div className={navContainer}>
          <a className={navClass} href="/kurse">Kurse</a>
      <a className={navClass} href="/logout" onClick={(e) => { e.preventDefault(); logout() }}>
        Ausloggen
      </a>

          </div>
   ) }
    return (
      <div className={navContainer}>
        <a className={navClass} href="/kurse">Kurse</a>
        <a className={navClass} href="/login">
          Einloggen
        </a>
        <a className={navClass} href="/register" onClick={handleRegister}>
          Registrieren
        </a>
      </div>
    )
  }
  return (
    <>
      <div className="nav">
        <div className="home">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>
        <div className="rechts">
          <div>
            {
              setLoginRegisterButton()
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
