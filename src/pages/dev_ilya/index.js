import React, { useState } from 'react'
import './dev_ilya.css'
import Geo from "../post_ads/img/geo.png";

import axios from '../../plugins/axiosConfig'


const DevIlya = () => {

    const [typeAds, setTypeAds] = useState('')
    const [typePet, setTypePet] = useState('')
    const [street, setStreet] = useState('')
    const [numberHouse, setNumberHouse] = useState('')
    const [description, setDescription] = useState('')
    const [contact, setContact] = useState('')
    const [geo, setGeo] = useState({lat: '', lon: ''})


    const getLocationUser = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setGeo({
                    lat: position.coords.latitude,
                    lon:  position.coords.longitude
                })

            });
        }
        else {
            return  console.log('Ваш браузер не поддерживает возможность делится геолокацией.');
        }
    }

    const setFormsFields = (e) => {
        e.preventDefault();
        const objectForm = {
            geo: {
                lan: geo.lat,
                lon: geo.lon
            },
            info: {
                title: `${typeAds} ${typePet}`,
                description: description,
                lost_place: `${street} ${numberHouse}`,
                contact: contact
            },

        }
        axios.post('/api/feeds/create', objectForm)
            .then(res => console.log(res))
            .catch((error) => console.log(error))
    }


    return(
        <section className="add">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form className="add-form" onSubmit={(e) => setFormsFields(e)}>
                            <h2 className="add-title">
                                Добавьте объявление о питомце
                            </h2>
                            <div className="d-flex">
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        onChange={(e) => setTypeAds(e.target.value)}
                                    >
                                        <option selected>
                                            Тип объявления...
                                        </option>
                                        <option value='Пропал'>Пропал</option>
                                        <option value='Найден'>Найден</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        onChange={(e) => setTypePet(e.target.value)}
                                    >
                                        <option selected>Питомец...</option>
                                        <option value="Собака">Собака</option>
                                        <option value="Кошка">Кошка</option>
                                    </select>
                                </div>
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
                                    onChange={(e) => setNumberHouse(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Описание"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="add-contacts">
                                <input
                                    type="text"
                                    placeholder='Ссылка на контакт'
                                    style={{width: '70%'}}
                                    onChange={(e) => setContact(e.target.value)}
                                />

                                <button
                                    className="btn-geo"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    type="button"
                                >
                                    Добавить геолокацию:
                                    <img src={Geo}/>
                                </button>
                            </div>
                            <button type='submit' className="btn btn-add">
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
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Вы действительно хотите поделиться геолокацией?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
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
                                type="button"
                                className="btn btn-yes"
                                onClick={getLocationUser}
                                data-bs-dismiss="modal"
                            >
                                Даю согласие
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DevIlya
