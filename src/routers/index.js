import { Routes, Route, Navigate } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
//Тест разработка, удалить по завершению проекта!
import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!
import PostAds from "../pages/post_ads";
import Home from "../pages/home";
import Auth from "../pages/auth";
import Reg from "../pages/reg";
import PageNotFound from "../pages/404";
import Profile from "../pages/profile";

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
            <Route path="*" element={<PageNotFound />} />
            <Route path="pet-search/profile" element={<Profile />} />
        </Routes>
    );
};

export default MainRoutes;
