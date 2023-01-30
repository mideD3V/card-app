import React from "react";
import Logo from "./asset/Logo2.png";
import { useState } from "react";
import {AiFillFacebook} from 'react-icons/ai'
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";



const Card = () => {

  // useState hook for displaying phone number

  const [phone, setPhone] = useState("Display Phone");
  
  const displayPhone = () => {
    if (phone === 'Display Phone') {
      setPhone("+234 810 123 4568")
    } else {
      setPhone ('Display Phone')
    }
  }
  
  
  return (
    <div id="card-ctn">
      <div className="logo">
        <a href="www.google.com" target='_blank'>
          
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="services">
          <li>Logo Design</li>
          <li>Brand Design</li>
          <li>Web Design and Development</li>
        </ul>
      </div>

      <span className="contact">
        <p>
          <b>Address: </b> 2, Amebo Street, Sapa Street, NG
        </p>
        <p>
          <b>Email:</b> amebo_sapa@smail.com
        </p>
      </span>

      <div className="desc">
        <div className="name">David Jones</div>
        <div className="title">Managing Director</div>
        <button className="phone" onClick={displayPhone}>
          {phone}
        </button>
      </div>

      <div className="socials">
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <AiFillFacebook />{" "}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          {" "}
          <FiTwitter />{" "}
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          {" "}
          <AiFillLinkedin />{" "}
        </a>
      </div>
    </div>
  );
};

export default Card;
