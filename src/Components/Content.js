import React from "react";
import {
    ContentContainer,
    Pink5,
    Pink6,
    Pink7, Pink8, Pink9,
    Text5,
    Text6, Text7, Text8,
    Text9,
    TextField5,
    TextField6,
    TextField7, TextField8, TextField9
} from "./ContentStyles";

const Content = () => {
    return (
        <ContentContainer>
            <Pink5>
                <TextField5>
                    <Text5>
                        Какие <a style={{color: "#ff0074"}}> подкасты </a>ты у нас найдешь?
                    </Text5>
                </TextField5>
            </Pink5>
            <Pink6>
                <TextField6>
                    <Text6>
                        Образовательные курсы от университетов
                    </Text6>
                </TextField6>
            </Pink6>
            <Pink7>
                <TextField7>
                    <Text7>
                        Курсы от топовых экмпертов разных ниш
                    </Text7>
                </TextField7>
            </Pink7>
            <Pink8>
                <TextField8>
                    <Text8>
                        Контент для подготовки к экзаменам
                    </Text8>
                </TextField8>
            </Pink8>
            <Pink9>
                <TextField9>
                    <Text9>
                        Подкасты любимых блогеров
                    </Text9>
                </TextField9>
            </Pink9>
        </ContentContainer>


    );
};

export default Content;