import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";

export default function CreateForm5(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="create-form5"

            heading="Create Your CV"
            subHeading="Experiences"
            imageURL="./src/Images/tyler-franta-iusJ25iYu1c-unsplash.jpg"

            buttons={
                <>
                    <button type="button" data-is-common onClick={_e => Navigate("/create4")}>Back</button>
                    <button type="button" onClick={_e => Navigate("/done")}>Submit</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <InputField name="experience1" type="text" />
            <InputField name="duration1" type="text" />
            <InputField name="duration3" type="text" optional />
            <InputField name="experience2" type="text" optional />
            <InputField name="duration2" type="text" optional />
            <InputField name="experience3" type="text" optional />
        </Form>
    );
}