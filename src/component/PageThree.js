import React from "react";
import Picture from "./Picture";
import "../scss/Page.scss";

import photo3 from "../img/3.png";

const PageThree = () => {
  return (
    <cointainer className="wrapper-page-3">
      <div className="photo-1">
        <Picture img={photo3} alt="pc" />
      </div>
      <div className="description-1">
        <h1>Innovation.</h1>
        <p>
          With Frugal, you'll get more money. You can invest your money and look
          better!
        </p>
      </div>
    </cointainer>
  );
};

export default PageThree;
