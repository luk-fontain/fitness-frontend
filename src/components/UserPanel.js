import React from "react";
import { NavLink } from "react-router-dom";
import "../style/user-panel.css";

const UserPanel = () => {
    return (
        <>
            <div className="main">
                <ul className="list-panel">
                    <li> <i className="fa-solid fa-user user-icon icons"></i>
                        <NavLink to="/userInfo">User</NavLink>
                    </li>
                    <li> <i className="fa-solid fa-calculator icons"></i>
                        <NavLink to="/bmirechner" className="calc-icon">BMI</NavLink>
                    </li>
                    <li> <i className="fa-solid fa-calculator icons"></i>
                        <NavLink to="/kalorienrechner" className="calc-icon">Kal-rechner</NavLink>
                    </li>
                    <li> <i className="fa-solid fa-person-running icons"></i>
                        <NavLink to="/userkurse">Kurse</NavLink>
                    </li>
                    <li> <i className="fa-solid fa-dumbbell icons"></i>
                        <NavLink to="/usersportgeraete">Geräte</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default UserPanel;