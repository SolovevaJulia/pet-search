import "./reg.css";

const Reg = () => {
    return (
        <section className="reg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form>
                            <h1 className="reg-title">Регистрация</h1>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Имя
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Логин
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Город
                                </label>
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>Выбрать город</option>
                                    <option value="1">Москва</option>
                                    <option value="2">Санкт-Петербург</option>
                                    <option value="3">Казань</option>
                                </select>
                            </div>
                            {/* <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Контакты
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div> */}
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                {/* <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div> */}
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputPassword1"
                                    class="form-label"
                                >
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                />
                                <div id="passwordHelpBlock" class="form-text">
                                    Ваш пароль должен состоять из 8-20 символов,
                                    включать в себя цифры и буквы и не включать
                                    пробелы, специальные символы или эмодзи.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputPassword1"
                                    class="form-label"
                                >
                                    Повторите пароль
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            {/* <div class="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label
                                    class="form-check-label"
                                    for="exampleCheck1"
                                >
                                    Check me out
                                </label>
                            </div> */}
                            <button type="submit" class="btn btn-reg">
                                Регистрация
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reg;
