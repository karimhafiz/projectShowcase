import styled from "styled-components";

export const CountryItem = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0s.3s;
    display: flex;
    flex-direction: column;
    
    justify-content: space-evenly;
    width: 200px;
    

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }


`;