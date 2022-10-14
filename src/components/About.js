import "../style/about.css";

function About() {
  return (

    <div className="about_container">
   
      <div>
      <img
        className="studio"
        src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""
      ></img>
      </div>
      
      <div>
        <h1 className="about_h1">Fitnessstudio G5</h1>
        <p className="about_p">
          Gib alles für Fitness und Gesundheit. Aber nicht irgendwo. Sondern da,
          wo es wirklich Spaß macht, weil es richtig abgeht. Bei Elbefitness
          findest du alles, was das Trainingsherz begehrt. Über 120
          Gerätestationen. Ein Team, das immer ein Lächeln für dich übrig hat. Und
          viele Gleichgesinnte, die die Motivation oben halten. Wir machen eben
          Magdeburg fit – und gerne auch dich!
        </p>
      </div>
    </div>
  );
}


export default About;
