import React, { useState } from "react";
import {
    FormDiv,
    Password,
    Pic5,
    Pic5Div,
    Pink10,
    Pink11,
    Pink12,
    PoliticsCheck,
    PoliticsDiv,
    PoliticsText,
    RegButton,
    RegForm,
    RegistrationContainer,
    Text10,
    TextField10,
    Username,
    // Email,
    Label,
} from "./RegistrationStyles";
import Picture5 from "../Assets/Picture5.png";

const Registration = () => {
    const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [focused, setFocused] = useState({
        username: false,
        // email: false,
        password: false,
    });
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleUsernameChange = (e) => setUsername(e.target.value);
    // const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAgreedChange = (e) => setAgreed(e.target.checked);

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        setFocused({ ...focused, [field]: false });
    };

    // const validateEmail = (email) => {
    //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return re.test(String(email).toLowerCase());
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let newErrors = { username: "", email: "", password: "" };

        if (username === "") {
            valid = false;
            newErrors.username = "Username is required.";
        }
        // if (email === "" || !validateEmail(email)) {
        //     valid = false;
        //     newErrors.email = "A valid email is required.";
        // }
        if (password === "" || password.length < 6) {
            valid = false;
            newErrors.password = "Password must be at least 6 characters.";
        }
        if (!agreed) {
            valid = false;
            alert("You must agree to the processing of personal data.");
        }

        setErrors(newErrors);

        if (valid) {
            alert(`Username: ${username}, Password: ${password}`);
        }
    };

    return (
        <RegistrationContainer>
            <Pic5Div>
                <Pic5 src={Picture5} alt="" />
            </Pic5Div>
            <Pink10>
                <TextField10>
                    <Text10>
                        Хочешь с нами?
                        <br />
                        Регистрируйся!
                    </Text10>
                </TextField10>
            </Pink10>
            <FormDiv>
                <RegForm onSubmit={handleSubmit}>
                    <Pink11 focused={focused.username}>
                        <Label focused={focused.username} value={username}>
                            Username
                        </Label>
                        <Username
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            onFocus={() => handleFocus("username")}
                            onBlur={() => handleBlur("username")}
                        />
                        {errors.username && <span>{errors.username}</span>}
                    </Pink11>
                    {/*<Pink11 focused={focused.email}>*/}
                    {/*    <Label focused={focused.email} value={email}>*/}
                    {/*        Email*/}
                    {/*    </Label>*/}
                    {/*    <Email*/}
                    {/*        type="email"*/}
                    {/*        value={email}*/}
                    {/*        onChange={handleEmailChange}*/}
                    {/*        onFocus={() => handleFocus("email")}*/}
                    {/*        onBlur={() => handleBlur("email")}*/}
                    {/*    />*/}
                    {/*    {errors.email && <span>{errors.email}</span>}*/}
                    {/*</Pink11>*/}
                    <Pink12 focused={focused.password}>
                        <Label focused={focused.password} value={password}>
                            Password
                        </Label>
                        <Password
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            onFocus={() => handleFocus("password")}
                            onBlur={() => handleBlur("password")}
                        />
                        {errors.password && <span>{errors.password}</span>}
                    </Pink12>
                    <PoliticsDiv>
                        <PoliticsCheck
                            type="checkbox"
                            checked={agreed}
                            onChange={handleAgreedChange}
                        />
                        <PoliticsText>
                            Согласен на обработку персональных данных
                        </PoliticsText>
                    </PoliticsDiv>
                    <RegButton type="submit">Зарегистрироваться</RegButton>
                </RegForm>
            </FormDiv>
        </RegistrationContainer>
    );
};

export default Registration;
