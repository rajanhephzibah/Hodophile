//Home page of the application

import '../App.css';
import image from "../img.png"

{/* Used this to try and make the image a background image.
  However, it did not function the way I wantes it to. 
  To try it, replace what's in the return statement with these lines.
  <div style={{position: 'center'}}>
        <div>
        <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt=""
              width="800px"
              height="200px"
            />
        </div>
        <div>
          <div>Hodophile</div>
          <div>[/ˈhoʊˌdoʊfaɪl/] Part of speech: noun Origin: Greek 'One who loves to travel'</div>
        </div>
      </div> */}

const Home = () => {


    return (
      <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={image}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hodophile</h1>
            <div>[/ˈhoʊˌdoʊfaɪl/] Part of speech: noun Origin: Greek 'One who loves to travel'</div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Home;
