import React, { useState } from 'react';
import './App.css';

import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [value, setValue] = useState('/');

  

  return (
    <div className='text-content'>
    <div className='App-header'>
      <h3>My app</h3>
      </div>
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}   
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
    
    </div>
  );
}

export default App;