import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Contact as Abstract, LetsTalk } from '../../SVGs/SVG';
import './ContactForm.scss';

const ContactForm = () => {
  const initFormData = () => ({
    name:    { value: '', error: true },
    email:   { value: '', error: true },
    subject: { value: '', error: true },
    message: { value: '', error: true },
  });
  const [formData, setFormData] = useState(initFormData());
  const [formError, setFormError] = useState({ error: true, fields: [] });
  const [errorMsg, setErrorMsg] = useState('');

  const submitForm = async () => {
    const { name, email, subject, message } = formData;
    const URL = "https://5bstnxh46j.execute-api.us-west-2.amazonaws.com/dev/contact";
    try {
      const response = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8"'
        },
        body: JSON.stringify({
          "name": name.value,
          "email": email.value,
          "subject": subject.value,
          "message": message.value,
        })
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  
  const handleFormClick = (e) => {
    Object.keys(formData).forEach((field) => {
      const inputField = document.querySelector(`.ContactForm__input--${field}`);
      inputField.classList.remove('fade', 'hasError');
      setErrorMsg('');
    });
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
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formError.error) {
      Object.keys(formData).forEach((field) => {
        const fieldHasError = formError.fields.indexOf(field) >= 0;
        const inputField = document.querySelector(`.ContactForm__input--${field}`);
        inputField.classList.toggle('fade', !fieldHasError);
        inputField.classList.toggle('hasError', fieldHasError);
      });
      if (formError.fields.length === 1 && formError.fields.includes('email')) {
        setErrorMsg('Please enter a valid email');
      } else {
        setErrorMsg('Please fill out all empty fields');
      }
    } else {
      submitForm();
    }
  }

  useEffect(() => {
    const fields = Object.keys(formData).reduce((errFields, field) => {
      if (formData[field].error) errFields.push(field);
      return errFields;
    }, []);
    const error = fields.length === 0 ? false : true;
    setFormError({ error, fields });
  }, [formData]);

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
        <LetsTalk className="ContactForm__LetsTalk" pathName="ContactForm__LetsTalk--path" fill="#161616" gradient={formError.error ? "contact" : "contactForm"}/>
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
        <div className="ContactForm__sendWrapper">
          <div className="ContactForm__errorMessage">{errorMsg}</div>
          <input className="ContactForm__input--send" type="submit" value="Send" />
        </div>
      </form>

      <div className="ContactForm__art">
        <Abstract className="ContactForm__abstract" pathName="ContactForm__abstract--path" gradient="contactForm" />
      </div>
    </div>
  );
}

export default ContactForm;