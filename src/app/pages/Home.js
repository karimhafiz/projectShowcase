import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MyContainer, CountryCard } from '../component'
import { getCountriesData } from '../../redux/slices/countriesDataSlice';

function Home() {
    const countryCodeURL = process.env.REACT_APP_COUNTRY_CODE
    const [continent, setContinent] = useState("asia");
    // const [actualCountryCode, setActualCountryCode] = useState([]);
    const [countryCode, setCountryCode] = useState('gb');
    const [countryCodeList, setCountryCodeList] = useState([]);
    const dispatch = useDispatch();



    // const actualCountryCodeFUnc = () => {
    //     var options = {
    //         method: 'GET',
    //         url: `${countryCodeURL}${continent}&pretty=true`
    //     };
    //     axios.request(options).then(function (response) {
    //         setActualCountryCode(response.data.data);
    //     })
    //         .catch(function (err) {
    //             console.error(err);
    //         });
    // }


    const countriesData = useSelector((state) => {

        if (state.countriesData) {
            return state.countriesData.countries

        }
    })
    // console.log(countriesData);
    useEffect(() => {

        dispatch(getCountriesData())


    }, [continent])



    return (
        <>


            <MyContainer setContinent={setContinent} countriesData={countriesData} setCountryCode={setCountryCode} setCountryCodeList={setCountryCodeList}> */}
            </MyContainer>
            <hr />
            <CountryCard countryCode={countryCode} countryCodeList={countryCodeList} setCountryCodeList={setCountryCodeList} />



        </>
    );
}

export default Home;
