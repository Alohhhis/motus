import React from "react";
import {DescriptionContainer, Pic1, PicBlock1, Pink1, Text1, TextField1} from "./DescriptionStyles";
import Picture1 from "../Assets/Picture1.png";

const Description = () => {
    return (
        <DescriptionContainer>
            <PicBlock1>
                <Pic1 src={Picture1} alt={"Картинка"}/>
            </PicBlock1>
            <Pink1>
                <TextField1>
                    <Text1>
                        Современная площадка для саморазвития, где вы найдете обучающие подкасты, бусплатные
                        образовательные курсы,<br></br> а также сможете делиться своими успехами, начав записывать короткие
                        подкасты для своей ауитории.
                    </Text1>
                </TextField1>
            </Pink1>
        </DescriptionContainer>
    );
};
export default Description;