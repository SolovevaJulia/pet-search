import Logo from "../header/img/dog-logo.png";
import "./header.css";
import AddPost from "../buttons/add-post/add-post";
import BtnEnter from "../buttons/enter/btn-enter"

const Header = () => {
    return (
        <div className="container">
            <div className=" row pt-3 pb-3 align-items-center justify-content-between">
                <div className="right-row col-xl-6 col-lg-6 col-md-6 col-sm-4 col-12 d-flex align-items-center">
                    <img alt='a' className="logo-img" src={Logo} />
                    <p className="logo-text mb-0">PetSearch</p>
                </div>
                <div className="left-row col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 d-flex  justify-content-end">
                    <AddPost />
                    <BtnEnter/>
                </div>
            </div>
        </div>
    );
};

export default Header;
