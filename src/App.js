import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// css стили
import Header from "./components/header/header";
import "./index.css";
import MainRoutes from "./routers/index";

function App() {
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
