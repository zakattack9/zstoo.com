import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Contact as Abstract, LetsTalk } from '../../SVGs/SVG';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactForm.scss';

const ContactForm = () => {
  const initFormData = () => ({
    name:    { value: '', error: false },
    email:   { value: '', error: false },
    subject: { value: '', error: false },
    message: { value: '', error: false },
  });
  const [formData, setFormData] = useState(initFormData());

  const handleFormClick = (e) => {
    console.log('clicked')
    e.preventDefault();
  }

  const handleFormInput = (e, field) => {
    const value = e.target.value;
    let error = false;
    if (field.match('name|subject|message')) {
      error = value ? false : true;
    } else if (field.match('email')) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      error = !emailRegex.test(value.toLowerCase());
    }
    
    const inputField = document.querySelector(`.ContactForm__input--${field}`);
    inputField.classList.toggle('noError', !error);
    setFormData({ ...formData, [field]: { value, error }});
    console.log(field, value, error)
  }

  const handleFormSubmit = (e) => {
    console.log('SUBMITTED FORM', e);
    e.preventDefault();
  }

  // contactFormTimeline.from('.ContactForm__input', {
  //   duration: 1.8,
  //   backgroundImage: 'linear-gradient(#5F5F5F, #000000), linear-gradient(90deg, #000000, #000000)',
  //   opacity: 0,
  //   y: 10,
  //   skewY: -10,
  //   skewX: -10,
  //   scale: 0.9,
  //   stagger: {
  //     each: 0.4,
  //     from: 'end'
  //   },
  // }, '<0.2');

  return (
    <div className="ContactForm">
      <form className="ContactForm__form" onSubmit={handleFormSubmit}>
        <LetsTalk className="ContactForm__LetsTalk" pathName="ContactForm__LetsTalk--path" fill="#161616" gradient="contact"/>
        <input 
          className="ContactForm__input ContactForm__input--name"
          type="text" 
          placeholder="Name"
          value={formData.name.value} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'name')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--email"
          type="text" 
          placeholder="Email"
          value={formData.email.value} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'email')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--subject"
          type="text" 
          placeholder="Subject"
          value={formData.subject.value} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'subject')} 
        />
        <textarea 
          className="ContactForm__input ContactForm__input--message"        
          placeholder="Message"
          value={formData.message.value} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'message')} 
        />
        <input className="ContactForm__input--send" type="submit" value="Send" />
      </form>

      <div className="ContactForm__art">
        <Abstract className="ContactForm__abstract" pathName="ContactForm__abstract--path" gradient="contactForm" />
      </div>
    </div>
  );
}

export default ContactForm;