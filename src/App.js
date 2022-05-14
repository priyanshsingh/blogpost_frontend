import { Routes, Route } from "react-router-dom";

import React from 'react';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Write from "./components/Write";

// import About from "./components/Contact";
// import Hello from "./components/material_ui_components/Hello";
// import Cards from "./components/material_ui_components/Cards/Cards.jsx";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Navbar title = "Blog Post" style={{position:'fixed'}}/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
      <Footer />

      {/* <Cards /> */}

      {/* <About />
      <Hello /> */}
    </>
  );
}

export default App;
