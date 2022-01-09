import React, { useState } from "react";

import PetPhoto from "../cardItem/img/photo_2022-01-05_18-00-35.jpg";
// import PetPhoto2 from "../cardItem/img/pet2.jpg";
// import PetPhoto3 from "../cardItem/img/pet3.jpg";
// import FacebookIcon from "../cardItem/img/facebook.png";
import InstagramIcon from "../cardItem/img/instagram.png";
import TelegramIcon from "../cardItem/img/telegram.png";
import WhatsappIcon from "../cardItem/img/whatsapp.png";
import VkIcon from "../cardItem/img/vk.png";
import Call from "../cardItem/img/outgoing-call.png";
import "./cards.css";

const CardItem = () => {
    const [showDescr, setShowDescr] = useState(true);

    const showMap = () => {
        showDescr ? setShowDescr(false) : setShowDescr(true);
    };

    return (
        <div className="card-wrapper">
            {showDescr ? (
                <div className="card-slide">
                    <div className="card-top">
                        <div className="card-left">
                            <img alt='a' className="pet-img" src={PetPhoto} />
                        </div>
                        <div className="card-right">
                            <h2 className="card-title">Пропал кот</h2>
                            {/* <div className="tags">
                                <span className="card-tag-name">Теги:</span>
                                <button className="card-tag">кот</button>
                            </div> */}
                            <span className="lost-date">
                                Дата пропажи: 31.12.21
                            </span>
                            <span className="lost-date">Место пропажи: </span>
                        </div>
                    </div>
                    <p className="card-descr">
                        Описание: зеленые глаза, рыжий, полосатый, 5 кг. зеленые
                        глаза, рыжий, полосатый, 5 кг. зеленые глаза, рыжий,
                        полосатый, 5 кг. зеленые глаза, рыжий, полосатый, 5
                        кг.зеленые глаза, рыжий, полосатый, 5 кг
                    </p>
                </div>
            ) : (
                <div className="card-slide">
                    <p className="card-descr">TODO MAP</p>
                </div>
            )}

            <div className="card-bottom">
                <div className="card-buttons">
                    <div className="contacts">
                        {/*<a>*/}
                        {/*    <img src={FacebookIcon} />*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={InstagramIcon} />*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={InstagramIcon} />*/}
                        {/*</a >*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={TelegramIcon} />*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={WhatsappIcon} />*/}
                        {/*</a >*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={VkIcon} />*/}
                        {/*</a >*/}
                        {/*<a href="#">*/}
                        {/*    <img alt='a' src={Call} />*/}
                        {/*</a>*/}
                    </div>
                    <button onClick={showMap} className="card-map btn">
                        {showDescr ? "Карта" : "Описание"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
