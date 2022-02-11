import "./reg.css";
import React, { useState, useEffect } from "react";
import { setDataFromInputs } from '../../helpers/miniValidateForm'

const Reg = () => {

    const [valueRegForm] = useState({
        login: '',
        email: '',
        selectCity: '',
        passwordMain: '',
        passwordRepeat: ''
    })

    const [formReg, setFormReg] = useState({})

    const inizilizationForm = () => {
        let formReq = new setDataFromInputs({
            form: 'form-reg',
            tagName: 'field',
            disableBtn: true,
            formFields: valueRegForm,
            validateFields: {
                email: {
                    required: true,
                    type: 'email',
                    inputForErrorText: 'email-input',
                    text: '* Введите корректный e-mail.'
                },
                selectCity: {
                    required: true,
                    inputForErrorText: 'select-city-input',
                    text: '* Поле город обязательное для заполнения.'
                },
                passwordMain: {
                    required: true,
                    inputForErrorText: 'password-input',
                    text: '* Поле пароль обязательное для заполнения.',
                    checkLength: {
                        min: 6,
                        textLength: 'Пароль должен быть не меньше 6 символов.'
                    }
                }
            }
        })
        setFormReg(formReq)
    }

    const handlerFormReg = () => {
        console.log('formReq.getListForm', formReg.getListForm)
    }

    useEffect(() => {
        inizilizationForm()
    }, [])

    return (
        <section className="reg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form className="form-reg">
                            <h1 className="reg-title">Регистрация</h1>
                            {/* <div class="mb-3">
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
                            </div> */}
                            <div className="mb-3 form-reg">
                                <label
                                    htmlFor="login"
                                    className="form-label"
                                >
                                    Логин
                                </label>
                                <input
                                    field="login"
                                    type="text"
                                    className="form-control"
                                    id="login"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3 form-reg select-city-input">
                                <label
                                    htmlFor="city"
                                    className="form-label"
                                >
                                    Город
                                </label>
                                <select
                                    field="selectCity"
                                    id="city"
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option defaultValue>Выбрать город</option>
                                    <option value="Москва">Москва</option>
                                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                                    <option value="Казань">Казань</option>
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
                            <div className="mb-3 form-reg email-input">
                                <label
                                    htmlFor="Email"
                                    className="form-label"
                                >
                                    E-mail
                                </label>
                                <input
                                    field="email"
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                {/* <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div> */}
                            </div>
                            <div className="mb-3 form-reg password-input">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Пароль
                                </label>
                                <input
                                    field="passwordMain"
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                                {/*<div id="passwordHelpBlock" class="form-text">*/}
                                {/*    Ваш пароль должен состоять из 8-20 символов,*/}
                                {/*    включать в себя цифры и буквы и не включать*/}
                                {/*    пробелы, специальные символы или эмодзи.*/}
                                {/*</div>*/}
                            </div>
                            <div className="mb-3 form-reg">
                                <label
                                    htmlFor="passwordTwo"
                                    className="form-label"
                                >
                                    Повторите пароль
                                </label>
                                <input
                                    field="passwordRepeat"
                                    type="passwordRepeat"
                                    className="form-control"
                                    id="passwordTwo"
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
                            <button type="button" onClick={handlerFormReg} className="btn btn-reg">
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
