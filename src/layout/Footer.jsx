import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__img">
        <img className="pikachu" src="/images/pika.gif" alt="" />
      </div>
      <div className="footer__black"></div>
      <div className="footer__white"></div>
      <p className="footer__text">© 2022 - Made by Alan Yeverino</p>
      <div className="footer__black2"></div>
    </footer>
  );
};

export default Footer;
