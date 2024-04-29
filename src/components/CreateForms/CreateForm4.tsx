import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";

export default function CreateForm4(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="create-form4"

            heading="Create Your CV"
            subHeading="Skills"
            imageURL="./src/Images/microsoft-edge-6CNB3iD8M4E-unsplash.jpg"

            buttons={
                <>
                    <button type="button" data-is-common onClick={_e => Navigate("/create3")}>Back</button>
                    <button type="button" onClick={_e => Navigate("/create5")}>Next</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <InputField name="skill1" type="text" />
            <InputField name="skill2" type="text" optional />
            <InputField name="skill3" type="text" optional />
            <InputField name="skill4" type="text" optional />
            <InputField name="skill5" type="text" optional />
            <InputField name="skill6" type="text" optional />
        </Form>
    );
}