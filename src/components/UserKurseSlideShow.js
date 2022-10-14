import "../style/userkurse_slide_show.css";

function UserKurseSlideShow() {
  return (
    <>
      <div className="about_slideshow">
        <img
          className="about_img"
          src={require("../img/slideshow/slideshow1.jpg")}
          alt=""
        ></img>
        <img
          className="about_img about_img--slideshow about_img--slideshow1"
          src={require("../img/slideshow/slideshow2.jpg")}
          alt=""
        ></img>
        <img
          className="about_img about_img--slideshow about_img--slideshow2"
          src={require("../img/slideshow/slideshow3.jpeg")}
          alt=""
        ></img>
        <img
          className="about_img about_img--slideshow about_img--slideshow3"
          src={require("../img/slideshow/slideshow4.jpeg")}
          alt=""
        ></img>
      </div>
    </>
  );
}
export default UserKurseSlideShow;