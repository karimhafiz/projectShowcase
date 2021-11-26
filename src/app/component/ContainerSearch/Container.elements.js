import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: baseline;
    /* margin: 0px 20px 0px 0px;
    padding-right: 20px; */
    flex-direction: column;

    min-height: fit-content;
    height: auto;
    width: 98vw;
    z-index: 1;
    overflow-x: hidden;

    

    
   



`;

export const WrapperContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;



    @media screen and (max-width: 768px)
    {
        flex-direction: column;

    }

    @media screen and (max-width: 320px)
    {
        flex-direction: column;

    }
   
    
    

`;
export const Wrapper = styled.div`
    height: 100%;
    flex: 1;
    align-items: center;
    display: flex;

    justify-content: center;
    flex-direction: column;
    padding-bottom: 10px;

`;


export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
`;


export const SearchSelect = styled.select`

    height: 50px;
    width: auto;
    z-index: 10;
    text-align: center;


  &:hover {
      background-color: lightgrey;

  }
`;






