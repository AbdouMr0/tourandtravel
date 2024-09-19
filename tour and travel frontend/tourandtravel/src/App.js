import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import './App.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Services from './routes/Services';
import Singup from './routes/Singup';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Singup />} />
          </Routes>
    
      </div>
    );
  }
}

export default App;
