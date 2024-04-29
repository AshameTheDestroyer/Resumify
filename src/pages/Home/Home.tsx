import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../../components/Page/Page";

import "./Home.scss";

export default function Home(): React.ReactElement {
    return (
        <Page id="home-page">
            <Outlet />
        </Page>
    );
}