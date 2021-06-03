import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Aside from "./components/Aside";
import achtergrond from "./assets/achtergrond.jpg"


function App() {
  return (

      <>

          <body>
  <header>
      <div className={"idrunk"}>
         <li>
             <h1>IDRUNK</h1>
         </li>
      </div>

      <div className={"buttons"}>
        <ul>
            <li>
                <a href="#">Locaties</a>
            </li>

          <li>
              <a href="#">Login</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
       </ul>
      </div>
  </header>

<div className={"container1"}>
<aside>
    <p>
        Over IDRUNK



        Het concept voor IDRUNK is ontstaan door de covid pandemie in 2020. Handen wassen, ontsmetten, ellebogen, 1.5 meter afstand en minder bewegingen werden ineens het nieuwe normaal. Omdat dit een grote impact heeft gehad op vele bedrijven waaronder de horeca, moesten we op zoek naar een passende oplossing.

        Menukaarten werden per persoon uitgeprint en weer weggegooid, of schoongemaakt na 1 x aanraken met dure chemicaliën om verspreiding van het virus te voorkomen.

        Het aantal bewegingen moest beperkt blijven en daarbij was (weer) afstand houden belangrijk. Daarnaast kwam de regel dat er maar 30 mensen in een ruimte aanwezig mogen zijn en dus de capaciteit van ruimtes beter benut moest worden. Iedereen wilt immers even lekker de deur uit voor een hapje en een drankje, maar niet in een drukke wachtrij staan wachten om een tafel te bemachtigen.

        En als er dan eindelijk een tafel was, liep je snel naar de bar om daar in de rij te staan voor een drankje.. Of je wachte, en wachte, en wachte op het bedienend personeel dat (een schone) menukaart moest komen brengen, specials uitleggen en door rende naar de volgende tafel.

        Om dit in het kader van "het nieuwe normaal" in goede banen te leiden in het leven geroepen. Via IDRUNK maak je gemakkelijk een reservering door een datum te kiezen en een daarbij behorend tijdsslot. Eenmaal aangekomen op locatie begeleid iemand je naar je gereserveerde tafel en kun je in eigen tempo via IDRUNK de menukaart bekijken, een bestelling plaatsen en genieten van je momentje buiten de deur, allemaal volgens de regels van "het nieuwe normaal".

        Schrijf je dus snel in, kom langs, geniet en proost op een goede gezondheid!
    </p>
</aside>
    <main
        image={achtergrond}>
      <h2>
          hier komt het grote main vak.
      </h2>
  </main>
</div>
        <Footer></Footer>
          </body>

      </>

  );
}

export default App;
