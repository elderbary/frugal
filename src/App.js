import React from "react";
import "./scss/App.scss";
import Header from "./component/Header";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
import PageFour from "./component/PageFour";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <header>{<Header />}</header>
      <main>
        <div className="div-main">
          {<PageOne />}
          {<PageTwo />}
          {<PageThree />}
          {<PageFour />}
        </div>
      </main>
      <footer>{<Footer />}</footer>
    </div>
  );
}

export default App;
