import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// css стили
import Header from "./components/header/header";
import "./index.css";
import MainRouter from "./routers/index";

import LocalServiceWorkerRegister from './sw-register';
LocalServiceWorkerRegister();


function App() {
    console.log("process.env.", process.env.REACT_APP_URL_API)
    return (
        <section className="App">
            <Header />
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </section>
    );
}

export default App;
