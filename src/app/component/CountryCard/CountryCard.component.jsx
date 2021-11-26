import React from "react";

function CountryCard({ countryCode, covidCountryData }) {
  console.log(covidCountryData);
  return (
    <>
      {/* {Object.keys(covidCountryData).map(function (key, index) {
        <h1>{covidCountryData}</h1>;
      })} */}
      <h3>{covidCountryData[0].deaths}</h3>
      <h1>{countryCode}</h1>
    </>
  );
}

export default CountryCard;
