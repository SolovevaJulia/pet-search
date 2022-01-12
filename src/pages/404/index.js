import "./404.css";

const PageNotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">Страница не найдена</h3>

                                <p>вы можете вернуться на главную страницу</p>

                                <button className="btn btn-home">
                                    На главную страницу
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;
