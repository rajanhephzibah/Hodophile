//Page to learn more about the creator
import React from "react";
import profile from "../../profile.png"


function About() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={profile}
              alt=""
              width={"500px"}
              height={"200px"}
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About the creator</h1>
            <p>
              Hephzibah Rajan is a Computer-Science student at Quinnipiac 
              University. This project was completed for a course during her junior year.
            </p>
            <p>
              Hephzibah has experience in multiple languages, including Scala, C++, Java,
              and Python among many others. Hephzibah is hoping to pursue a career in this 
              field after graduation. Her ideal job would be a DevOps software developer but
              she wishes to gain a lot more experience in different fields of C.S before
              graduation to make sure that she is serving in a position that she loves and 
              feels most fulfilled in. 
            </p>
            <p>
              Email: rajanhephzibah@gmail.com{"\n"}
            </p>
            <p>
            Linkedin: <a href="https://www.linkedin.com/in/hephzibahrajan/"> Hephzibah Rajan </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;