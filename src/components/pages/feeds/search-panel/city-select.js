import React, { useState } from "react";
import './search-panel.css'


const CitySelect = () => {

    const [visibleMenu, setVisibleMenu] = useState(false)

    const openWrapperMenu = () => {
       visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true)
    }

    return(
        <form>
            <div className="menu-type">
                <button onClick={() => openWrapperMenu()} type="button" className="btn btn-type">Выберите город:</button>
                { visibleMenu ?
                    <div className="wrapper-menu">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6  col-6    wrapper-menu-list">
                            <div className="menu-item-checkbox">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Москва
                                    </label>
                                </div>
                            </div>
                            <div className="menu-item-checkbox">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Санкт-Петербург
                                    </label>
                                </div>
                            </div>
                            <div className="menu-item-checkbox">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Казань
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        </form>
    )
}

export default CitySelect