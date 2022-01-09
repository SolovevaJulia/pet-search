import Geo from "../post_ads/img/geo.png";
import "./post_ads.css";

const PostAds = () => {
    return (
        <section className="add">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form className="add-form">
                            <h2 className="add-title">
                                Добавьте объявление о питомце
                            </h2>
                            <div className="d-flex">
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>
                                            Тип объявления...
                                        </option>
                                        <option value="1">Пропал</option>
                                        <option value="2">Найден</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>Питомец...</option>
                                        <option value="1">Собака</option>
                                        <option value="2">Кошка</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>
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
                                    htmlFor="inputGroupFile02"
                                >
                                    Загрузить фотографию
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile02"
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
                                />
                                <input
                                    type="text"
                                    aria-label="House"
                                    className="form-control"
                                    placeholder="Номер дома"
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                className="form-control"
                                placeholder="Описание"
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
                            <button type="button" className="btn btn-add">
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
                            <button type="button" className="btn btn-yes">
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
