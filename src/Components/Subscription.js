import React from "react";
import {
    FlashedContainer, FreePrice, Grey,
    Level, MiniContainer,
    NewbieContainer,
    Pink13, Pink14, Pink15,
    Price, PriceContainer, SubscribeButton,
    SubscribeName,
    SubscriptionContainer,
    Text13, Text14, Text15,
    TextField13, TextField14, TextField15
} from "./SubscriptionStyles";

const Subscription = () => {
    return (
        <SubscriptionContainer>
            <Pink13>
                <TextField13>
                    <Text13>
                        Подписка
                    </Text13>
                </TextField13>
            </Pink13>
            <NewbieContainer>
                <MiniContainer>
                    <SubscribeName>Newbie</SubscribeName>
                    <Level>-новичок</Level>

                </MiniContainer>
                <PriceContainer>
                    <Price>Бесплатно</Price>
                </PriceContainer>
            </NewbieContainer>

            <FlashedContainer>
                <MiniContainer>
                    <SubscribeName>Flashed</SubscribeName>
                    <Level>-прошаренный</Level>
                </MiniContainer>
                <PriceContainer>
                    <Price>499 ₽/мес.</Price>
                    <Price>2499 ₽ на полгода</Price>
                    <Price>4999 ₽ на год</Price>
                </PriceContainer>
            </FlashedContainer>
            <Pink14>
                <TextField14>
                    <Text14>
                        <li>Доступ ко всем подкастам</li>
                        <li>Доступ к курсам от Мотуса</li>
                        <li>Доступ к вводным занятиям всех уроков</li>
                    </Text14>
                </TextField14>
            </Pink14>
            <Pink15>
                <TextField15>
                    <Text15>
                        <li>Доступ ко всем подкастам</li>
                        <li>Доступ к курсам от Мотуса</li>
                        <li>Доступ к вводным занятиям всех уроков</li>
                    </Text15>
                </TextField15>
            </Pink15>
            <SubscribeButton>
                Оформить
            </SubscribeButton>
        </SubscriptionContainer>
    );
};
export default Subscription;