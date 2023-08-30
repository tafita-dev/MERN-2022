import "antd/dist/reset.css"
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Service from "./components/Service/Services"
import Projet from "./components/Projets/Projet";
import Contact from "./components/contacts/Contact";
import Home from "./components/home/Home";
import "../src/assets/css/bootstrap.min.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projets" element={<Projet />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


