import React from "react";
import Picture from "./Picture";
import "../scss/Page.scss";

import photo2 from "../img/2.png";

const PageTwo = () => {
  return (
    <cointainer className="wrapper-page-2">
      <div className="photo-2">
        <Picture img={photo2} alt="pc" />
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

export default PageTwo;
