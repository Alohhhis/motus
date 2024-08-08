import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: grid;
    align-items: center;
    padding: 1rem;
`;

export const LogoContainer = styled.div`
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
`;

export const LogoImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const LinksContainer = styled.div`
    grid-column: 3 / 6;
    margin-right: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavLinks = styled.a`
    margin-left: 4rem;
    text-decoration: none;
    color: black;
    //font-size: 1.1rem;
    font-weight: 600;
    font-size: 28px;


    &:hover {
        color: #F02D84;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const MenuContainer = styled.div`
    display: none; // Скрыть меню иконку на десктопе

    @media (max-width: 1000px) {
        display: block; // Показать меню иконку на мобильных устройствах
    }
`;

export const NavBlock = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 90px;
`;
