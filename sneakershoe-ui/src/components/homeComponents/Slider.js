import { useState, useEffect } from "react";
import { sliderData } from "../../data/SliderData";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Header from "../Header";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 30000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p><strong>Welcome To Our Shop!!!</strong></p>
              <p><strong>Liên hệ với chúng tôi ngay</strong></p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider banner */}
      <div className="slider">
        <Header />
        <BsArrowLeftCircle className="arrow prev" onClick={prevSlide} />
        <BsArrowRightCircle className="arrow next" onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img
                    style={{ objectFit: "contain" }}
                    src={slide.image}
                    alt="slide"
                    className="image"
                  />
                  <div className="content">
                    <h2><strong>{slide.heading}</strong></h2>
                    <p>{slide.desc}</p>
                    <hr />
                    <button style={{height:"50px"}} className="search-button">BẮT ĐẦU THÔI</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
