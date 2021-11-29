import React, { useState, useEffect } from "react";
import axios from "axios";

import { MyContainer, CountryCard } from '../component'
function Home() {
    const countryCodeURL = process.env.REACT_APP_COUNTRY_CODE
    const [continent, setContinent] = useState();
    const [actualCountryCode, setActualCountryCode] = useState([]);
    const [countryCode, setCountryCode] = useState('');


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

    }, [continent])



    return (
        <>


            <MyContainer setContinent={setContinent} actualCountryCode={actualCountryCode} setCountryCode={setCountryCode}>
            </MyContainer>
            <hr />
            <CountryCard countryCode={countryCode} />



        </>
    );
}

export default Home;
