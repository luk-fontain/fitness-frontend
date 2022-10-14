import React from "react";
import "../style/userkurse.css";
import { useState } from "react";
import { Calendar1 } from "./Calendar1.js";
import { UserKurseTabellen } from "./UserKurseTabellen.js";
import UserKurseSlideShow from "./UserKurseSlideShow.js";
import { useContext, useEffect } from "react";
import { LoginContext } from "../context/loginContext.js";
import axios from "axios";

function UserKurse() {
  const { login, id } = useContext(LoginContext);
  const [isLogged] = login;
  const [userId, setUserId] = id;
  const baseUrl = `http://localhost:4000/courses/`;
  const [courses, setCourses] = useState([]);
  const [buttonClickedYoga, setButtonClickedYoga] = useState(false);

  const [buttonClickedZumba, setButtonClickedZumba] = useState(false);

  const [buttonClickedSelbstverteidigung, setButtonClickedSelbstverteidigung] =
    useState(false);

  const [clickedCourse, setClickedCourse] = useState([courses[0]])
  let showCourses;
  useEffect(() => {
    const showCourses = async () => {
      const _courses = await axios.get(baseUrl, { withCredentials: true });
      setCourses(_courses.data);
      console.log("courses", _courses.data);
    }
    showCourses();
  }, [])


  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const zeigCalendar = () => {
    setCalendar(true);
  };

  const onDateClick = (date) => {
    setDate(date);
    setCalendar(false);
  };


  const handleButtons = (name) => {

    if (name === "Yoga") {
      setButtonClickedYoga(true);
      setButtonClickedZumba(false);
      setButtonClickedSelbstverteidigung(false);

      setClickedCourse(courses[0])
    };
    if (name === "Zumba") {
      setButtonClickedZumba(true);
      setButtonClickedYoga(false);
      setButtonClickedSelbstverteidigung(false);
      setClickedCourse(courses[1])
    };

    if (name === "Selbstverteidigung") {
      setButtonClickedSelbstverteidigung(true);
      setButtonClickedZumba(false);
      setButtonClickedYoga(false);
      setClickedCourse(courses[2])
    };
  }

  return (
    <>
      <div className="userKurse">
        <div className="table_nav">
          <h2>Hallo SportlerIn. Das sind deine Kurse</h2>
          <div className="userKurseNav">
            <div className="userKurseNavRechts">
              <div onClick={() => zeigCalendar()}>
                <i
                  className="fa-regular fa-calendar-days "
                ></i>
              </div>

              <div onClick={() => new Date()}>
                <p>Heute</p>
              </div>

            </div>
          </div>
          {calendar && (
            <Calendar1 date={date} setDate={onDateClick} />
          )}
          {showCourses = courses.map((c, i) => {
            return (
              <div key={i} className="userKurseHeading">
                <button onClick={() => handleButtons(c.course_name)}>
                  <h6 key={i}>{c.course_name}</h6>
                </button>
              </div>
            )
          }

          )}
          {handleButtons && <UserKurseTabellen date={date} kurs={clickedCourse} />}
        </div>
        <div className="slide_text">
          <UserKurseSlideShow />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            lacus
            pulvinar, sagittis ligula a, pretium erat. Sed condimentum tincidunt quam, eget iaculis magna
            condimentum tincidunt. Nam euismod dolor id nunc dapibus, vel dapibus tellus facilisis.
            Curabitur ut
            eros molestie, scelerisque lectus in, fringilla nisi. Fusce vitae feugiat enim. Nam varius lorem
            ac
            tincidunt gravida. In id arcu lacinia, volutpat velit non, sodales lorem.
          </p>
        </div>
      </div>

    </>
  );
}
export default UserKurse;
