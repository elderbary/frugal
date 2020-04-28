import React from 'react';
import '../css/App.scss';
import Header from './Header';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        {<Header />}
      </header>
      <main>
        {<PageOne />}
        {<PageTwo />}
        {<PageThree />}
        {<PageFour />}
      </main>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}

export default App;
