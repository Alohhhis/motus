import styled from "styled-components";

export const AboutUsContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4px;
    @media (max-width: 431px) {
        display: grid;
        grid-template-columns:repeat(4, 1fr);
        margin-bottom: 50%;
        margin-top: 20%;
    }
    
`
export const Pink2 = styled.div `
    background-color: #ff0074;
    grid-column: 1/4;
    grid-row: 1/2;
    padding: 0;
    height: auto;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 1/3;
        grid-row: 2/3;
    }
    
`
export const TitleContainer = styled.div `
    display: flex;
    padding-left: 5%;
    border-radius: 50px;
    width: 100%;
    height: auto;
    background-color: #ffffff;
    @media (max-width: 431px) {
        border-radius: 40px;
    }

`
export const TitleText = styled.p `
    color: black;
    font-size: 34px;
    font-weight: bold;
    @media (max-width: 1281px) {
        font-size: 30px;
    }
    @media (max-width: 431px) {
        font-size: 25px;
        margin-left: 10%;
    }
    
`
export const Pic2 = styled.img `
width: 100%;
    height: auto;
`
export const PicBlock2 = styled.div `
    grid-column: 1/4;
    grid-row: 2/3;
    @media (max-width: 431px) {
        grid-column: 3/5;
        grid-row: 2/3;
    }
    
`
export const Pink3 = styled.div`
    background-color: #ff0074;
    grid-column: 4/6;
    grid-row: 1/3;
    padding: 0;
    height: auto;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 3/4;
    }
`

export const TextField3 = styled.div`
    border-radius: 50px;
    height: 100%;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: left;
    flex: 1;
    box-sizing: border-box;
    @media (max-width: 431px) {
        border-radius: 40px;
    }
`

export const Text3 = styled.p`
width: 90%;
    margin: 2%;
    font-size: 20px;
    line-height: 150%;
    @media (max-width: 1281px) {
        font-size: 17px;
    }
    @media (max-width: 431px) {
        font-size: 15px;
    }
`


export const PicBlock3 = styled.div`
    border-radius: 50px;
    height: auto;
    //margin: 10px;
    padding: 20px;
    background-color: #ffffff;
    text-align: left;
    grid-column: 3/6;
    grid-row: 3/6;
    width: auto;
    
`
export const Pic3 = styled.img`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin: 0;
    
`
export const PicPink = styled.div`
    grid-column: 4/6;
    height: auto;
    background-color: #ff0074;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 1/2;
        background: #ffff;
        width: auto;
    }
`
