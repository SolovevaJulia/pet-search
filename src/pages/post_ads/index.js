import React, {useEffect, useState} from "react";

import Geo from "../post_ads/img/geo.png";
import "./post_ads.css";
import axios from "../../plugins/axiosConfig";

const PostAds = () => {
    const [announcementType, setAnnouncementType] = useState("");
    const [pet, setPet] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [descr, setDescr] = useState("");
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [file, setFile] = useState([])
    const [image, setImage] = useState(null)

    console.log(
        "announcementType",
        announcementType,
        "pet",
        pet,
        "street",
        street,
        "house",
        house,
        "descr",
        descr,
        "lat",
        lat,
        "long",
        long,
        "file",
        file
    );
    useEffect(  () => {
        axios.get('/api/feeds/get')
            .then(async (data) => {
                setImage(data.data.image[1])

            })
            .catch((error) => {
                console.log('error', error)
            })
    },[])
    console.log('image', image)
    const getGeoUser = () => {
        console.log("Я сработал");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
        } else {
            console.log("Ваш браузер не поддерживает сбор геолокации");
        }
    };

    const sendDataPostApi = (e) => {
        e.preventDefault();

        const formImages = new FormData()
        let config = {
            header: {'content-type': 'multypart/form-data'}
        }

        console.log('file', file)
        Object.values(file).forEach((item) => {
            formImages.append("name", item.name)
            formImages.append("file", item)

            console.log('item', item)
        })

        // const collectingObjectFormAds = {
        //     info: {
        //         announcementType: announcementType,
        //         pet: pet,
        //         street: street,
        //         house: house,
        //         descr: descr,
        //         image: image.files[0].name
        //     },
        //     geo: {
        //         lat: lat,
        //         long: long,
        //     },
        // };
        // console.log("Сбор данных");
        // // Отправляем данные с полей на бэкенд
        // axios
        //     .post("/api/feeds/create", collectingObjectFormAds)
        //     .then((data) => {
        //         console.log(data.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         console.log("Сработало");
        //     });
        //
        // Отправляем фото на бэкенд
        axios
            .post("/api/images/upload", formImages)
            .then((data) => {
                console.log(data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Сработало");
            });
    };




    return (
        <section className="add">
            <div className="container">
                <div>
                    <img src={image} alt="картинка"/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form
                            encType='multipart/form-data'
                            className="add-form"
                            onSubmit={(e) => sendDataPostApi(e)}
                        >
                            <h2 className="add-title">
                                Добавьте объявление о питомце
                            </h2>
                            <div className="d-flex">
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        onChange={(e) =>
                                            setAnnouncementType(e.target.value)
                                        }
                                    >
                                        <option>
                                            Тип объявления...
                                        </option>
                                        <option value="Пропал">Пропал</option>
                                        <option value="Найден">Найден</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        onChange={(e) => setPet(e.target.value)}
                                    >
                                        <option>Питомец...</option>
                                        <option value="Собака">Собака</option>
                                        <option value="Кошка">Кошка</option>
                                        <option value="Другой">Другой</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option>
                                            Когда пропал/найден...
                                        </option>
                                        <option value="1">Собака</option>
                                        <option value="2">Кошка</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <label
                                    className="input-group-text"
                                    htmlFor="file"

                                >
                                    Загрузить фотографию
                                </label>
                                <input
                                    encType="multipart/form-data"
                                    onChange={event => {
                                        const file = event.target.files;
                                        setFile(file)
                                    }}
                                    type="file"
                                    multiple
                                    accept=".jpg"
                                    className="form-control"
                                    id="file"
                                />
                            </div>
                            <div className="input-group add-place">
                                <span className="input-group-text">
                                    Место пропажи/находки
                                </span>
                                <input
                                    type="text"
                                    aria-label="Street"
                                    className="form-control"
                                    placeholder="Улица"
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <input
                                    type="text"
                                    aria-label="House"
                                    className="form-control"
                                    placeholder="Номер дома"
                                    onChange={(e) => setHouse(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Описание"
                                    onChange={(e) => setDescr(e.target.value)}
                                />
                            </div>
                            <div className="add-contacts">
                                <div>TODO Контакты</div>

                                <button
                                    className="btn-geo"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    type="button"
                                >
                                    Добавить геолокацию:
                                    <img alt="a" src={Geo} />
                                </button>
                            </div>
                            <button type="submit" className="btn btn-add">
                                Добавить запись
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                            >
                                Вы действительно хотите поделиться геолокацией?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        {/* <div class="modal-body">...</div> */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-no"
                                data-bs-dismiss="modal"
                            >
                                Закрыть
                            </button>
                            <button
                                data-bs-dismiss="modal"
                                type="button"
                                className="btn btn-yes"
                                onClick={getGeoUser}
                            >
                                Даю согласие
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostAds;
