/* eslint-disable jsx-a11y/alt-text */
import Logo from "../header/img/dog-logo.png";
import "./header.css";

const Header = () => {
    return (
        <div class="container">
            <div class="row pt-3 pb-3 align-items-center justify-content-between">
                <div class="col-4 d-flex align-items-center">
                    <img class="logo-img" src={Logo} />
                    <p class="logo-text mb-0">PetSearch</p>
                </div>
                <div class="col-4 d-flex  justify-content-end">
                    <button type="button" class="btn btn-logo">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
