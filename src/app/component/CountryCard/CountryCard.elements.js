import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    


    @media  screen  and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;