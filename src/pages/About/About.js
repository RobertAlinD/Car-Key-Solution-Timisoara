import React from "react";
import { Layout } from "../../components/Layout/Layout";
import "./About.css";

export default function About() {
  return (
    <Layout>
      <section className="aboutus" id="about">
        <div className="container-about">
          <div className="row-about">
            <div className="row-about-box">
              <div className="row-about-title">
                <h3>Chei Auto</h3>
                <ul>
                  <li>Programare, copiere și reparații</li>
                  <li>Chei auto cu cip și telecomandă</li>
                  <li>Compatibile cu majoritatea mărcilor</li>
                </ul>
              </div>

              <div className="service-single">
                <div className="icon-box-outer">
                  <div className="icon-box-services">
                    <div className="iconsvg">
                      <img src="./assets/SmartKey2.png" alt="Smart Key" width="100" height="100" />
                    </div>
                  </div>
                </div>
                <h3>Smart Key LCD</h3>
                <ul>
                  <li>Chei inteligente cu ecran LCD</li>
                  <li>Funcție Keyless Go</li>
                  <li>Design modern pentru confort și siguranță</li>
                </ul>
              </div>

              <div className="service-single">
                <div className="icon-box-outer">
                  <div className="icon-box-services">
                    <div className="iconsvg">
                      <img src="./assets/UnlockCar3.png" alt="Unlock Car" width="100" height="100" />
                    </div>
                  </div>
                </div>
                <h3>Deblocare Uși</h3>
                <ul>
                  <li>Intervenții rapide pentru uși blocate</li>
                  <li>Fără deteriorări</li>
                  <li>Disponibilitate 24/7</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
