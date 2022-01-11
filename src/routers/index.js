import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
//Тест разработка, удалить по завершению проекта!
import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!
import PostAds from "../pages/post_ads";
import Home from "../pages/home";
import Auth from "../pages/auth";
import Reg from "../pages/reg";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="pet-search/" element={<Home />}></Route>
            <Route path="pet-search/feeds" element={<Feeds />} />
            {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="pet-search/dev_ilya" element={<DevIlya />} />
            {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="pet-search/post_ads" element={<PostAds />} />
            <Route path="pet-search/auth" element={<Auth />} />
            <Route path="pet-search/reg" element={<Reg />} />
        </Routes>
    );
};

export default MainRoutes;
