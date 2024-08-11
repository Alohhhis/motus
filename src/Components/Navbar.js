import React, {useState} from "react";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import {
    LinksContainer,
    LogoContainer,
    LogoImg,
    MenuContainer,
    NavbarContainer,
    NavLinks
} from "./NavbarStyles";
import Logo from "../Assets/LogoPic.svg";
import {HiOutlineBars3} from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "О чем мы",
            icon: <InfoIcon/>,
            href: "#about",
        },
        {
            text: "Контент",
            icon: <HomeIcon/>,
            href: "#content",
        },
        {
            text: "Регистрация",
            icon: <InfoIcon/>,
            href: "#registration",
        },
        {
            text: "Подписка",
            icon: <InfoIcon/>,
            href: "#subscription",
        }
    ];

    return (
        <NavbarContainer>
            <LogoContainer>
                <LogoImg src={Logo} alt="* motus — [mɔtys] (lat.) движение"/>
            </LogoContainer>
            <LinksContainer>
                <NavLinks href="#about">О чем мы</NavLinks>
                <NavLinks href="#content">Контент</NavLinks>
                <NavLinks href="#registration">Регистрация</NavLinks>
                <NavLinks href="#subscription">Подписка</NavLinks>
            </LinksContainer>
        </NavbarContainer>
    );
};
export default Navbar;
