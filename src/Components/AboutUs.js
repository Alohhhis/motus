import React from "react";
import {
    AboutUsContainer,
    PicBlock2,
    TitleContainer,
    TitleText,
    Pic2,
    Pink2,
    Pink3,
    TextField3,
    Text3, PicPink, PicBlock3, Pic3
} from "./AboutUsStyles";
import Picture2 from "../Assets/Picture2.png";
import Picture3 from "../Assets/Picture3.svg";

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <Pink2>
                <TitleContainer>
                    <TitleText>
                        О чем мы?
                    </TitleText>
                </TitleContainer>
            </Pink2>
            <PicBlock2>
                <Pic2 src={Picture2} alt={""}/>
            </PicBlock2>
            <Pink3>
                <TextField3>
                    <Text3>
                        Онлайн-пространство для комьюнити развивающихся и целеустремленных людей.<br></br>
                        Мы про открытые двери и возможности, которые становятся все ближе благодаря знаниям и умениям.
                    </Text3>
                </TextField3>
            </Pink3>
            <PicPink>
                <PicBlock3>
                    <Pic3 src={Picture3} alt={""}/>
                </PicBlock3>
            </PicPink>
        </AboutUsContainer>

    );
};
export default AboutUs;