import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './app/App';
import ClientInfoContainer from './components/clientInfo/ClientInfoContainer';
import ClientInput from "./components/clientInput/ClientInput";
import reportWebVitals from './reportWebVitals';
// Importing the CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ActionContainer} from "./components/chooseAction/ActionContainer";

const rootElement = document.getElementById("root");
// Serves the different pages depending on the path specified
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<ActionContainer/>} />
                <Route path="launch-widget" element={<ClientInput launchWidget={true} />} />
                <Route path="client-info" element={<ClientInput launchWidget={false} />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>This page does not exist. Please go back to the home page and try again.</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
