import React from 'react'

import {CountryItem} from './Card.elements'


function CardItem({
    countryName,
    confirmedCases,
    recoveredCases,
    criticalCases,
    deathCases
}) {


    return (
        <CountryItem>
            <h4>{countryName}</h4>
            <h5>COnfirmed Cases: {confirmedCases}</h5>
        </CountryItem>
    )
}

export default CardItem;
