import React from 'react';
import { About, Skills,  Header, Work,Footer } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />

    </div>
  );
};

export default App;
