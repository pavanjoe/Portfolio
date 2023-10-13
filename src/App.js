import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  
  return (
    <div className="app">
      <div className='header'>
      <Header/>
      </div>
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
