import React from 'react';
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './countries.json';
import './Design.css';

const Flights = (props) => {

  const listofcountries =[];
  data.map( (data) =>{
          listofcountries.push(data.name)
                  }
                )

  return(
    <div>
  {['Flight From', 'Flight To'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={`dropdown-variants-${variant}`}
        title={variant}
      >
      {listofcountries.map(data=>(<Dropdown.Item title={data}>{data}</Dropdown.Item>
      ))}
      </DropdownButton>
    ),
  )}
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
