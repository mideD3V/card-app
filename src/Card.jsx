import React from "react";
import Logo from "./asset/Logo2.png";
import { useState } from "react";
import {AiFillFacebook} from 'react-icons/ai'
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";



const Card = () => {

  const [phone, setPhone] = useState("Display Phone");
  
  const displayPhone = () => 
  setPhone("+2348101234568")
  

  
  return (
    <div id="card-ctn">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        {/* <h3>LOCAL MAN COMPANY</h3> */}

        <ul className="services">
          <li>Logo Design</li>
          <li>Brand Design</li>
          <li>Web Design and Development</li>
        </ul>
      </div>

      <span className="pageDiv"></span>

      <div className="desc">
        <div className="name">David Jones</div>
        <div className="title">Managing Director</div>
        <button className="phone" onClick={displayPhone}>
          {phone}
        </button>
      </div>

      <div className="socials">
        <a href="https://www.twitter.com" target='_blank' rel="noreferrer"><AiFillFacebook /> </a>
        <a href="https://www.twitter.com" target='_blank' rel="noreferrer"> <FiTwitter /> </a>
        <a href="https://www.twitter.com" target='_blank' rel="noreferrer"> <AiFillLinkedin /> </a>
      </div>
    </div>
  );
};

export default Card;
