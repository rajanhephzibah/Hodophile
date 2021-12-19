//Maps all the different pages to their repective files

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './components/Navbar/About'
import COVID from './components/Navbar/COVID'
import PassportVisaRequirements from './components/Navbar/Passport-Visa-Requirements'
import Home from './components/Home'
import Aboutproject from './components/Navbar/AboutProject';


const App = () => {
  return (
     <div className='App'>
     <BrowserRouter>
     <div className="Routing">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/About" element={<About />} /> 
            <Route path="/COVID-19" element={<COVID />} /> 
            <Route path="/Passport-Visa-Requirements" element={<PassportVisaRequirements />} /> 
            <Route path="/About-project" element={<Aboutproject />} /> 
         </Routes>
     </div>
     </BrowserRouter>
     </div>
)
}
export default App;
