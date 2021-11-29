import React, { useState } from "react";

function Card({ covidCountryData }) {
  const [covidArray, setCovidArray] = useState({
    code: "",
    confirmed: "",
  });
  console.log(covidCountryData);
  return (
    <div>
      <h1>Card</h1>

      <h1> </h1>
    </div>
  );
}

export default Card;
