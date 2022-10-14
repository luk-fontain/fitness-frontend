import React from "react";
import { BookingBtn } from "./UserKurseTabellenButton.js";
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/loginContext.js";
import axios from "axios";


export function UserKurseTabellen(props) {

  return (
    <>
      <table>
        <tbody>
          <thead>Kurse</thead>
          <tr>
            <th>{props.date.toDateString()}</th>
            <th className="kursname">{props.kurs.course_name}</th>
          </tr>
          <tr>
            <td>9 Uhr</td>
            <td className="td-button"><BookingBtn /></td>
          </tr>
          <tr>
            <td>11 Uhr</td>
            <td className="td-button"><BookingBtn /></td>
          </tr>
          <tr>
            <td>17 Uhr</td>
            <td className="td-button"><BookingBtn /></td>
          </tr>
          <tr>
            <td>19 Uhr</td>
            <td className="td-button"><BookingBtn /></td>
          </tr>
          <tfoot>

          </tfoot>
        </tbody>
      </table>
    </>
  );
}
