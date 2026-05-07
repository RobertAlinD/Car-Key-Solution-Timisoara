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
    "./assets/cheie-smart-bmw-seria-3-f30-display.jpeg",
    "./assets/upgrade-smart-key-peugeot.jpeg",
    "./assets/conversie-cheie-digitala-mercedes.jpeg",
    "./assets/upgrade-smart-key-audi-keyless.jpeg",
    "./assets/cheie-smart-lcd-vw-passat.jpeg",
    "./assets/smart-key-bmw-g30-retrofit.jpeg",
    "./assets/smart-key-bmw-X5-retrofit.jpg",
    "./assets/upgrade-cheie-smart-audi-keyless-entry.jpeg",
    "./assets/cheie-smart-bmw-display.jpeg",


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
