import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './components/Navbar/About'
import COVID from './components/Navbar/COVID'
import ContactUs from './components/Navbar/Contact-Us'
import PassportVisaRequirements from './components/Navbar/Passport-Visa-Requirements'
import Home from './components/Home'

//const Flight'API = require('qpx-express');

const App = () => {
  return (
     <BrowserRouter>
     <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/About" element={<About />} /> 
            <Route path="/COVID-19" element={<COVID />} /> 
            <Route path="/Passport-Visa-Requirements" element={<PassportVisaRequirements />} /> 
            <Route path="/Contact-Us" element={<ContactUs />} /> 
         </Routes>
     </div>
     </BrowserRouter>
)
}
export default App;
