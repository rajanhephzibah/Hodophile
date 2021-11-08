import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import data from './countries.json';

const Flights = (props) => {

  const listofcountries =[];

  // const countries = {
  //    listofcountries: ["India", "USA", "China", "Russia"]
  // };
  //
  // return  (
  //       <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  //       <Dropdown.Item title={data}>{data.name}</Dropdown.Item>
  //       </DropdownButton>
  //           )

  data.map( (data) =>{
          listofcountries.push(data.name)
                  }
                )

  return(
    <div>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    {listofcountries.map(data=>(<Dropdown.Item title={data}>{data}</Dropdown.Item>
    ))}
    </DropdownButton>
    </div>
  )
}

  {/*if (typeof (props.flights[0]) === 'object') {
    return (
      <div>
        {props.flights.map((flight) => (
          <Flight handleFlightClick={props.handleFlightClick} flight={flight} key={flight.id}/>
        ))}
      </div>
    )
  } else {
    return (
      <h3 className = "glyphicon glyphicon-plane" id ="plane"></h3>
    )
  }*/}


export default Flights;
