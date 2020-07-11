import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact as Abstract } from '../../SVGs/SVG';
import Spacer from '../Spacer';
import './Contact.scss';

class Contact extends React.Component {
  render () {
    return (
      <div className="Contact">
        <Abstract className="Contact__abstract" pathName="Contact__abstract--path" />
        <Spacer height={100} />
      </div>
    );
  }
}

export default Contact;