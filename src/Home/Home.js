import React from 'react';
import BackSVG from '../SVGs/HomeBack';
import HomeZak from '../SVGs/HomeZak.svg';
import Glow from '../SVGs/HomeBackGlow.svg';
import Overlay from '../Overlay';
import './Home.css';

function App() {
  return (
    <div className="App">
      <Overlay></Overlay>

      <div className="titleWrapper">
        <div id="svgWrapper">
          <img id="backGlow" alt="" src={Glow}></img>
          <BackSVG className="backSvg"></BackSVG>
          <div className="fadeIn">
            <img id="zakSvg" alt="" src={HomeZak}></img>
          </div>
          <img id="frontGlow" alt="" src={Glow}></img>
          <BackSVG className="frontSvg"></BackSVG>
        </div>

        <div className="title fadeIn">
          I design and develop websites and applications.
        </div>
      </div>
    </div>
  );
}

export default App;
