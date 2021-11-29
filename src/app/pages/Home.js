import React, { useState, useEffect } from "react";
import axios from "axios";

import { MyContainer, CountryCard } from '../component'
function Home() {
    const countryCodeURL = process.env.REACT_APP_COUNTRY_CODE
    const [continent, setContinent] = useState("asia");
    const [actualCountryCode, setActualCountryCode] = useState([]);
    const [countryCode, setCountryCode] = useState('gb');
    const [countryCodeList, setCountryCodeList] = useState([]);



    const actualCountryCodeFUnc = () => {
        var options = {
            method: 'GET',
            url: `${countryCodeURL}${continent}&pretty=true`
        };
        axios.request(options).then(function (response) {
            setActualCountryCode(response.data.data);
        })
            .catch(function (err) {
                console.error(err);
            });
    }




    useEffect(() => {
        actualCountryCodeFUnc();
        console.log(countryCodeList);

    }, [continent])



    return (
        <>


            <MyContainer setContinent={setContinent} actualCountryCode={actualCountryCode} setCountryCode={setCountryCode} setCountryCodeList={setCountryCodeList}>
            </MyContainer>
            <hr />
            <CountryCard countryCode={countryCode} countryCodeList={countryCodeList} setCountryCodeList={setCountryCodeList} />



        </>
    );
}

export default Home;
