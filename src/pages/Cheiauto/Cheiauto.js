import React from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Cheiauto.css";

export default function Cheiauto() {
  return (
    <Layout>
      {/* -- CHEIAUTO SECTION START -- */}
      <section className="services" id="services">
        <div className="container-services">
          <div className="row-services">
            <div className="row-services-title">
              <span>SERVICII</span>
              <h6>...</h6>
            </div>

            <div className="services-box-icons">
              <div className="service-single">
                <div className="icon-box-outer">
                  <div className="icon-box-services">
                    <div className="iconsvg">
                      <img
                        src="./assets/CarKey12.png"
                        alt="Car Key"
                        width="100"
                        height="100"
                      />
                    </div>
                  </div>
                </div>
                <h3>Upgrade / Retrofit</h3>
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
                      <img
                        src="./assets/SmartKey2.png"
                        alt="Smart Key"
                        width="100"
                        height="100"
                      />
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
                      <img
                        src="./assets/UnlockCar3.png"
                        alt="Unlock Car"
                        width="100"
                        height="100"
                      />
                    </div>
                  </div>
                </div>
                <h3>Deblocări Auto</h3>
                <ul>
                  <li>Acces rapid și sigur în vehicul</li>
                  <li>Fără daune</li>
                  <li>Intervenție profesională</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="orizontalline2"></div>
        </div>
      </section>
      {/* -- CHEIAUTO SECTION END -- */}
    </Layout>
  );
}
