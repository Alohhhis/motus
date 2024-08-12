import React, {useState} from "react";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {
    LinksContainer,
    LogoContainer,
    LogoImg,
    NavbarContainer,
    NavLinks,

} from "./NavbarStyles";
import Logo from "../Assets/LogoPic.svg";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    const handleMenuClose = () => {
        setOpenMenu(false);
    };

    const menuOptions = [
        {
            text: "О чем мы",
            icon: <InfoIcon />,
            href: "#about",
        },
        {
            text: "Контент",
            icon: <HomeIcon />,
            href: "#content",
        },
        {
            text: "Регистрация",
            icon: <InfoIcon />,
            href: "#registration",
        },
        {
            text: "Подписка",
            icon: <InfoIcon />,
            href: "#subscription",
        }
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
        handleMenuClose();
    };

    return (
        <NavbarContainer>
            <LogoContainer>
                <LogoImg src={Logo} alt="* motus — [mɔtys] (lat.) движение" />
            </LogoContainer>
            <LinksContainer>
                {menuOptions.map((item, index) => (
                    <NavLinks key={index} href={item.href} onClick={(e) => handleScroll(e, item.href)}>
                        {item.text}
                    </NavLinks>
                ))}
            </LinksContainer>

            <Drawer anchor="right" open={openMenu} onClose={handleMenuClose}>
                <Box role="presentation" onClick={handleMenuClose} onKeyDown={handleMenuClose}>
                    <List>
                        {menuOptions.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={(e) => handleScroll(e, item.href)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </NavbarContainer>
    );
};

export default Navbar;
