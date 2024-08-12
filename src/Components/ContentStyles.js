import styled from "styled-components";
import Picture2 from "../Assets/Picture2.png"

export const ContentContainer = styled.div `
    display: grid;
    grid-gap: 2%;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 431px) {
        display: grid;
        grid-template-columns:repeat(4, 1fr);
        margin-bottom: 50%;
        margin-top: 20%;
    }
`
export const Pink5 = styled.div `
    background-color: #ff0074;
    grid-column: 1/4;
    @media (max-width: 431px) {
        grid-column: 1/4;
    }
    @media (max-width: 1441px) {
        margin-top: 5%;
    }
    @media (max-width: 1281px) {
        margin-top: 8%;
    }

`
export const TextField5 =styled.div `
    border-radius: 60px;
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
    @media (max-width: 431px) {
        border-radius: 40px;
    }
`
export const Text5 = styled.p `
    font-size: 30px;
    @media (max-width: 1281px) {
        font-size: 28px;
    }
    @media (max-width: 431px) {
        font-size: 24px;
    }
`
export const Pink6 = styled.div `
    background-color: #ff0074;
    grid-column: 2/4;
    @media (max-width: 431px) {
        grid-column: 1/5;
    }

`
export const TextField6 =styled.div `
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
    border-radius: 50px;

    &:hover {
        background-image: url(${Picture2});
        background-size: cover;
        background-position: center;
    }

    @media (max-width: 431px) {
        border-radius: 40px;
    }


`
export const Text6 = styled.p `
    font-size: 24px;
    @media (max-width: 1281px) {
        font-size: 22px;
    }
    @media (max-width: 431px) {
        font-size: 20px;
    }
`
export const Pink7 = styled.div `
    background-color: #ff0074;
    grid-column: 2/4;
    @media (max-width: 431px) {
        grid-column: 1/5;
    }
`
export const TextField7 =styled.div `
    border-radius: 50px;
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
    &:hover {
        background-image: url(${Picture2});
        background-size: cover;
        background-position: center;/* Зеленый цвет при наведении */
    }
    @media (max-width: 431px) {
        border-radius: 40px;
    }

`
export const Text7 = styled.p `
    font-size: 24px;
    @media (max-width: 1281px) {
        font-size: 22px;
    }
    @media (max-width: 431px) {
        font-size: 20px;
    }
`
export const Pink8 = styled.div `
    background-color: #ff0074;
    grid-column: 2/4;
    @media (max-width: 431px) {
        grid-column: 1/5;
    }
`
export const TextField8 =styled.div `
    border-radius: 50px;
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;

    &:hover {
        background-image: url(${Picture2});
        background-size: cover;
        background-position: center;/* Зеленый цвет при наведении */
    }
    @media (max-width: 431px) {
        border-radius: 40px;
    }
`
export const Text8 = styled.p `
    font-size: 24px;
    @media (max-width: 1281px) {
        font-size: 22px;
    }
    @media (max-width: 431px) {
        font-size: 20px;
    }
`
export const Pink9 = styled.div `
    background-color: #ff0074;
    grid-column: 2/4;
    @media (max-width: 431px) {
        grid-column: 1/5;
    }
`
export const TextField9 =styled.div `
    border-radius: 50px;
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: center;
    &:hover {
        background-image: url(${Picture2});
        background-size: cover;
        background-position: center;
    }
    @media (max-width: 431px) {
        border-radius: 40px;
    }

`
export const Text9 = styled.p `
    font-size: 24px;
    @media (max-width: 1281px) {
        font-size: 22px;
    }
    @media (max-width: 431px) {
        font-size: 20px;
    }
`


