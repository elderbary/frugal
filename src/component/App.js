import React from 'react';
import '../css/App.css';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        {<Header />}
      </header>
      <main>
        {<Page />}
      </main>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}

export default App;
