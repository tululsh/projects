import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './components/Contact';
import About from './components/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
);


