import React from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../Form/Form";
import { CheckedIcon } from "../Icons/CheckedIcon";

import "./CreateDone.scss";

export default function CreateDone(): React.ReactElement {
    const Navigate = useNavigate();

    return (
        <Form
            id="done-form"

            heading="Finished!"
            subHeading="You completed your CV"
            imageURL="./src/Images/krakenimages-376KN_ISplE-unsplash.jpg"

            buttons={
                <>
                    <button type="button" onClick={_e => Navigate("/")}>Submit</button>
                </>
            }

            footer={
                <>
                </>
            }
        >
            <CheckedIcon />
        </Form>
    );
}