import "./auth.css";

const Auth = () => {
    return (
        <section className="auth">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form>
                            <h1 className="auth-title">Войти</h1>
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
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
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
                            <button type="submit" class="btn btn-auth">
                                Вход
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;
