import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/About";
import Fichelogement from "./pages/Fichelogement";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fichelogement" element={<Fichelogement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
       </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
