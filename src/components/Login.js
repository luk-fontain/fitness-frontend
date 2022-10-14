import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/login.css";
import { LoginContext } from '../context/loginContext.js';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const Login = () => {

    const { login, id } = useContext(LoginContext);
    const [isLogged, setIsLogged] = login;
    const [userId, setUserId] = id;

    // const [isLogged, setIsLogged] = useContext(LoginContext);
    const [isSubmit, setIsSubmit] = useState(false);
    const [input, setInput] = useState({ email: "", password: "" });
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(input));
        setIsLogged(!isLogged);
        setIsSubmit(!isSubmit);

        try {
            await axios.post("http://localhost:4000/login", input, { withCredentials: true });
            navigate('/');
        }
        catch (error) {
            console.error(error.response?.data?.error || error);
            setErrorMsg(error.response?.data?.error || JSON.stringify(error))
        }
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(input);
        }
    }, [formErrors, input, isSubmit]);


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email ist benötigt!";
        } else if (!regex.test(values.email)) {
            errors.email = "Email hat ungültiges Format!";
        }

        if (!values.password) {
            errors.password = "Passwort ist benötigt!";
        }

        return errors;
    }


    return (

        <div className='loginContainer'>
            <h1> Einloggen</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <i className="fa-regular fa-envelope icon"></i>
                    < Form.Control name="email" type="email" value={input.email} placeholder="Email:" onChange={(e) => inputHandler(e)} className="inputText" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <p className="p-alert">{formErrors.email}</p>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <i className="fa-solid fa-lock icon"></i>
                    <Form.Control type="password" placeholder="Password:" name="password" value={input.password} onChange={(e) => inputHandler(e)} className="inputText" />
                </Form.Group>

                <p className="p-alert">{formErrors.password}</p>


                <p className="p-alert">{errorMsg}</p>


                <div className="d-flex justify-content-center">
                    <Button type="submit" className="d-flex justify-content-center align-items-center" variant="primary" >
                        Login
                    </Button>
                </div>
            </Form>

        </div>

    )

}