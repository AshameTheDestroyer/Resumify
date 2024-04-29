import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import InputField from "../InputField/InputField";

export default function CreateForm3(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="create-form3"

            heading="Create Your CV"
            subHeading="Education"
            imageURL="./src/Images/microsoft-365-TLiWhlDEJwA-unsplash.jpg"

            buttons={
                <>
                    <button type="button" data-is-common onClick={_e => Navigate("/create2")}>Back</button>
                    <button type="button" onClick={_e => Navigate("/create4")}>Next</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <InputField name="certificate1" type="text" />
            <InputField name="grade1" type="number" />
            <InputField name="certificate2" type="text" optional />
            <InputField name="grade2" type="number" optional />
            <InputField name="certificate3" type="text" optional />
            <InputField name="grade3" type="number" optional />
        </Form>
    );
}