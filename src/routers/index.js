import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
//Тест разработка, удалить по завершению проекта!
// import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!
import PostAds from "../pages/post_ads";
import Home from "../pages/home";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="pet-search" element={<Home />} exact/>
            <Route path="pet-search/feeds" element={<Feeds />} />
            {/*<Route path="pet-search/dev_ilya" element={<DevIlya />} />*/}
            <Route path="pet-search/post_ads" element={<PostAds />} />
        </Routes>
    );
};

export default MainRouter;
