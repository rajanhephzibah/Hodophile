//Navbar option to learn more about the project
import React from "react";
import reactlogo from "../../react.png"


function Aboutproject() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={reactlogo}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About the Project</h1>
            <p>
              If you're here, thank you for taking the time to look at my work.
              This project was created for CSC 375, an Open-Source Projects course at 
              Quinnipiac University. This project is incomplete and is being worked on.
            </p>
            <p>
              If you want to work on it, here are a couple things you could fix:
              <p>
              1. Find an API for the Passport/ Visa Requirements section to display
                 the passport and visa requirements to visit different countries on the
                 drop-down menu.
              </p>
              <p>
              2. Although this is probably a simple fix, I was unable to stretch the 
                 image on the home page to be a background image. Maybe you can find the 
                 solution!
              </p>
              <p>
              3. Get an interactive map for the home page. On clicking a specific country,
                 the application will ask the user to choose between COVID or passport 
                 requirements so that they can view the corresponsing information.
              </p>
              <p>
              4. Clean up design and make it improve UI to make the application more user-
              friendly.
              </p>              
            </p>
            <p>
              I don't have that many ideas but I hope you can be creative with it and make 
              something a lot better than what it is right now. If you do create something out of it, I
              would love to see your creation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutproject;