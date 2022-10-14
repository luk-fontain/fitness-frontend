import React, { useState } from "react";
import Bmi_diagramm from "./Bmi_diagramm";

import "../style/bmi.css"
const Bmi = () => {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [recomendations, setRecomendations] = useState()
    const [bmiColor, setbmiColor] = useState()

    const handleBmi = () => {        
        let val = (
            [weight / height /  height] * 10000
        ).toFixed(1);
        if (val> 10 && val < 40){
        setBmi(val);
        if (val < 18.5) {
            setRecomendations(
                <div className="recomendations">

                    <p>Dein Körpergewicht in Kilogramm fällt in Relation zu deiner Größe als untergewichtig aus? Untergewicht kann neben zu geringer Nährstoffaufnahme noch weitere Ursachen haben. Kurzfristig kannst du auf eine ausreichende, gesunde Ernährung achten. Langfristig empfehlen wir, die Ärztin bzw. den Arzt deines Vertrauens aufzusuchen.</p>
                    <p>Sie können sich bei unsere  <a href="/kontakt"> Dietologe</a> melden um eine Beratung zu bekommen. Richtige Ernährung uns Sport können gut auf die Situation beinflussen</p>
                </div>)
            setbmiColor("#28b1de")
            setInfo("Untergewicht");
        } else if (val > 18.5 && val <= 24.9) {
            setRecomendations(
                <div className="recomendations">

                    <p>Gratulation, du hast einiges richtig gemacht – der BMI Rechner zeigt dir ein super Ergebnis ! Achte darauf, dein Gewicht durch eine ausgewogene Ernährung und Bewegung in diesem Bereich zu halten.</p>
                    <p>Hier kannst du für sich interessante  <a href="/kurse">Kurse</a> auswählen. Wir werden uns auf persönliches Treffen freuen!</p>
                </div>)
            setbmiColor("#25aa1e")
            setInfo("Normalgewicht");
        } else if (val > 24.9 && val < 30) {
            setRecomendations(
                <div className="recomendations">

                    <p>Grundsätzlich gilt: Übergewicht laut BMI Rechner ist nicht gleich Übergewicht und noch lange nicht gleichbedeutend mit ungesund. Auch sehr trainierte Menschen mit einem hohen Muskelanteil haben häufig einen hohen Body Mass Index, daher ist eine Körperfettanalyse in solchen Fällen aussagekräftiger. </p>
                    <p>Melde dich bei unsere <a href="/kontakt"> Fitnesstrainer</a>, um eine Beratung zu bekommen, oder schau dir unsere <a href="/kurse">Kurse</a> an. Wir werden uns auf persönliches Treffen freuen!</p>
                </div>)
            setbmiColor("#dc9835")
            setInfo("Übergewicht");
        } else {
            setRecomendations(
                <div className="recomendations">

                    <p>Sollte dein Wert als adipös Adipositas eingestuft werden, raten wir dir, mit deiner Ärztin bzw. deinem Arzt oder einer Beraterin bzw. einem Berater im Ernährungsbereich zu sprechen. So kann die Art deines Übergewichtes (Fettleibigkeit, Präadipositas, Adipositas Grad i, Adipositas Grad ii oder Adipositas Grad iii) richtig analysiert werden. Ab einem weit erhöhten BMI ist es sehr wichtig für deine Gesundheit, dein Gewicht zu regeln – der Rechner kann dabei der erste Schritt für eine gesunde Zukunft sein.</p>
                    <p>Wir bieten auch die <a href="/kurse"> Kurse</a> für Anfänger an, damit du langsam und gesund ein neues und gesundes Leben mit G5 Team anfangen könntest. Unser Team wird dich von Anfang an unterstützen und motivieren.</p>
                </div>)
            setbmiColor("#e54915")
            setInfo("Adipositas");
        }
    }else{
        setInfo("falsche Eingabe")
    }
    };
    return (
        <div className="container">
            <h1 className="bmi_h1">BMI Calculator</h1>

            <div className="input_container">
                
                <input className="input_bmi"                    
                    
                    type="number" min="1" max="250" step={1}             
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Größe in cm"
                                    />
                <input className="input_bmi"
                    required
                    type="number"min="1" max="300" step = {1}                     
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Gewicht in kg"
                    
                />
            </div>
            <div className="bmi_button_container">
                <button className="bmi_button" onClick={handleBmi}>Berechnen</button>
            </div>
            <div>
                <Bmi_diagramm />
            </div>
            <div className="ergebnisse_container" style={{ color: bmiColor }}>

                <h1 className="ergebnisse">{bmi}</h1>
            </div>
            <h2 className="ergebnisse_info">{info}</h2>
            <p> {recomendations}</p>

        </div>
    );
};

export default Bmi;

