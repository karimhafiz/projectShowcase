import React, { useState, useEffect } from "react";
import axios from "axios";
import {CardItem} from './subPages/';

import { Container } from "./CountryCard.elements";



function CountryCard({ countryCode, countryCodeList, setCountryCodeList}) {
  const [covidCountryData, setCovidCountryData] = useState(null);

  const getCovidByCountry = () => {
    var options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country/code",
      params: { code: countryCode },
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "ec5779dd37msh036e47009c6bae8p19577fjsn5f8bbbe0380c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCovidCountryData(response.data);
        // console.log(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getCovidByCountry();
    console.log(covidCountryData);
    // setCountryCodeList(countryCodeList.push(countryCode))
    setCountryCodeList([...countryCodeList, countryCode ]);
    console.log(countryCodeList);
    
    

  }, [countryCode]);

  return (
    <Container>
     
      {covidCountryData ? (
        <CardItem
          countryName={`${covidCountryData[0].country} (${covidCountryData[0].code})`}
          confirmedCases={covidCountryData[0].confirmed}
          recoveredCases={covidCountryData[0].recovered}
          criticalCases={covidCountryData[0].critical}
          deathCases={covidCountryData[0].deaths}
        />
     
      ) : null}
    </Container>
  );
}

export default CountryCard;
