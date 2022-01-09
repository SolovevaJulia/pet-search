import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
//Тест разработка, удалить по завершению проекта!
import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!
import PostAds from "../pages/post_ads";
import Home from "../pages/home";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="feeds" element={<Feeds />} />
            {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="dev_ilya" element={<DevIlya />} />
            {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="post_ads" element={<PostAds />} />
        </Routes>
    );
};

export default MainRoutes;
