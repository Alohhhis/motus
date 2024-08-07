import React from "react";
import {
    Box,
    FooterContainer,
    Column,
    FooterLink,
    LogoColumn,
    LogoPicture,
    Contacts,
    Politics,
    HeaderNavListItem,
    HeaderNavList,
    SimpText,
    FirstLine
} from "./FooterStyles";
import Logo from "../Assets/LogoPic.svg";


const Footer = () => {
    return (
        <Box>
            <FooterContainer>
                <LogoColumn>
                    <LogoPicture src={Logo} alt="* motus — [mɔtys] (lat.) движение"/>
                </LogoColumn>
                <Contacts>
                    <Column>
                        <FirstLine>
                            <SimpText>ООО "Мотус"</SimpText>
                        </FirstLine>
                        <FooterLink href="tel:+79006478365">
                            +7 (900) 647-83-65
                        </FooterLink>
                        <FooterLink href="mailto:motus@yandex.ru">
                            motus@yandex.ru
                        </FooterLink>
                        <FooterLink href="#">
                            Telegram
                        </FooterLink>
                    </Column>
                </Contacts>
                <Politics>
                    <Column>
                        <FirstLine>
                            <HeaderNavList>
                                <HeaderNavListItem>
                                    <FooterLink href="#">
                                        О чем мы
                                    </FooterLink>
                                </HeaderNavListItem>
                                <HeaderNavListItem>
                                    <FooterLink href="#">
                                        Подкасты
                                    </FooterLink>
                                </HeaderNavListItem>

                                <HeaderNavListItem>
                                    <FooterLink href="#">
                                        Регистрация
                                    </FooterLink>
                                </HeaderNavListItem>

                                <HeaderNavListItem>
                                    <FooterLink href="#">
                                        Подписка
                                    </FooterLink>
                                </HeaderNavListItem>

                            </HeaderNavList>
                        </FirstLine>
                        <FooterLink href="#">
                            Политика обработки персональных данных
                        </FooterLink>
                        <FooterLink href="#">
                            Публичная оферта
                        </FooterLink>
                        <SimpText>
                            Дизайн разработан Юрзиной Стефанией, 2024
                        </SimpText>
                    </Column>
                </Politics>
            </FooterContainer>
        </Box>
    );
};

export default Footer;
