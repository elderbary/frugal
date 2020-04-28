import React from "react";
import photo from "../img/photo-1.png";
import "../scss/Page.scss";

const PageOne = () => {
  return (
    <cointainer className="wrapper-page-1">
      <div className="photo-1">
        <img src={photo} alt="" />
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

export default PageOne;
