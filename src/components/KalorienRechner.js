import React, { useState } from "react";
import "../style/kalorienrechner.css"


const KalorienRechner = () => {
    const [kalorienZahl, setkalorienZahl] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [info, setInfo] = useState()
    const [info2, setInfo2] = useState()

    const handleChange = (e) => {
        setGender(e.target.value)
    }

    const handleKalorienZahl = () => {
       if(weight > 2 && height > 40 && age > 1){       
        let mannerFormel = (66.47 + (13.7 * Number(weight)) + (5 * Number(height)) - (6.8 * Number(age))).toFixed(0)
        let frauenFormel = (655.1 + (9.6 * Number(weight)) + (1.8 * Number(height)) - (4.7 * Number(age))).toFixed(0)
        let val;
        if (gender === "Male") {
            val = mannerFormel
        } else {
            val = frauenFormel
        }
       setkalorienZahl(val);
    //    setInfo("Deine tägliche Kalorienbedarf ist ")
    //    setInfo2("Kalorien pro Tag")
        setInfo("Dein Tagesbedarf beträgt : ")
        setInfo2("Kcal")

       }else{
        setInfo("Eingabe falsch")
       }
        
    };
    return (
        <div className="container">
            <h1 className="bmi_h1">Kalorienrechner</h1>

            <div className="input_container1">
                <input className="input_bmi"
                    type="number" step={1}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Größe in cm"
                />
                <input className="input_bmi"
                    type="number" step={1}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Alter"
                />
            </div>

            {/* hier sind radio bottons die als icons aussehen . wir haben zeile 8 useState gender gemacht und in zeile 10 ziehen wir der user auswahl(male/female) um das weiter füe formel zu benutzen */}
            <div className="input_container2" >
                <label>
                    <input className="input_radio" type="radio" value="Male" onChange={handleChange} name="gender" />
                    <i class="fa-solid fa-person "></i>
                </label>
                <label>
                    <input className="input_radio" type="radio" value="Female" onChange={handleChange} name="gender" />
                    <i class="fa-solid fa-person-dress"></i>
                </label>
            

                <input className="input_bmi  weight"
                type="number" step={0.01}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Gewicht in kg"
                />
            </div>
            {/* hier ist button */}
            <div className="bmi_button_container">
                <button className="bmi_button" onClick={handleKalorienZahl}>Berechnen</button>
            </div>
            {/* hier unsere arrow */}
            <div className="animation">
            </div>
            <div>
            <ul className="kalorienZiffern">
                    <li>1000</li>
                    <li>1500</li>
                    <li>2000</li>
                    <li>2500</li>
                </ul>
            </div>
            <div className="ergebnisse_container" >

                <h1 className="ergebnisseK">{info}{kalorienZahl} {info2}</h1>

            </div>
            <div className="info_container">
                <h2 className="h2kalorien">Welche Rolle spielt der Kalorienverbrauch beim Abnehmen?</h2>
                <p> Eine große, denn der Grundumsatz macht 50 bis 70 Prozent des gesamten Energiebedarfs aus.

                    Wichtig dabei: Menschen mit einem hohen Muskelanteil haben einen höheren Grundumsatz, da Muskeln stoffwechselaktiv sind, sodass du im Ruhezustand (Sitzen oder Liegen) mehr Energie verbrauchst, je mehr Muskelmasse du hast.

                    Wer abnehmen möchte, sollte also versuchen, seinen Muskelanteil nach oben zu schrauben – zum Beispiel durch gezieltes Krafttraining.

                    Der Grundumsatz ist von den vier Faktoren Gewicht, Größe, Alter und Geschlecht abhängig und gilt als Energiemenge in 24 Stunden, auch als „Ruhe-Nüchtern-Umsatz“ bezeichnet.

                    Allerdings darf der Grundumsatz nicht mit deinem täglichen Kalorienbedarf verwechselt werden – das sind zwei Paar Schuhe.</p>
                    <p><a href="https://www.fitforfun.de/abnehmen/diaeten/grundumsatz-wie-funktioniert-abnehmen_aid_10400.html">Mehr lesen</a></p>
            </div>
        
        </div>
    );
};

export default KalorienRechner;
