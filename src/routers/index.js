import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
import PostAds from "../pages/post_ads";
import Home from "../pages/home";


//Тест разработка, удалить по завершению проекта!
import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="pet-search/" element={<Home />}/>
            <Route path="pet-search/feeds" element={<Feeds />} />
            <Route path="pet-search/post_ads" element={<PostAds />} />

            {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="pet-search/dev_ilya" element={<DevIlya />} />
            {/*    Тест разработка, удалить по завершению проекта!*/}
        </Routes>
    );
};

export default MainRoutes;
