import React, {useState} from "react";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import {
    LinksContainer,
    LogoContainer,
    LogoImg,
    MenuContainer,
    NavbarContainer,
    NavBlock,
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
        },
        {
            text: "Контент",
            icon: <HomeIcon/>,
        },
        {
            text: "Регистрация",
            icon: <InfoIcon/>,
        },
        {
            text: "Подписка",
            icon: <InfoIcon/>,
        }
    ];
    return (
        <NavbarContainer>
            <LogoContainer>
                <LogoImg src={Logo} alt="* motus — [mɔtys] (lat.) движение"/>
            </LogoContainer>
            <LinksContainer>
                <NavLinks href="">О чем мы</NavLinks>
                <NavLinks href="">Контент</NavLinks>
                <NavLinks href="">Регистрация</NavLinks>
                <NavLinks href="">Подписка</NavLinks>
            </LinksContainer>
            <MenuContainer>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </MenuContainer>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor={"right"}>
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                </Box>
            </Drawer>
        </NavbarContainer>
    );
};
export default Navbar;
