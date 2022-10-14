import "../style/kontakt.css";

function Kontakt() {
  return (
    <>
      <div className="kontaktcontainer">
        <div className="kontaktdaten">
          <h2>So können Sie uns erreichen</h2>
          <div>
            <h5>Schreiben Sie uns eine eMail</h5>
            <p>info@grupo5.com</p>
          </div>
          <div>
            <h5>Rufen Sie uns an</h5>
            <p> Tel.: 030 / 123456</p>
          </div>
          <div>
            <h5>Lage</h5>
            <p>
              Grupo 5
              <br />
              Schaperstraße 19
              <br />
              10719 Berlin
              <br />
              Germany
            </p>
          </div>
          <div>
          <h5>Öffnungszeiten</h5>
            <p>Montag-Samstag 10:00–20:00 <br/>
            Sonntag Geschlossen</p>
          </div>
        </div>
        <div className="map">
          <iframe
            title="firmenstandort"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4858.005748008511!2d13.328219615815415!3d52.4971848348605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850f996d3972b%3A0xabaea6482f1005e2!2sSchaperstra%C3%9Fe%2019%2C%2010719%20Berlin!5e0!3m2!1sde!2sde!4v1656577548685!5m2!1sde!2sde"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Kontakt;
