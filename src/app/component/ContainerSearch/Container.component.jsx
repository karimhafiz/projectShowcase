import React from "react";


import { useDispatch } from "react-redux";


import {selectedContinent, getCountriesData} from '../../../redux/slices/countriesDataSlice';


import {
  Container,
  Wrapper,
  Label,
  SearchSelect,
  WrapperContainer,
} from "./Container.elements";

export default function MyContainer({
  setContinent,
  actualCountryCode,
  setCountryCode,
  setCountryCodeList,
  countriesData
}) {

  const dispatch = useDispatch();

  const handleContinentChange = (e) => {
    dispatch(selectedContinent(e.target.value));
    dispatch(getCountriesData())
  };
  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
    
  };
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <Label htmlFor="continent">Choose Continent</Label>
          <SearchSelect id="continent" onClick={handleContinentChange}>
            <option value="asia"> Asia</option>
            <option value="africa"> Africa</option>
            <option value="north%20america"> North America</option>
            <option value="south%20america"> South America</option>
            <option value="Antarctic"> Antarctic</option>
            <option value="europe"> Europe</option>
            <option value="Oceania"> Oceania</option>
          </SearchSelect>
        </Wrapper>
        <Wrapper>
          <Label htmlFor="realSearch">Choose Country</Label>
          <SearchSelect id="realSearch" onClick={handleCountryChange}>
            {Object.keys(countriesData).map((code, index) => (
              <option
                key={countriesData}countryDataSlice
                value={code}
              >{`${countriesData[code].country} (${code})`}</option>
            ))}
          </SearchSelect>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
}
