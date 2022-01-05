import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="feeds" element={<Feeds />} exact />
        </Routes>
    );
};

export default MainRoutes;
