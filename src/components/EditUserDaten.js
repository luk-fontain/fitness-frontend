import "../style/editUser.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";
// import { useState, useEffect, useContext } from "react";
// import { LoginContext } from "../context/loginContext.js";
// import axios from "axios";

function EditUserDaten(){
    const inputRef = useRef();
    return(
<>
<div className="container_White">
<h2>Daten bearbeiten</h2>
<Form action="http://localhost:4001/register" method="POST">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <i className="fa-solid fa-user icon"> </i>
    <Form.Control type="text" placeholder="Vorname:" action="http://localhost:4001/register" method="POST" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <i className="fa-solid fa-user icon"></i>

    <Form.Control type="text" placeholder="Nachname:" name="lastName" ref={inputRef} />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <i className="fa-solid fa-person icon"></i>

    <Form.Control type="number" placeholder="Alter:" name="age" ref={inputRef} />

    <Form.Group className="mb-3" controlId="formBasicEmail">

      <i className="fa-regular fa-envelope icon"></i>

      <Form.Control type="email" placeholder="Email:" name="email" ref={inputRef} />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">

      <i className="fa-solid fa-lock icon"></i>
      <Form.Control type="password" placeholder="Passwort:" name="password" ref={inputRef} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <i className="fa-solid fa-triangle-exclamation icon"> </i>
      <Form.Control type="password" placeholder="Passwort bestätigen:" name="repassword" ref={inputRef} />
    </Form.Group>


  </Form.Group>
  <h3 className="adresseH3"> Adresse:</h3>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <i className="fa-solid fa-road icon"></i>
    <Form.Control type="text" placeholder="Straße:" name="address.street" ref={inputRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">

    <i className="fa-solid fa-house-chimney-user icon"></i>
    <Form.Control type="text" placeholder="Hausnummer:" name="address.number" ref={inputRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <i className="fa-solid fa-city icon"></i>

    <Form.Control type="text" placeholder="Stadt:" name="address.city" ref={inputRef} />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">

    <i className="fa-solid fa-list-ol icon"></i>
    <Form.Control type="number" placeholder="PLZ:" name="address.zip" ref={inputRef} />
  </Form.Group>


  <Button variant="primary" type="submit">
    Bestätigen

  </Button>
</Form>
</div>


</>
    )
}
export default EditUserDaten