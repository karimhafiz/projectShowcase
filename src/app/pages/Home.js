import React, { useState, useEffect } from "react";
import axios from "axios";

import { MyContainer, CountryCard } from '../component'
function Home() {
    const countryCodeURL = process.env.REACT_APP_COUNTRY_CODE
    const [continent, setContinent] = useState();
    const [actualCountryCode, setActualCountryCode] = useState([]);
    const [countryCode, setCountryCode] = useState('');
    const [covidCountryData, setCovidCountryData] = useState([]);

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


    const getCovidByCountry = () => {
        var options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country/code',
            params: { code: countryCode },
            headers: {
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                'x-rapidapi-key': 'ec5779dd37msh036e47009c6bae8p19577fjsn5f8bbbe0380c'
            }
        };

        axios.request(options).then(function (response) {
            setCovidCountryData(response.data)
            // console.log(response.data[0]);
        }).catch(function (error) {
            console.error(error);
        });
    };

    useEffect(() => {
        actualCountryCodeFUnc();

    }, [continent])

    useEffect(() => {
        getCovidByCountry();

    }, [countryCode])


    return (
        <>

            <MyContainer setContinent={setContinent} actualCountryCode={actualCountryCode} setCountryCode={setCountryCode}>
            </MyContainer>
            <hr />
            <CountryCard countryCode={countryCode} covidCountryData={covidCountryData} />


        </>
    );
}

export default Home;
