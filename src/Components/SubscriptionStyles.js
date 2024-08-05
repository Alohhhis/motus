import styled from "styled-components";
import NewbieImg from "../Assets/Newbie.png";
import FlashedImg from "../Assets/Flashed.png";

export const SubscriptionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    //grid-template-rows: 1fr, 1fr, 1fr,0.3fr;
    grid-gap: 1%;
`

export const Pink13 = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
`
export const TextField13 = styled.div`
    display: flex;
    padding-left: 5%;
    border-radius: 50px;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`
export const Text13 = styled.div`
    font-size: 30px;
`
export const NewbieContainer = styled.div`
    grid-column: 2/4;
    grid-row: 2/3;
    background-image: url(${NewbieImg});
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    padding: 5%;
`
export const SubscribeName = styled.p`
    font-size: 30px;
    font-weight: bold;
    text-align: left;
margin: 0 ;
`
export const Level = styled.p`
    font-size: 20px;
    color: grey;
    text-align: left;
`
export const Price = styled.p`
    font-style: italic;
    text-align: left;
    margin-left: 50%;
    margin-top: 0;
    margin-bottom: 0;
font-size: 26px;

`
export const FlashedContainer = styled.div`
    grid-column: 4/6;
    grid-row: 2/3;
    background-image: url(${FlashedImg});
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    padding: 5%;
    justify-content: center;

`
export const MiniContainer = styled.div`
    grid-column: 2;
    width: 100%;
    height: auto;
    
`
export const Pink14 = styled.div`
    grid-column: 2/4;
    grid-row: 3/4;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
`
export const TextField14 = styled.div`
    display: flex;
    padding-left: 5%;
    border-radius: 30px;
    width: 100%;
    padding-top: 3%;
    height: auto;
    background-color: #ffffff;
`
export const Text14 = styled.ul`
    text-align: left;
    margin-bottom: 20%;
    line-height: 3dvh;

`
export const Pink15 = styled.div`
    grid-column: 4/6;
    grid-row: 3/4;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
`
export const TextField15 = styled.div`
    display: flex;
    padding-left: 5%;
    padding-top: 3%;
    border-radius: 30px;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`
export const Text15 = styled.ul`
    text-align: left;
    margin-bottom: 20%;
    line-height: 3dvh;

`
export const SubscribeButton = styled.button`
    grid-row: 4/5;
    grid-column: 4/6;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: #ff4081;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    // animation:  2s infinite;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff79a6;
    }
`

