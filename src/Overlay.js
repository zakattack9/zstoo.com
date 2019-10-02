import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import animationPause from './Utils/animationPause';
import OverlayBack from './SVGs/OverlayBack';
import Icons from './SVGs/Icons';
import './Overlay.css'

class Overlay extends React.Component {
  state = { overlayOpen: false };

  overlayController() {
    this.setState({ overlayOpen: !this.state.overlayOpen });
  }

  animateOverlayIcon() {
    const btnTop = document.getElementById("btnTop");
    btnTop.classList.toggle("animateOverlayIconTop");

    const btnBtm = document.getElementById("btnBtm");
    btnBtm.classList.toggle("animateOverlayIconBtm");
  }

  animateOverlay() {
    const overlayNav = document.getElementById("overlayNav");
    overlayNav.classList.toggle("overlayAppear");
    
    const navLink = [...document.getElementsByClassName("navLink")];
    navLink.forEach(navLink => { navLink.classList.toggle("fadeInNavLink") });

    const drawBackground = document.getElementById("overlayBackPath");
    drawBackground.classList.toggle("drawBackground");
  }

  componentDidUpdate() {
    animationPause(this.props.location.pathname, this.state.overlayOpen);
    this.animateOverlayIcon();
    if (this.state.overlayOpen) {
      this.animateOverlay();
    }
  }

  renderNav() {
    if (this.state.overlayOpen) {
      return (
        <div id="overlayNav">
          <OverlayBack id="overlayBack" pathId="overlayBackPath"></OverlayBack>
          <div className="navLinkWrapper">
            <div className="navLink navHome" style={{ "animation-delay": "0.6s" }}>
              <Link to="/">Home</Link>
            </div>
            <div className="navLink navProjects" style={{ "animation-delay": "0.7s" }}>
              <Link to="/projects">Projects</Link>
            </div>
            <div className="navLink navAbout" style={{ "animation-delay": "0.8s" }}>
              <Link to="/about">About</Link>
            </div>
            <div className="navLink navContact" style={{ "animation-delay": "0.9s" }}>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="navIconWrapper">
            <Icons icon="medium" className="navIcon"></Icons>
            <Icons icon="github" className="navIcon"></Icons>
            <Icons icon="linkedin" className="navIcon"></Icons>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Overlay">
        <div className="overlayBtn" onClick={() => this.overlayController()}>
          <div id="btnTop"></div>
          <div id="btnBtm"></div>
        </div>
        {this.renderNav()}
      </div>
    )
  }
}

export default withRouter(Overlay);