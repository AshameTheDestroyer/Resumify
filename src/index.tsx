import { createContext } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import "./constants/Extensions.ts";

import Store from "./Store.ts";
import Home from "./pages/Home/Home";
import SignUpForm from "./components/SignUpForm/SignUpForm.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import CreateForm1 from "./components/CreateForms/CreateForm1.tsx";
import CreateForm2 from "./components/CreateForms/CreateForm2.tsx";
import CreateForm3 from "./components/CreateForms/CreateForm3.tsx";
import CreateForm4 from "./components/CreateForms/CreateForm4.tsx";
import CreateForm5 from "./components/CreateForms/CreateForm5.tsx";
import CreateDone from "./components/CreateForms/CreateDone.tsx";

type MainStateProps = {};
export const MainContext = createContext<MainStateProps | null>(null);

ReactDOM.createRoot(document.querySelector("#root") ?? document.body).render(
    <Provider store={Store}>
        <HashRouter basename={window.location.pathname || ""}>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<SignUpForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/create1" element={<CreateForm1 />} />
                    <Route path="/create2" element={<CreateForm2 />} />
                    <Route path="/create3" element={<CreateForm3 />} />
                    <Route path="/create4" element={<CreateForm4 />} />
                    <Route path="/create5" element={<CreateForm5 />} />
                    <Route path="/done" element={<CreateDone />} />
                </Route>
            </Routes>
        </HashRouter>
    </Provider>
);