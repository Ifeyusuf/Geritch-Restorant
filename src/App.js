import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Award from "./pages/Awards";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Menu' element={<Menu/>}/>
      <Route path='Award' element={<Award/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
