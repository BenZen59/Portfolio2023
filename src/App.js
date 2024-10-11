import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profil from "./components/Profil/Profil";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import Experience from "./components/Experience/Experience";
import "./App.css";
import Formation from "./components/Formation/Formation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MenuBurger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/formations" element={<Formation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
