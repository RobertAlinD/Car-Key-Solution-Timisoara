import React from "react";
import "./googlemap.css";


export default function SimpleMap() {
  return (
    <div>
      <div className="map-container">
        <h1>Adresa noastră</h1>
        <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44502.87364204254!2d21.243607549999997!3d45.802654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745664728693b89%3A0x3d580605447bcee9!2zQ29tdW5hIER1bWJyxIN2acibYQ!5e0!3m2!1sro!2sro!4v1763830031643!5m2!1sro!2sro"   
 height="400"
  width="400"
  className="map-frame"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    </div>
  );
}
