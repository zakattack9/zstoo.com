import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Contact as Abstract, LetsTalk } from '../../SVGs/SVG';
import Loader from '../Loader/Loader';
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
  const [pauseLoader, setPauseLoader] = useState(true);
  const contactFormAnimation = useRef();

  const submitForm = async () => {
    const { name, email, subject, message } = formData;
    const URL = "https://5bstnxh46j.execute-api.us-west-2.amazonaws.com/dev/contact";
    try {
      await fetch(URL, {
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
      setPauseLoader(true);
      document.querySelector('.ContactForm__Loader').classList.add('hide');
      document.querySelector('.ContactForm__success').classList.remove('hide');
    } catch (err) {
      setPauseLoader(true);
      document.querySelector('.ContactForm__Loader').classList.add('hide');
      document.querySelector('.ContactForm__failure').classList.remove('hide');
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
      error = value.trim() ? false : true;
    } else if (field.match('email')) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      error = !emailRegex.test(value.toLowerCase());
    }
    
    const inputField = document.querySelector(`.ContactForm__input--${field}`);
    inputField.classList.toggle('noError', !error);
    setFormData({ ...formData, [field]: { value, error }});
  }

  const handleFormSubmit = async (e) => {
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
      contactFormAnimation.current.reverse(0).then(() => {
        document.querySelector('.ContactForm__Loader').classList.remove('hide');
        setPauseLoader(false);
        submitForm();
      });
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

  useEffect(() => {
    const contactFormTimeline = gsap.timeline({});
    contactFormTimeline.from('.ContactForm__LetsTalk--path', {
      duration: 1.5,
      ease: 'power2.inOut',
      strokeDashoffset: -100,
      opacity: 0,
    }, 0);
    contactFormTimeline.from('.ContactForm__input', {
      duration: 0.5,
      ease: 'power1.inOut',
      opacity: 0,
      scale: 0.95,
      y: 5,
      transition: 0,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      pointerEvents: 'none',
    }, '<0.4');
    contactFormTimeline.from('.ContactForm__send', {
      duration: 0.6,
      ease: 'power1.inOut',
      opacity: 0,
      scale: 0.95,
      pointerEvents: 'none',
      y: 5,
    }, '>-0.2');
    contactFormTimeline.from('.ContactForm__abstract--path', {
      duration: 1,
      ease: 'power1.inOut',
      strokeDashoffset: 1122,
    }, '<-1');
    contactFormAnimation.current = contactFormTimeline;
    document.querySelector('.ContactForm').classList.remove('hide');
  }, []);


  return (
    <div className="ContactForm hide">
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
          <input className="ContactForm__send" type="submit" value="Send" />
        </div>
      </form>

      <Loader className="ContactForm__Loader hide" pause={pauseLoader} />

      <div className="ContactForm__success hide">
        Submitted contact information successfully, we'll be in touch soon!
        <ReturnHomeBtn />
      </div>

      <div className="ContactForm__failure hide">
        Unfortunately something went wrong, please send me an email instead at <br/> 
        <a className="ContactForm__failure--email" href="mailto:sakata.zak@gmail.com">sakata.zak@gmail.com</a>
        <ReturnHomeBtn />
      </div>

      <div className="ContactForm__art">
        <Abstract className="ContactForm__abstract" pathName="ContactForm__abstract--path" gradient="contactForm" />
      </div>
    </div>
  );
}

export default ContactForm;

const ReturnHomeBtn = props => {
  return (
    <Link to="/">
      <div className="ReturnHomeBtn">
        Homepage
      </div>
    </Link>
  );
}