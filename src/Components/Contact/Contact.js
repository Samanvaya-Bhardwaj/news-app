import React, { useState } from 'react';
import './Contact.css'
import Newsletter from '../Newsletter/Newsletter';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError('Name must be at least 3 characters.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError('Email address is invalid.');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length < 10) {
      setMessageError('Message must be at least 10 characters.');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError && !messageError) {
      const formData = {
        name: name,
        email: email,
        message: message
      };
      alert(`Form data: ${JSON.stringify(formData)}`);
    } else {
      alert('Form has errors.');
    }
  };

  return (
    <>
    <form className='cont' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      {nameError && <div className="error">{nameError}</div>}
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      {emailError && <div className="error">{emailError}</div>}
      <label>
        Message:
        <textarea value={message} onChange={handleMessageChange} />
      </label>
      {messageError && <div className="error">{messageError}</div>}
      <button type="submit">Submit</button>
    </form>
    <Newsletter/>
    </>
  );
};

export default Contact;
