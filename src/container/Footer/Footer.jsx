/* eslint-disable no-undef */
import React, { useState } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Contact Details </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:sathish.maadu@gmail.com" className="p-text">
            sathis.maadu@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: + (91) 8333862076" className="p-text">
            + (91) 8333862076
          </a>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="your name"
                value={name}
                onChange={handleChangeInput}
                name="name"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="your email"
                value={email}
                onChange={handleChangeInput}
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="your message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button className="p-text" type="button" onClick={handleSubmit}>
              {loading ? 'sending' : 'send message'}{' '}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank You for getting in touch</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__blackbg'
);
