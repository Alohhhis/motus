import styled from "styled-components";

export const AboutUsContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6,0.1fr);
    grid-gap: 4px;
`
export const Pink2 = styled.div `
    background-color: #ff0074;
    grid-column: 1/4;
    grid-row: 1/2;
    padding: 0;
    height: auto;
`
export const TitleContainer = styled.div `
    border-radius: 30px;
    height: auto;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: left;
 
`
export const TitleText = styled.p `
    color: black;
    font-size: 34px;
    font-weight: bold;
    
    
`
export const Pic2 = styled.img `
width: 100%;
    height: auto;
`
export const PicBlock2 = styled.div `
    grid-column: 1/4;
    grid-row: 2/3;
    
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
`

export const TextField3 = styled.div`
    border-radius: 30px;
    height: 100%;
    margin: 0;
    padding: 20px;
    background-color: #ffffff;
    text-align: left;
    flex: 1;
    box-sizing: border-box; // Учитываем padding и border при расчете высоты
`

export const Text3 = styled.p`
width: 90%;
    margin: 2%;
    font-size: 20px;
`


export const PicBlock3 = styled.div`
    border-radius: 30px;
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

`
