import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './countries.json';
import './Design.css';

const Flights = (props) => {

  //const [selection, setSelection] = useState(0);

  const listofcountries =[];
  data.map((data) => {listofcountries.push(data.name)});
  
  // const handleSelection = (info) => {
  //   console.log(info)
  // };onChange={this.handleSelection(this)}

  return(
    <div>
      <Form.Select aria-label="Default select example" >
        <option>Flight To</option>
        {listofcountries.map(data=>(<option value={data}>{data}</option>))}
      </Form.Select>
    </div>
  )
}

export default Flights;
