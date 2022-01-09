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
                                <div class="input-group mb-3">
                                    <select
                                        class="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>
                                            Тип объявления...
                                        </option>
                                        <option value="1">Пропал</option>
                                        <option value="2">Найден</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <select
                                        class="form-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>Питомец...</option>
                                        <option value="1">Собака</option>
                                        <option value="2">Кошка</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <select
                                        class="form-select"
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
                            <div class="input-group mb-3">
                                <input
                                    type="file"
                                    class="form-control"
                                    id="inputGroupFile02"
                                />
                                <label
                                    class="input-group-text"
                                    for="inputGroupFile02"
                                >
                                    Загрузить фотографию
                                </label>
                            </div>
                            <div class="input-group add-place">
                                <span class="input-group-text">
                                    Место пропажи/находки
                                </span>
                                <input
                                    type="text"
                                    aria-label="Street"
                                    class="form-control"
                                    placeholder="Улица"
                                />
                                <input
                                    type="text"
                                    aria-label="House"
                                    class="form-control"
                                    placeholder="Номер дома"
                                />
                            </div>
                            <div class="input-group">
                                <textarea
                                    class="form-control"
                                    placeholder="Описание"
                                ></textarea>
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
                                    <img src={Geo} />
                                </button>
                            </div>
                            <button type="button" class="btn btn-add">
                                Добавить запись
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Вы действительно хотите поделиться геолокацией?
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        {/* <div class="modal-body">...</div> */}
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-no"
                                data-bs-dismiss="modal"
                            >
                                Закрыть
                            </button>
                            <button type="button" class="btn btn-yes">
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
