import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardItem } from "./subPages/";

import { Container } from "./CountryCard.elements";

function CountryCard({ countryCode, countryCodeList, setCountryCodeList }) {
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
      
        setCountryCodeList((previousData) => [...previousData,response.data])
        return response.data;
        // console.log(response.data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const allCountriesWithCovidData = [];

  useEffect(() => {
    
    
    getCovidByCountry();
    // console.log(covidCountryData);
    // setCountryCodeList(countryCodeList.push(countryCode))
    setCountryCodeList([...countryCodeList]);
    // console.log(countryCodeList);
  }, [countryCode]);

  console.log(countryCodeList);


  return (
    <Container>
      {countryCodeList ? (
        countryCodeList.map((country, index) => (
              <CardItem
               countryName={`${countryCodeList[index][0].country} (${countryCodeList[index][0].code})`}
          confirmedCases={countryCodeList[index][0].confirmed}
          recoveredCases={countryCodeList[index][0].recovered}
          criticalCases={countryCodeList[index][0].critical}
          deathCases={countryCodeList[index][0].deaths}
              />
            ))

     
      
    
      ) : null}
    </Container>
  );
}

export default CountryCard;
