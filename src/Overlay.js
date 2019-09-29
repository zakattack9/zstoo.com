import React from 'react';
import { Link } from 'react-router-dom';
import OverlayBack from './SVGs/OverlayBack';
import Icons from './SVGs/Icons';
import './Overlay.css'

class Overlay extends React.Component {

  render() {
    return (
      <div className="Overlay">
        <div className="overlayBtn">
          <div className="btnTop"></div>
          <div className="btnBtm"></div>
        </div>

        <div id="overlayNav">
          <OverlayBack className="overlayBack"></OverlayBack>
          <div className="navLinkWrapper">
            <div className="navLink navHome">
              <Link to="/">Home</Link>
            </div>
            <div className="navLink navProjects">
              <Link to="/projects">Projects</Link>
            </div>
            <div className="navLink navAbout">
              <Link to="/about">About</Link>
            </div>
            <div className="navLink navContact">
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="navIconWrapper">
            <Icons icon="medium" className="navIcon"></Icons>
            <Icons icon="github" className="navIcon"></Icons>
            <Icons icon="linkedin" className="navIcon"></Icons>
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay;