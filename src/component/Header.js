import React from "react";
import "../scss/Header.scss";
import photo from "../img/photo-1.png";

const Header = () => {
  return (
    <cointainer className="wrapper">
      <div className="logo">logo</div>
      <div className="title">
        <h1>Odkryj nowy wymiar oszczędzania.</h1>
        <p>
          Aplikacja stworzona po to, aby ułatwić oszczczędznie środków własnych.
          Posiada liczne zalety.
        </p>
        <button className="download">DOWNLOAD</button>
      </div>
      <div className="start-view">
        <img src={photo} alt="" />
      </div>
    </cointainer>
  );
};

export default Header;
