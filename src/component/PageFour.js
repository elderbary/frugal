import React from "react";
import Picture from "./Picture";
import "../scss/Page.scss";

import photo4 from "../img/4.png";

const PageFour = () => {
  return (
    <cointainer className="wrapper-page-2">
      <div className="photo-2">
        <Picture img={photo4} alt="pc" />
      </div>
      <div className="description-2">
        <h1>Innovation.</h1>
        <p>
          With Frugal, you'll get more money. You can invest your money and look
          better!
        </p>
      </div>
    </cointainer>
  );
};

export default PageFour;
