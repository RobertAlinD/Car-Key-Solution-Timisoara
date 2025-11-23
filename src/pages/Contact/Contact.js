import React from "react";
import { Layout } from "../../components/Layout/Layout";
import SimpleMap from "../../components/Googlemap/googlemap";
import "./Contact.css";


export default function Footer() {
  return (
    <Layout>
      <footer className="contact" id="contact">
        <div className="container-contact">
          <div className="row-contact-title">
            <span> Contact </span>
            <h6>...</h6>
          </div>
          <div className="contact-info-title">
            <h1>Date de contact</h1>
          </div>
          <div className="largebox-contact">
            <div className="box-contact-phone">
              <div className="box-contact-icon">
                <a href="tel:0310050062" className="social icon" a="true">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 578.11 577.73"
                  >
                    <path
                      d="M577.83,456.13q1.84,14.08-8.57,24.48l-81.4,80.78a45.81,45.81,0,0,1-14.38,10.4A59.43,59.43,0,0,1,456,577.3q-0.61,0-3.68.31t-8,.31q-11.63,0-37.64-4t-63.64-19.58q-37.64-15.61-85.38-46.82T156.16,421.86q-42.84-42.23-71-80.78t-45.29-71.3Q22.75,237,14.18,210.41T2.55,164.51Q-0.51,145.23.1,134.22T0.71,122a59.49,59.49,0,0,1,5.51-17.44,45.86,45.86,0,0,1,10.4-14.38L98,8.76q8.57-8.57,19.58-8.57a22.83,22.83,0,0,1,14.08,4.59,42.55,42.55,0,0,1,10.4,11.32l65.48,124.24a29.78,29.78,0,0,1,3.06,21.42,38.15,38.15,0,0,1-10.4,19.58l-30,30a10.21,10.21,0,0,0-2.14,4,15.1,15.1,0,0,0-.92,4.59q2.45,12.85,11,29.38,7.34,14.69,22.64,35.8t43.45,48.65q27.54,28.15,49,43.76t35.8,22.95q14.38,7.34,22,8.87l7.65,1.53a14.59,14.59,0,0,0,4-.92,10.22,10.22,0,0,0,4-2.14l34.88-35.5a37.49,37.49,0,0,1,25.7-9.79q10.41,0,16.52,3.67h0.61l118.12,69.77Q575.38,443.89,577.83,456.13Z"
                      transform="translate(0 -0.19)"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="box-contact-info">
                <a href="tel:0310050062" a="true">
                  0763 098 807
                </a>
              </div>
            </div>
            <div className="box-contact-email">
              <div className="box-contact-icon">
                <a
                  href="mailto:office@barber.ro"
                  className="social icon"
                  a="true"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.86 19.5"
                  >
                    <path
                      d="M2.2,5.33l10,7.95a2.55,2.55,0,0,0,1.69.49,2.55,2.55,0,0,0,1.69-.49l10-7.95c0.8-.63.62-1.15-0.4-1.15H2.6C1.58,4.18,1.4,4.7,2.2,5.33Z"
                      transform="translate(0 -4.18)"
                    ></path>
                    <path
                      d="M26.38,7.43l-11,8.33a2.66,2.66,0,0,1-3,0l-11-8.33C0.67,6.81,0,7.14,0,8.16V21.82a1.86,1.86,0,0,0,1.86,1.86H26a1.86,1.86,0,0,0,1.86-1.86V8.16C27.86,7.14,27.19,6.81,26.38,7.43Z"
                      transform="translate(0 -4.18)"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="box-contact-info">
                <a href="mailto:office@barber.ro" a="true">
                  radeviciandrija@yahoo.com
                </a>
              </div>
            </div>
            <div className="box-contact-location">
              <div className="box-contact-icon">
                <a href="0763 098 807" className="social icon" a="true">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 296.3 430.11"
                  >
                    <path
                      d="M356.21,107.05c-1.53-5.74-4.64-11.85-6.94-17.21C321.75,23.7,261.61,0,213.05,0,148.05,0,76.46,43.59,66.9,133.43v18.35c0,0.77.26,7.65,0.64,11.09,5.36,42.82,39.14,88.32,64.38,131.14,27.15,45.87,55.31,91,83.22,136.11,17.21-29.44,34.35-59.26,51.17-87.93,4.58-8.42,9.9-16.83,14.49-24.86,3.06-5.35,8.9-10.7,11.57-15.67,27.14-49.7,70.84-99.78,70.84-149.1V132.29C363.21,126.94,356.58,108.2,356.21,107.05Zm-142,92.14c-19.11,0-40-9.55-50.34-35.94-1.54-4.2-1.41-12.62-1.41-13.39V138c0-33.64,28.56-48.93,53.41-48.93,30.59,0,54.24,24.47,54.24,55.06S244.83,199.19,214.24,199.19Z"
                      transform="translate(-66.9 0)"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="box-contact-info">
                <a
                  href="https://maps.app.goo.gl/VcUjFa4pRwXDp3Jp9"
                  target="_blank"
                  rel="noopener"
                  a="true"
                >
                  Strada Petre Tutea, Dumbravita, Timis.
                </a>{" "}
              </div>
              <div className="box-contact-info">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;
              </div>
            </div>
            <div className="box-contact-solcialmedia">
              <div className="box-contact-icofb">
                <a
                  href="https://www.facebook.com/CheiAutoSolutionTimisoara"
                  className="social icon"
                  target="_blank"
                  rel="noopener"
                  a="true"
                >
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                    <path
                      d="M2.63,17V9.4H0v-3H2.63V4A3.88,3.88,0,0,1,3.72,1a4,4,0,0,1,2.9-1A17.33,17.33,0,0,1,9,.13V2.82H7.36a1.61,1.61,0,0,0-1.26.4,1.67,1.67,0,0,0-.27,1.06V6.37h2.9l-0.41,3H5.83V17H2.63Z"
                      transform="translate(0 0)"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="box-contact-icoinst">
                <a
                  href="https://www.instagram.com/chei_auto_solution_timisoara/"
                  className="social icon"
                  target="_blank"
                  rel="noopener"
                  a="true"
                >
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                    <path
                      d="M8.5,4.14a4.25,4.25,0,0,1,2.18.59,4.38,4.38,0,0,1,1.59,1.59,4.34,4.34,0,0,1,0,4.36,4.38,4.38,0,0,1-1.59,1.59,4.34,4.34,0,0,1-4.36,0,4.38,4.38,0,0,1-1.59-1.59,4.34,4.34,0,0,1,0-4.36A4.38,4.38,0,0,1,6.32,4.72,4.25,4.25,0,0,1,8.5,4.14Zm0,7.21A2.85,2.85,0,0,0,11.35,8.5,2.85,2.85,0,0,0,8.5,5.65,2.85,2.85,0,0,0,5.65,8.5,2.85,2.85,0,0,0,8.5,11.35Zm5.58-7.4a1.18,1.18,0,0,1-.32.72,0.92,0.92,0,0,1-.7.3,1,1,0,0,1-1-1A1,1,0,0,1,14.08,3.95ZM17,5Q17,6,17,8.5T16.94,12a7.16,7.16,0,0,1-.32,1.88,4.44,4.44,0,0,1-2.69,2.69,7.16,7.16,0,0,1-1.88.32Q11,17,8.5,17T5,16.94a6.2,6.2,0,0,1-1.88-.36,4,4,0,0,1-1.65-1,4.42,4.42,0,0,1-1-1.65A7.16,7.16,0,0,1,.06,12Q0,11,0,8.5T0.06,5A7.16,7.16,0,0,1,.38,3.07,4.44,4.44,0,0,1,3.07.38,7.16,7.16,0,0,1,5,.06Q6,0,8.5,0T12,0.06a7.16,7.16,0,0,1,1.88.32,4.44,4.44,0,0,1,2.69,2.69A7.72,7.72,0,0,1,17,5Zm-1.82,8.54a8,8,0,0,0,.3-2q0-.83,0-2.35V7.89q0-1.56,0-2.35a7.61,7.61,0,0,0-.3-2,2.74,2.74,0,0,0-1.63-1.63,7.61,7.61,0,0,0-2-.3q-0.83,0-2.35,0H7.89q-1.52,0-2.35,0a8,8,0,0,0-2,.3A2.74,2.74,0,0,0,1.86,3.49a7.61,7.61,0,0,0-.3,2q0,0.83,0,2.35V9.11q0,1.52,0,2.35a8,8,0,0,0,.3,2,2.88,2.88,0,0,0,1.63,1.63,8,8,0,0,0,2,.3q0.83,0,2.35,0H9.11q1.56,0,2.35,0a7.61,7.61,0,0,0,2-.3A2.88,2.88,0,0,0,15.14,13.51Z"
                      transform="translate(0 0)"
                    ></path>
                  </svg>{" "}
                </a>
              </div>
              <div className="box-contact-icoyb">
                <a
                  href="https://www.youtube.com/@andrijaradevici8977"
                  className="social icon"
                  target="_blank"
                  rel="noopener"
                  a="true"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="256"
                    height="180"
                    viewBox="0 0 256 180"
                  >
                    <path
                      fill="black"
                      d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                    />
                    <path
                      fill="#FFF"
                      d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <SimpleMap />
          </div>
          <div className="footer-site-info">
            <p>
              Copyright © Andrija Barbershop Professional. Toate drepturile
              rezervate.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
