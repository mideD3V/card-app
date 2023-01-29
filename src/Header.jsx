import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <marquee behavior="slide" direction="down">
        WELCOME!
      </marquee>
      <p id="info">
        <marquee behavior="alternate" direction="right" loop="1">
          Click on my logo to view my full website
        </marquee>
      </p>
    </div>
  );
};

export default Header;
