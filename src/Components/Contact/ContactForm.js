import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactForm.scss';

const ContactForm = () => {
  const initFormData = () => ({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formData, setFormData] = useState(initFormData());

  const handleFormClick = (e) => {
    console.log('clicked')
    e.preventDefault();
  }

  const handleFormInput = (e, field) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
  }

  const handleFormSubmit = (e) => {
    console.log('SUBMITTED FORM', e);
    e.preventDefault();
  }

  return (
    <div className="ContactForm">
      <form className="ContactForm__form" onSubmit={handleFormSubmit}>
        <div className="ContactForm__title">Let's<br/>Talk!</div>
        <input 
          className="ContactForm__input ContactForm__input--name"
          type="text" 
          placeholder="Name"
          value={formData.name} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'name')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--email"
          type="text" 
          placeholder="Email"
          value={formData.email} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'email')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--subject"
          type="text" 
          placeholder="Subject"
          value={formData.subject} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'subject')} 
        />
        <textarea 
          className="ContactForm__input ContactForm__input--message"        
          placeholder="Message"
          value={formData.message} 
          onClick={handleFormClick}
          onChange={(e) => handleFormInput(e, 'message')} 
        />
        <input className="ContactForm__input--send" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactForm;