import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.scss';

// component used for navigation links
const NavLink = props => {
  const styles = {
    gridTemplateColumns: `min-content ${props.lineWidth}px`,
    transform: `rotate(${props.rotate}deg)`,
  };

  const leftStyles = {
    ...styles,
    gridTemplateColumns: `${props.lineWidth}px min-content`,
  }

  const linkText = (modifier) => {
    if (props.href) {
      return (
        <Link to={props.href}>
          <div className={`NavLink__text NavLink__text--${modifier}`}>{props.text}</div>
        </Link>
      );
    } else if (props.onClick) {
      return (
        <div className={`NavLink__text NavLink__text--${modifier}`} onClick={props.onClick}>{props.text}</div>
      );
    } else {
      return (
        <div className={`NavLink__text NavLink__text--${modifier}`}>{props.text}</div>
      );
    }
  }

  return props.left ? (
    <div className={`NavLink ${props.className}`} style={leftStyles}>
      <div className="NavLink__line"></div>
      {linkText('left')}
    </div>
  ) : (
    <div className={`NavLink ${props.className}`} style={styles}>
      {linkText('right')}
      <div className="NavLink__line"></div>
    </div>
  );
}

export default NavLink