import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";

import { GitHubIcon } from "../Icons/GitHubIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { LinkedInIcon } from "../Icons/LinkedInIcon";

export default function CreateForm2(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="create-form2"

            heading="Create Your CV"
            subHeading="Social Media Links"
            imageURL="./src/Images/microsoft-365-bWL-c09Ys80-unsplash.jpg"

            buttons={
                <>
                    <button type="button" data-is-common onClick={_e => Navigate("/create1")}>Back</button>
                    <button type="button" onClick={_e => Navigate("/create3")}>Next</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <InputField name="github" type="url" Icon={<GitHubIcon />} />
            <InputField name="linked-in" type="url" Icon={<LinkedInIcon />} />
            <InputField name="facebook" type="url" optional Icon={<FacebookIcon />} />
            <InputField name="twitter" type="url" optional Icon={<TwitterIcon />} />
        </Form>
    );
}