import React from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Prices.css";

export default function Preturi() {
  return (
    <Layout>
      <div>
        <section className="prices" id="prices">
          <div className="container-prices">
            <div className="row-prices">
              <div className="row-prices-box">
                <div className="row-prices-title">
                  <span> Preturi </span>
                  <h6>...</h6>
                </div>
              </div>
            </div>
            <div className="row-prices">
              <div className="row-prices-img">
                <div className="prices-img">
                  <img src="./assets/DeblocariAuto.jpeg" />
                </div>
              </div>
              <div className="row-prices-list">
                <img src="./assets/chair.png" />
                <div className="prices-list-details">
                  <div className="price-item">Tuns + Styling </div>
                  <div className="price-line"></div>
                  <div className="price-amount">80 RON</div>
                </div>
                <div className="prices-list-details">
                  <div className="price-item">Tuns Barba </div>
                  <div className="price-line"></div>
                  <div className="price-amount">30 RON</div>
                </div>
                <div className="prices-list-details">
                  <div className="price-item">
                    <b>Pachet Complet Tuns + Barba </b>{" "}
                  </div>
                  <div className="price-line">
                    <b></b>
                  </div>
                  <div className="price-amount">
                    <b>100 RON</b>
                  </div>
                </div>
                <div className="orizontalline4"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
