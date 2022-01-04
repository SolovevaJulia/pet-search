import Logo from "../header/img/dog-logo.png";
import "./header.css";
import AddPost from "../add-post/add-post";

const Header = () => {
    return (
        <div className="container">
            <div className="row pt-3 pb-3 align-items-center justify-content-between">
                <div className="col-4 d-flex align-items-center">
                    <img className="logo-img" src={Logo} />
                    <p className="logo-text mb-0">PetSearch</p>
                </div>
                <div className="col-4 d-flex  justify-content-end">
                    <AddPost />
                </div>
            </div>
        </div>
    );
};

export default Header;
