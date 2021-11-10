import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './app/App';
import ClientInfoContainer from './components/clientInfo/ClientInfoContainer';
import ClientInput from "./components/clientInput/ClientInput";
import reportWebVitals from './reportWebVitals';
// Importing the CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="launch-widget" element={<ClientInput />} />
            <Route path="client-info" element={<ClientInfoContainer />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
