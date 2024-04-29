import React from "react";

import "./Form.scss";
import { ComponentProps } from "../types/ComponentProps";

type FormProps = ComponentProps & {
    heading: string;
    imageURL: string;
    subHeading: string;
    footer: React.ReactNode;
    buttons: React.ReactNode;
};

export default function Form(props: FormProps): React.ReactElement {
    return (
        <form id={`${props.id}-form`} className={props.className}>
            <figure>
                <img src={props.imageURL} alt="" />
            </figure>
            <main>
                <header>
                    <h1>{props.heading}</h1>
                    <p>{props.subHeading}</p>
                </header>
                <section className="input-field-displayer">{props.children}</section>
                <section className="button-displayer">{props.buttons}</section>
                <footer>{props.footer}</footer>
            </main>
        </form>
    );
}