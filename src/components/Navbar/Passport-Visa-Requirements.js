//Page to find out Passport/VISA requirements for different countries
//Needs to be set up with an API that provides this information

import React from "react";
import Flights from '../Flights.js';
import passport from "../../passport.png"



function PassportVisaRequirements() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={passport}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Passport Visa Requirements</h1>
            <Flights/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassportVisaRequirements;