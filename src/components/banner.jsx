import React, { useState } from "react";
import '../styles/banner.css'
  
function Banner() {

  const [moneda, setMoneda] = useState(false)
  function girarMoneda (){
    setMoneda(!moneda)
  }
  
  return (
    <main className="banner-main">
      <h1 className="bannerTitle">SAMUEL GONZÁLEZ</h1>
      <p className="pBanner">THE ODYSSEY OF A FRONT/BACK WEB DEVELOPER</p>
      <div className="sistema-solar" title="Click on me!!">
        <div className="moneda" onClick={girarMoneda} style={{ transform: `rotateY(${moneda ? '0' : '180'}deg)` }}>
          <div className="atras">
            <img src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/me.png" alt="My Beatify face"/>
          </div>
          <div className="adelante">
            <img src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/skeleton.gif" alt="I, but in skeleton representation :D" />
          </div>
        </div>
        <div className="moon">
          <img src="https://portafoliopersonal.onrender.com/multimedia/moon.png" alt="Moon" title="Moon" />
        </div>
      </div>

      <p className="pItalic wrapp">
      "For some time, I have studied and enrolled in the sacred bootcamps of the web world and have carried out projects that make me bring the kingdom of the internet to life"
      </p>
      <p className="pItalic">
      "The web can sometimes be hard to control. I think I have enough passion, desire and patience to do almost anything I set my mind to"
      </p>
    </main>
  );
}

export default Banner;
