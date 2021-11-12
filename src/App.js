import logo from './logo.svg';
import Flights from './components/Flights.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./img.jpg";
import './App.css';
//const Flight'API = require('qpx-express');
//  <img src={logo} className="App-logo" alt="logo" />
// <div  className="App">
//   <header className="App-header">
//     <p>
//       Hodophile
//       {/*<Flights/>*/}
//     </p>
//     <body className="App-body">
//       <p>
//
//       </p>
//     </body>
// </header>
// </div>

const App = () => {
  return (


      <div style={{ backgroundImage: `url(${background})` }} className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hodophile</h1>
            <h3><i>[/ˈhoʊˌdoʊfaɪl/] Part of speech: noun Origin: Greek 'One who loves to travel'</i></h3>
            <hr />
            <Flights/>
         </div>
      </div>
)
}
export default App;
