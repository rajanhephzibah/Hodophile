import React from 'react';
import background from "../img.jpg";


const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="row-banner">
         <div className="banner-text">
            <div className="headline">Hodophile</div>
            <div><i>[/ˈhoʊˌdoʊfaɪl/] Part of speech: noun Origin: Greek 'One who loves to travel'</i></div>
            <hr/>
         </div>
      </div>
    )
}

export default Home;
