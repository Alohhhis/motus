import React from 'react';
import {
    Container,
    Background,
    BackgroundImage3,
    BackgroundImage2,
    BackgroundImage1, NavbarDiv, DescriptionDiv, AboutUsDiv, Pictures4Div, PicBlock, ContentDiv, RegistrationDiv
} from "./LandingPageStyles";
import Navbar from "../Components/Navbar";
import {DescriptionContainer} from "../Components/DescriptionStyles";
import Description from "../Components/Description";
import AboutUs from "../Components/AboutUs";
import Picture from "../Assets/Picture4.png";
import Content from "../Components/Content";
import Registration from "../Components/Registration";

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
            <Pictures4Div>
                <PicBlock src={Picture} alt={''}/>
            </Pictures4Div>
            <ContentDiv>
                <Content/>
            </ContentDiv>
            <RegistrationDiv>
                <Registration/>
            </RegistrationDiv>
        </Container>

    );
};
export default LandingPage;