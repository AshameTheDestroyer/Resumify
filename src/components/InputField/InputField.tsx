import React, { HTMLInputTypeAttribute } from "react";

import { ChildlessComponentProps } from "../../types/ComponentProps";

import "./InputField.scss";

type InputFieldProps = ChildlessComponentProps & {
    name: string;
    label?: string;
    optional?: boolean;
    Icon?: React.ReactElement;
    type: HTMLInputTypeAttribute;
    dontShowRequirement?: boolean;
};

export default function InputField(props: InputFieldProps): React.ReactElement {
    return (
        <div
            id={`${props.id}-input-field`}
            className={[
                "input-field",
                props.type == "checkbox" && "checkbox-input-field",
                props.Icon != null && "icon-input-field",
                props.className,
            ].toClassName()}
        >
            {props.Icon}
            <input id={`${props.id ?? props.name}-input`} name={props.name} type={props.type} placeholder=" " required={!props.optional} />
            <label htmlFor={`${props.id}-input`} data-dont-show-requirement={props.dontShowRequirement}>{props.label ?? props.name.toTitleCase()}</label>
        </div>
    );
}