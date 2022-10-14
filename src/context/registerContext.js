import React, { useState, createContext } from "react";

export const RegisterContext = createContext();


export const RegisterContextProvider = (props) => {

    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <RegisterContext.Provider value={[isRegistered, setIsRegistered]}>
            {props.children}
        </RegisterContext.Provider>
    );

}