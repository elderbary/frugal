import React from "react";
import "../scss/Page.scss";
import Picture from "./Picture";

import photo1 from "../img/1.png";

const PageOne = () => {
  return (
    <cointainer className="wrapper-page-1">
      <div className="photo-1">
        <Picture img={photo1} alt="pc" />
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
