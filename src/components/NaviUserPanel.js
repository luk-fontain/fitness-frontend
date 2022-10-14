import React from "react";
import "../style/navigation.css";
import { useContext } from 'react';
import { LogoutContext, LoginContext } from "../context/loginContext.js";

const NaviUserPanel = () => {


    const { login, id } = useContext(LoginContext);
    // const [isLogged, setIsLogged] = useContext(LoginContext);
    const [isLogged, setIsLogged] = login;
    const [userId, setUserId] = id;

    const { logout } = useContext(LogoutContext);
    const logoutHandler = logout;

    return (
        <>

            {isLogged ? (<ul className="nav">
                <li className="nav-item home">
                    <a className="nav-link active" href="/">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>

                <div className="rechts">
                    <li className="nav-item">
                        <span className="nav-link" href="/" onClick={(e) => { e.preventDefault(); logout() }}>
                            <i className="fa fa-sign-out" aria-hidden="true" ></i>
                        </span>
                    </li>
                </div>
            </ul>) : (<ul className="nav">
                <li className="nav-item home">
                    <a className="nav-link active" href="/">
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>
            </ul>)}
        </>
    );

}

export default NaviUserPanel;
