import { Routes, Route } from "react-router-dom";

//Pages
import Feeds from "../pages/feeds/index";
//Тест разработка, удалить по завершению проекта!
import DevIlya from "../pages/dev_ilya";
//Тест разработка, удалить по завершению проекта!
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="feeds" element={ <Feeds /> } exact />
        {/*    Тест разработка, удалить по завершению проекта!*/}
            <Route path="dev_ilya" element={ <DevIlya /> } />
            {/*    Тест разработка, удалить по завершению проекта!*/}
        </Routes>
    );
};

export default MainRoutes;
