import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";
import IconButton from "../IconButton/IconButton";

import "./SignUpForm.scss";
import { AppleIcon } from "../Icons/AppleIcon";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";

export default function SignUpForm(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="sign-up"

            heading="Sign Up"
            subHeading="Create your account"
            imageURL="./src/Images/muhammad-faiz-zulkeflee-alw-CwGFmwQ-unsplash.jpg"

            buttons={
                <>
                    <button type="button" onClick={_e => Navigate("/create1")}>Create an Account</button>
                </>
            }

            footer={
                <>
                    <p>Already a member? <strong><Link to="/login">Login</Link></strong></p>
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
            <InputField name="name" type="text" />
            <InputField name="email" type="email" />
            <InputField name="password" type="password" />
            <InputField name="privacy-policy" type="checkbox" label="I agree to the Terms of Service and Privacy Policy" dontShowRequirement />
        </Form>
    );
};