import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h2>Страница в разработке</h2>
            <Link to="feeds" className="btn btn-success block">
                Перейти на страницу записей
            </Link>
        </div>
    );
};

export default Home;
