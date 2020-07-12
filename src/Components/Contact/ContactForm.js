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
      <form onSubmit={handleFormSubmit}>
        <input 
          className="ContactForm__input ContactForm__input--name"
          type="text" 
          placeholder="Name"
          value={formData.name} 
          onChange={(e) => handleFormInput(e, 'name')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--email"
          type="text" 
          placeholder="Email"
          value={formData.email} 
          onChange={(e) => handleFormInput(e, 'email')} 
        />
        <input 
          className="ContactForm__input ContactForm__input--subject"
          type="text" 
          placeholder="Subject"
          value={formData.subject} 
          onChange={(e) => handleFormInput(e, 'subject')} 
        />
        <textarea 
          className="ContactForm__input ContactForm__input--message"        
          placeholder="Message"
          value={formData.message} 
          onChange={(e) => handleFormInput(e, 'message')} 
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;