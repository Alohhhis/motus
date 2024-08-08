import styled from "styled-components";
import NewbieImg from "../Assets/Newbie.png";
import FlashedImg from "../Assets/Flashed.png";
import PinkIcon from "../Assets/IconPink.svg"
import GreenIcon from "../Assets/IconGreen.svg"
import GreyIcon from "../Assets/IconGrey.svg"

export const SubscriptionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 0.5fr);
    grid-gap: 1%;
    @media (max-width: 431px) {
        display: grid;
        grid-template-columns:repeat(4, 1fr);
    }
`;

export const Pink13 = styled.div`
    text-align: center;
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: #ff0074;
    padding: 0;
    height: auto;
    display: flex;
    align-items: center; /* Центрирование по вертикали */
    justify-content: center; /* Центрирование по горизонтали */
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 1/4;
        grid-row: 1/2;
        height: auto;
margin-bottom: 5%;
    }
`;

export const TextField13 = styled.div`
    display: flex;
    align-items: center; /* Центрирование по вертикали внутри TextField13 */
    justify-content: center; /* Центрирование по горизонтали внутри TextField13 */
    padding-left: 0;
    border-radius: 50px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`;

export const Text13 = styled.div`
    font-size: 50px;
    text-align: center; /* Центрирование текста внутри Text13 */
    margin: 0; /* Удаление отступов */
`;

export const NewbieContainer = styled.div`
    grid-column: 2/4;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Ensure grid layout for child elements */
    background-image: url(${NewbieImg});
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    padding: 5%;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 2/3;
        height: auto;
        margin-bottom: 0;
    }
`;

export const MiniContainer = styled.div`
    grid-column: 1 / span 2; /* Ensure full width in grid */
    display: grid;
    grid-template-columns: 1fr 1fr;
    //grid-template-rows: 0.2fr 0.3fr;/* Define two columns for children */
    gap: 1%;
`;

export const SubscribeName = styled.p`
    grid-column: 1;
    grid-row: 1;/* Place in the first column */
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    margin: 0;
`;

export const Level = styled.p`
    grid-column: 1;
    grid-row: 1;/* Place in the first column */
    font-size: 20px;
    color: grey;
    text-align: left;
    margin-top: 15%;
`;

export const Price = styled.p`
    grid-column: 2; /* Place in the second column */
    font-style: italic;
    grid-row: 1;
    text-align: left;
    margin-left: 20%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
`;
export const FreePrice = styled.p `
    grid-column: 2; /* Place in the second column */
    font-style: italic;
    grid-row: 1;
    text-align: left;
    margin-left: 40%;
    margin-top: 20%;
    margin-bottom: 0;
    font-size: 20px;
`;

export const FlashedContainer = styled.div`
    grid-column: 4/6;
    background-image: url(${FlashedImg});
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Ensure grid layout for child elements */
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    padding: 5%;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 4/5;
        height: auto;
margin-top: 5%;
        margin-bottom: 0;
    }
`;

export const Pink14 = styled.div`
    grid-column: 2/4;
    grid-row: 3/4;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 3/4;
        height: auto;
        margin-top: 0;
    }
`;

export const TextField14 = styled.div`
    display: flex;
    padding-left: 5%;
    border-radius: 30px;
    width: 100%;
    padding-top: 3%;
    height: auto;
    background-color: #ffffff;
`;
export const Text14 = styled.ul`
    list-style: none; /* Убираем стандартные маркеры списка */
    padding-left: 0; /* Убираем отступ слева */
    margin-bottom: 20%;
    line-height: 3dvh;
    text-align: left;
    font-size: 24px;


    li {
        position: relative; /* Устанавливаем относительное позиционирование для ::before */
        padding-left: 2em; /* Оставляем место для иконки */
        margin-bottom: 0.5em; /* Отступ между пунктами списка */

        &::before {
            content: ''; /* Необходим для отображения псевдоэлемента */
            position: absolute; /* Абсолютное позиционирование для иконки */
            left: 0; /* Позиция слева */
            top: 50%; /* Позиция по вертикали (центруется относительно высоты элемента li) */
            transform: translateY(-50%); /* Центрирование по вертикали */
            width: 1em; /* Ширина иконки */
            height: 1em; /* Высота иконки */
            background: url(${PinkIcon}) no-repeat center center; /* Устанавливаем кастомную иконку */
            background-size: contain; /* Сохраняем пропорции изображения */
        }
        &:last-child {
            color: grey; /* Серый цвет текста для последнего элемента */
            text-decoration: line-through; /* Перечеркивание текста для последнего элемента */

            &::before {
                background: url(${GreyIcon}) no-repeat center center; /* Иконка для последнего элемента */
            }
        }
    }
`;
export const Pink15 = styled.div`
    grid-column: 4/6;
    grid-row: 3/4;
    background-color: #ff0074;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 5/6;
        height: auto;
margin-top: 0;
    }
`;

export const TextField15 = styled.div`
    display: flex;
    padding-left: 5%;
    padding-top: 3%;
    border-radius: 30px;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`;

export const Text15 = styled.ul`
    list-style: none; /* Убираем стандартные маркеры списка */
    padding-left: 0; /* Убираем отступ слева */
    margin-bottom: 20%;
    line-height: 3dvh;
    text-align: left;
    font-size: 24px;

    li {
        position: relative; /* Устанавливаем относительное позиционирование для ::before */
        padding-left: 2em; /* Оставляем место для иконки */
        margin-bottom: 0.5em; /* Отступ между пунктами списка */

        &::before {
            content: ''; /* Необходим для отображения псевдоэлемента */
            position: absolute; /* Абсолютное позиционирование для иконки */
            left: 0; /* Позиция слева */
            top: 50%; /* Позиция по вертикали (центруется относительно высоты элемента li) */
            transform: translateY(-50%); /* Центрирование по вертикали */
            width: 1em; /* Ширина иконки */
            height: 1em; /* Высота иконки */
            background: url(${GreenIcon}) no-repeat center center; /* Устанавливаем кастомную иконку */
            background-size: contain; /* Сохраняем пропорции изображения */
        }
    }
`;

export const SubscribeButton = styled.button`
    grid-row: 4/5;
    margin-top: 2%;
    grid-column: 4/6;
    font-size: 25px;
    color: white;
    height: 50%;
    background-color: #ff4081;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff79a6;
    }

    @media (max-width: 431px) {
        grid-column: 1/5;
        grid-row: 6/7;
        height: 120%;
    }
`;
