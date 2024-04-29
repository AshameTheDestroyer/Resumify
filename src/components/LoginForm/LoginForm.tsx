import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import IconButton from "../IconButton/IconButton";
import InputField from "../InputField/InputField";

import "./LoginForm.scss";
import { AppleIcon } from "../Icons/AppleIcon";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";

export default function LoginForm(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="login-up"

            heading="Login"
            subHeading="Hop in into your account"
            imageURL="./src/Images/kevin-matos-Nl_FMFpXo2g-unsplash.jpg"

            buttons={
                <>
                    <button type="button" onClick={_e => Navigate("/create1")}>Sing into Your Account</button>
                </>
            }

            footer={
                <>
                    <p>Forgot password? <strong><a href="">Click here</a></strong></p>
                    <p>Doesn't have an account? <strong><a href="">Sign up</a></strong></p>
                    <p className="break">or continue with</p>
                    <section className="icon-button-displayer">
                        <IconButton icon={<GoogleIcon />} />
                        <IconButton icon={<FacebookIcon />} />
                        <IconButton icon={<AppleIcon />} />
                        <IconButton icon={<TwitterIcon />} />
                    </section>
                </>
            }
        >
            <InputField name="email" type="email" />
            <InputField name="password" type="password" />
        </Form>
    );
}