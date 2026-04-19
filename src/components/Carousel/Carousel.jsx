import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "./assets/GAL1.jpeg",
    "./assets/GAL2.jpeg",
    "./assets/GAL3.jpeg",
    "./assets/GAL12.jpeg",
    "./assets/GAL13.jpeg",
    "./assets/GAL15.jpeg",
    "./assets/GAL9.jpeg",
    "./assets/GAL10.jpeg",
    "./assets/Smart2.jpeg",


  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Poza ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
