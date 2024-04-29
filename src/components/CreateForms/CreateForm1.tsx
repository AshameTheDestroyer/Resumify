import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";

export default function CreateForm1(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="create-form1"

            heading="Create Your CV"
            subHeading="Personal Information"
            imageURL="./src/Images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg"

            buttons={
                <>
                    <button type="button" onClick={_e => Navigate("/create2")}>Next</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <InputField name="first-name" type="text" />
            <InputField name="last-name" type="text" />
            <InputField name="job-title" type="text" />
            <InputField name="address" type="text" />
        </Form>
    );
}