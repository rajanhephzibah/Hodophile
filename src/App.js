import logo from './logo.svg';
//import Flight from './components/Flight.js'
import Flights from './components/Flights.js';
import './App.css';
//const FlightAPI = require('qpx-express');

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flight Info: <Flights/>
        </p>
      </header>
    </div>
)
}
export default App;
