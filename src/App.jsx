import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Usememo from "./pages/Usememo";
import UseCollbak from "./pages/UseCollbak";
import CosremHook from "./Hooks/CostemHook";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/usememo" element={<Usememo />}></Route>
      <Route path="/usecollbak" element={<UseCollbak />}></Route>
      <Route path="/cosremhook" element={<CosremHook />}></Route>
    </Routes>
  );
}

export default App;
