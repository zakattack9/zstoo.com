import React from 'react';
import Zak from '../../SVGs/ZAK.svg';
import { Home as Abstract } from '../../SVGs/SVG';
import Glow from '../../SVGs/HomeGlow.svg';
import './Home.scss';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <div className="Home__wrapper">
          <div className="Home__art">
            <img className="Home__glow Home__glow--back" src={Glow} alt="abstract art glow"/>
            <Abstract className="Home__abstract Home__abstract--back" />
            <img className="Home__zak" src={Zak} alt="Zak"/>
            <Abstract className="Home__abstract Home__abstract--front" />
            <img className="Home__glow Home__glow--front" src={Glow} alt="abstract art glow"/>
          </div>

          <div className="Home__headline">
            I design and develop websites and applications.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;