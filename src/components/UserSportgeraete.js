import React from "react";
import "../style/userkurse.css";
import { useState } from "react";
import { Calendar1 } from "./Calendar1.js";
import { UserKurseTabellen } from "./UserKurseTabellen.js";
import UserKurseSlideShow from "./UserKurseSlideShow";

function UserSportgeraete() {
    const [date, setDate] = useState(new Date());
    const [calendar, setCalendar] = useState(false);
    const zeigCalendar = () => {
        setCalendar(true);
    };


    const onDateClick = (date) => {
        setDate(date);
        setCalendar(false);
    };

    const [buttonClickedIndoorbike, setButtonClickedIndoorbike] = useState(false);
    const onButtonClickIndoorbike = () => {
        setButtonClickedIndoorbike(true);
        setButtonClickedHanteln(false);
        setButtonClickedMedizinball(false);
    };
    const [buttonClickedHanteln, setButtonClickedHanteln] = useState(false);
    const onButtonClickHanteln = () => {
        setButtonClickedHanteln(true);
        setButtonClickedIndoorbike(false);
        setButtonClickedMedizinball(false);
    };
    const [buttonClickedMedizinball, setButtonClickedMedizinball] =
        useState(false);
    const onButtonClickMedizinball = () => {
        setButtonClickedMedizinball(true);
        setButtonClickedHanteln(false);
        setButtonClickedIndoorbike(false);
    };

    return (
        <>
            <div className="userKurse">
                <div className="table_nav">
                    <h2>Hallo SportlerIn. Das sind deine Sportgeräte</h2>
                    <div className="userKurseNav">
                        <div className="userKurseNavRechts">
                            <div onClick={() => zeigCalendar()}>
                                <i
                                    className="fa-regular fa-calendar-days "
                                ></i>
                            </div>

                            <div onClick={() => new Date()()}>
                                <p>Heute</p>
                            </div>

                        </div>
                    </div>
                    {calendar && (
                        <Calendar1 date={date} setDate={onDateClick} />
                    )}
                    <div className="userKurseHeading">
                        <button onClick={() => onButtonClickIndoorbike()}>
                            <h6>Indoor Bike</h6>
                        </button>
                        <button onClick={() => onButtonClickHanteln()}>
                            <h6>Hanteln</h6>
                        </button>
                        <button onClick={() => onButtonClickMedizinball()}>
                            <h6>Medizinball</h6>
                        </button>
                    </div>
                    {buttonClickedIndoorbike && <UserKurseTabellen date={date} kurs={"Indoor Bike"} />}
                    {buttonClickedHanteln && <UserKurseTabellen date={date} kurs={"Hanteln"} />}
                    {buttonClickedMedizinball && (<UserKurseTabellen date={date} kurs={"Medizinball"} />)}
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
export default UserSportgeraete;
