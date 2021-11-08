import logo from './logo.svg';
//import Flight from './components/Flight.js'
import Flights from './components/Flights.js';
import './App.css';
//const FlightAPI = require('qpx-express');
//  <img src={logo} className="App-logo" alt="logo" />

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Flight Info: <Flights/>
        </p>
      </header>
    </div>
)
}
export default App;
