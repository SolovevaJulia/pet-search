import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// css стили
import Header from "./components/header/header";
import "./index.css";
import MainRoutes from "./routers/index";
import LocalServiceWorkerRegister from './sw-register';
LocalServiceWorkerRegister();


function App() {
    console.log("process.env.", process.env.REACT_APP_URL_API)
    return (
        <section className="App">
            <Header />
            <Router>
                <MainRoutes />
            </Router>
        </section>
    );
}

export default App;
