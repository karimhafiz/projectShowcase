import styled from "styled-components";

export const CountryItem = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0s.3s;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 10px;
    padding: 10px;
    align-self: center;
    align-content: center;
    justify-content: space-evenly;
    text-align: center;
    max-width: 300px;
    width: fit-content;
    justify-content: space-evenly;
    

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }


`;