import React from "react";


import { useDispatch } from "react-redux";


import {selectedContinent} from '../../../redux/slices/countryDataSlice';


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
  setCountryCodeList
}) {

  const dispatch = useDispatch();

  const handleContinentChange = (e) => {
    dispatch(selectedContinent(e.target.value));
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
            {Object.keys(actualCountryCode).map((code, index) => (
              <option
                key={index}countryDataSlice
                value={code}
              >{`${actualCountryCode[code].country} (${code})`}</option>
            ))}
          </SearchSelect>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
}
