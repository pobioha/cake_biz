// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Appointment from './pages/Appointment';

const App = () => {
  return (
    <Router>
      <Routes> {/* Wrap Route components with Routes */}
        <Route path="/" exact element={<Home />} /> {/* Use 'element' prop to specify the component */}
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
