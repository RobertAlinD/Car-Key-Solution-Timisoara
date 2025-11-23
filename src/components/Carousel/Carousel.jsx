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
    "./assets/Gal1.jpeg",
    "./assets/Gal23.jpeg",
    "./assets/Gal20.jpeg",
    "./assets/Gal3.jpeg",
    "./assets/Gal6.jpeg",
    "./assets/Gal4.jpeg",
    "./assets/Gal13.jpeg",
    "./assets/Gal2.jpeg",
    "./assets/Gal28.jpeg",
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
