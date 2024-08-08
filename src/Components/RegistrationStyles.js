import styled, { keyframes } from "styled-components";

export const RegistrationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1%;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 431px) {
        display: grid;
        grid-template-columns:repeat(4, 1fr);
   
    }
`;

export const Pic5Div = styled.div`
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    @media (max-width: 431px) {
        grid-column: 1/2;
        grid-row: 1/2;
    }
`;

export const Pic5 = styled.img`
    width: 100%;
    height: auto;
`;

export const Pink10 = styled.div`
    text-align: center;
    grid-column: 2/4;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 2/5;
        grid-row: 1/2;
    }
`;

export const TextField10 = styled.div`
    display: flex;
    padding-left: 5%;
    border-radius: 50px;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`;

export const Text10 = styled.p`
    font-size: 50px;
    text-align: left;
`;

export const FormDiv = styled.div`
    width: 100%;
    grid-column: 4/6;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 2/3;
    }
`;

export const RegForm = styled.form`
    flex-direction: column;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
`;

export const Pink11 = styled.div`
    margin-bottom: 15px;
    position: relative;
    border: ${(props) => (props.focused ? "1px solid #ff4081" : "1px solid #ccc")};
    padding: 10px;
    border-radius: 4px;
`;

export const Pink12 = styled(Pink11)``;

export const Label = styled.label`
    position: absolute;
    top: ${(props) => (props.focused || props.value ? "-10px" : "10px")};
    left: 10px;
    font-size: ${(props) => (props.focused || props.value ? "12px" : "16px")};
    color: ${(props) => (props.focused ? "#ff4081" : "#aaa")};
    transition: all 0.3s;
    background: white;
    padding: 0 5px;
`;

export const Username = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: none;
    outline: none;
`;

export const Password = styled(Username)``;

export const PoliticsDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const PoliticsCheck = styled.input``;

export const PoliticsText = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;

export const RegButton = styled.button`
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #ff4081;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff79a6;
    }
`;
