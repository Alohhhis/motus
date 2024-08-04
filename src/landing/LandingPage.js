import React from 'react';
import {
    Container,
    Background,
    BackgroundImage3,
    BackgroundImage2,
    BackgroundImage1, NavbarDiv, DescriptionDiv, AboutUsDiv
} from "./LandingPageStyles";
import Navbar from "../Components/Navbar";
import {DescriptionContainer} from "../Components/DescriptionStyles";
import Description from "../Components/Description";
import AboutUs from "../Components/AboutUs";

const LandingPage = () => {
    return (
        <Container>
            <Background>
                <BackgroundImage1/>
                <BackgroundImage2/>
                <BackgroundImage3/>
            </Background>
            <NavbarDiv>
                <Navbar/>
            </NavbarDiv>
            <DescriptionDiv>
                <Description/>
            </DescriptionDiv>
            <AboutUsDiv>
                <AboutUs/>
            </AboutUsDiv>
        </Container>
    );
};
export default LandingPage;