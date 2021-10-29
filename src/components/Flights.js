import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Flights = (props) => {
  return(
    <div>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
  )


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
}

export default Flights;
