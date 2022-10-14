import "../style/kurse.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Kurse() {
  return (
    <div className="kurse">
      <h1 >Kurse</h1>
      <div className="kurse_container">
        <div>
          <Carousel interval={null}>

            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2 "
                src={require("../img/carousel/yoga/yoga1.jpg")}
                alt="First slide"
              />
              <Carousel.Caption className="h3container">
                <a href="/kurse"><h3>Yoga</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2 "
                src={require("../img/carousel/yoga/yoga2.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Yoga</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/yoga/yoga3.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Yoga</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/sv/sv1.jpg")}
                alt="First slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Selbstverteidigung</h3></a>
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/sv/sv2.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Selbstverteidigung</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/sv/sv3.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Selbstverteidigung</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/zumba/zumba1.jpeg")}
                alt="First slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Zumba</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/zumba/zumba2.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Zumba</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-70 h-70 mb-2"
                src={require("../img/carousel/zumba/zumba3.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption className="h3container">
              <a href="/kurse"><h3>Zumba</h3></a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Kurse;
