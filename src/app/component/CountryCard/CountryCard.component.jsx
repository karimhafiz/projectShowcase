import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "../../component";

function CountryCard({ countryCode }) {
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
  }, [countryCode]);

  if (countryCode) {
    return (
      <>
        <h1>Hello</h1>
        <Card covidCountryData={covidCountryData} />
      </>
    );
  } else {
    return (
      <>
        <h1>you must choose a country first for this to render</h1>
      </>
    );
  }
}

export default CountryCard;
