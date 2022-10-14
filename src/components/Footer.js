import "../style/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">

        <div className="links">
          <div className="footer_icons">
          <a className="icons" href="https://de-de.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-square"></i></a>
          <a className="icons" href="https://www.instagram.com/?hl=de" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram-square"></i></a>
          <a className="icons" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube-square"></i></a>
          </div>
          <div className="footer_textlinks">
          <a className="textlinks" href="/kontakt">Kontakt</a>
          <a className="textlinks" href="/impressum">Impressum</a>
          </div>
        </div>

        <p>Copyright G5 © 2022 Magdeburg</p>

      </div>

    </>
  );
}

export default Footer;
