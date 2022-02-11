import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// css стили
import "./index.css";
//Components
import Header from "./components/header/header";
import MainRouter from "./routers/index";

// import LocalServiceWorkerRegister from '../src/sw-register';
// LocalServiceWorkerRegister();

function App() {
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
