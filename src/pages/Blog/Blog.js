import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

// <Link to="/blog">Blog</Link>

const Blog = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Introducere */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Servicii Profesionale pentru Chei Auto</h2>
        <p className="text-base text-gray-700 mb-2">
          Oferim servicii complete de programare, reparații și deblocări auto pentru toate mărcile auto, inclusiv Audi, BMW, Mercedes-Benz, Volkswagen, Opel, Ford, Renault, Peugeot, Toyota, Dacia, etc. Fie că ai pierdut cheia, ai nevoie de una de rezervă sau vrei un upgrade la cheie smart LCD, suntem aici să te ajutăm.
        </p>
      </section>

      {/* Chei Auto */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Chei Auto – Programare și Confecționare</h2>
        <p className="text-base text-gray-700 mb-2">
          Cheile auto moderne includ cipuri de imobilizator (transpondere) cum ar fi ID33, ID48, ID46, Megamos Crypto, Philips Crypto și sunt esențiale pentru pornirea vehiculului. Programăm chei auto pentru modele fabricate între 1995 și 2024.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Programare transpondere și telecomenzi</li>
          <li>Confecționare chei auto după contact, portieră sau ECU</li>
          <li>Chei de rezervă pentru BMW, Audi, VW, Ford, Opel, etc.</li>
          <li>Chei Keyless Go, chei smart, telecomenzi integrate</li>
          <li>Clonare chei auto și învățare pe mașină sau la banc</li>
        </ul>
      </section>

      {/* Reparații chei auto */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Reparații Chei Auto</h2>
        <p className="text-base text-gray-700 mb-2">
          Reparam carcase sparte, plăcuțe electronice deteriorate, contacte oxidate sau butoane uzate. Executăm și reprogramarea cheilor care nu mai funcționează.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Înlocuire carcasă, lame HU66, HU100, SIP22, TOY48, etc.</li>
          <li>Reparare PCB-uri și lipituri SMD</li>
          <li>Reprogramare chei BMW CAS1/CAS2/CAS3/CAS4</li>
          <li>Reparăm chei Renault Card, Mercedes SmartKey</li>
        </ul>
      </section>

      {/* Smart Key LCD */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Smart Key LCD – Upgrade Chei Auto</h2>
        <p className="text-base text-gray-700 mb-2">
          Cheile auto cu display LCD adaugă un plus de eleganță și funcționalitate. Compatibile cu mărci precum VW, Audi, Skoda, BMW, Hyundai, Kia, Toyota.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Display color cu starea mașinii și alarme</li>
          <li>Funcții de keyless entry și start</li>
          <li>Deschidere portbagaj, control geamuri, geolocalizare</li>
          <li>Programare cu dispozitive Autel, VVDI, Xhorse</li>
        </ul>
      </section>

      {/* Deblocări Auto */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Deblocări Auto – Fără Deteriorări</h2>
        <p className="text-base text-gray-700 mb-2">
          Executăm deblocări auto în caz de pierdere a cheii sau blocare accidentală. Fără daune, indiferent de sistem: centralizat, keyless, sau cu închidere pneumatică.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Intervenții pentru BMW E și F series, VW, Audi, Ford, Renault</li>
          <li>Deschidere fără deteriorare cu pick-uri Lishi sau decodoare speciale</li>
          <li>Disponibilitate 24/7, intervenție rapidă în județul [Tău]</li>
          <li>Consultanță pentru soluții post-deblocare: realizare cheie nouă</li>
        </ul>
      </section>

      {/* Sisteme Imobilizator: EWS / CAS / UCH / BCM */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Diagnoză și Programare Module Imobilizator</h2>
        <p className="text-base text-gray-700 mb-2">
          Oferim servicii de diagnoză, reprogramare și adaptare pentru modulele de imobilizator:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>BMW: EWS 2, 3, 4 și CAS 1–4 (inclusiv FEM/BDC)</li>
          <li>VAG: Immo 3/4, Comfort Module, BCM2</li>
          <li>Renault UCH, PSA BSI, Mercedes EZS (NEC, Motorola)</li>
          <li>Citire și scriere EEPROM/MCU – Atmel, ST, Motorola</li>
        </ul>
      </section>

      {/* Modele și ani */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Compatibilitate Chei Auto – Modele și Ani</h2>
        <p className="text-base text-gray-700 mb-2">
          Programăm chei și telecomenzi pentru modele produse între 1995 și 2024, inclusiv:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>BMW Seria 3 E46, E90, F30, G20 | Seria 5 E60, F10, G30</li>
          <li>Audi A3/A4/A6 2001–2023, Q5, Q7 | VW Golf 4–8, Passat</li>
          <li>Renault Clio, Megane, Dacia Logan, Sandero, Duster</li>
          <li>Ford Focus, Mondeo, Fiesta | Opel Astra, Corsa, Insignia</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Programează-te Acum</h2>
        <p className="text-base text-gray-700 mb-2">
          Contactează-ne pentru o ofertă personalizată sau pentru a programa o intervenție la domiciliu. Suntem disponibili telefonic, pe WhatsApp și prin formularul de contact.
        </p>
      </section>
    </div>
  );
};

export default Blog;
