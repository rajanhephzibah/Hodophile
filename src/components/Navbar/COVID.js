//Page to find out COVID requirements for different countries

import React from "react";
import Flights from '../Flights.js';
import covid from "../../covid-19.png"


function COVID() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={covid}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">COVID-19 Data</h1>
            <Flights/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default COVID;