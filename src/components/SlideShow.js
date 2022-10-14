import "../style/slide-show.css";

function SlideShow() {
  return (
    <>
      <div className="about__slideshow">
        <img
          className="about__img"
          src={require("../img/slideshow/slideshow1.jpg")}
          alt=""
        ></img>
        <img
          className="about__img about__img--slideshow about__img--slideshow1"
          src={require("../img/slideshow/slideshow2.jpg")}
          alt=""
        ></img>
        <img
          className="about__img about__img--slideshow about__img--slideshow2"
          src={require("../img/slideshow/slideshow3.jpeg")}
          alt=""
        ></img>
        <img
          className="about__img about__img--slideshow about__img--slideshow3"
          src={require("../img/slideshow/slideshow4.jpeg")}
          alt=""
        ></img>
      </div>
    </>
  );
}
export default SlideShow;
