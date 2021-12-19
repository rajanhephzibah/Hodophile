//Connects to the Amadeus API to retrieve different pieces of information about
//COVID-related restrictions and facts in the country.
//This file should be changed to contain just the list of countries and the other
//functions to display the different information should be in different files.

import React, {useEffect, useState} from 'react';
import {Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './countries.json';
import './Design.css';
import Amadeus from 'amadeus';
import config from '../config';

const Flights = (props) => {

  const [cCode, setCode] = useState(null);
  const [desc, setDesc] = useState(false);
  const [riskLevel, setRiskLevel] = useState(" ");
  const [link, setLink] = useState(null);
  const [entry, setEntry] = useState(" ");
  const [declaration, setDeclaration] = useState(" ");
  const [dead, setDead] = useState(0);

  const amadeus = new Amadeus({
    clientId: config.covidAPIKey,
    clientSecret: config.covidAPISecret
  });

  useEffect((event) => {
    
    amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report', { countryCode: cCode }).then((response) => {
      console.log(response.data.diseaseCases.confirmed)
      setDead(response.data.diseaseCases.confirmed)
      setRiskLevel(response.data.diseaseRiskLevel)
      setLink(response.data.dataSources.governmentSiteLink)
      setEntry(response.data.areaAccessRestriction.entry.text)
      setDeclaration(response.data.areaAccessRestriction.declarationDocuments.text)
      setDesc(true)
    });
  }, [cCode]);

  return(
    <div>
      <Form.Select aria-label="Default select example" onChange={(event) => setCode(event.target.value)}>
        <option>------ Flight To -------</option>
        {
        data.map(info => (<option key = {info.code} value={info.code} > {info.name} </option>))
        }
      </Form.Select>
      { desc && (<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Text>
      Confirmed number of cases: {dead}
      Disease Risk Level: {riskLevel}
      Restrictions on entry: {entry}
      Required documents: {declaration}
    </Card.Text>
    <Card.Link href={link}>Government Website</Card.Link>
  </Card.Body>
</Card>) }
    </div>
  )
}

export default Flights;
