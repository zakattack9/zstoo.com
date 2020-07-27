import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.scss';

// component used for navigation links
const NavLink = props => {
  const styles = {
    height: `${props.height}vh`,
    gridTemplateColumns: `min-content ${props.lineWidth}px`,
    transform: `rotate(${props.rotate}deg)`,
  };

  const leftStyles = {
    ...styles,
    gridTemplateColumns: `${props.lineWidth}px min-content`,
  }

  return props.left ? (
    <div className={`NavLink ${props.className}`} style={leftStyles}>
      <div className="NavLink__line"></div>
      <div className="NavLink__text NavLink__text--left">{props.text}</div>
    </div>
  ) : (
    <div className={`NavLink ${props.className}`} style={styles}>
      <div className="NavLink__text NavLink__text--right">{props.text}</div>
      <div className="NavLink__line"></div>
    </div>
  );
}

export default NavLink