import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    


    @media  screen  and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;