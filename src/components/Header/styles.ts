import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #d73035;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 198px;

`;


export const ContentContainer = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: white;
        font-size: 32px;
    }
    h2{
        color:white;
        font-weight: 400;
        font-size: 16px;
        opacity: .9;
        margin-top: 6px;
    }
`
