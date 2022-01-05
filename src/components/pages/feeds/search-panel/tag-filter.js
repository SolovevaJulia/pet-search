import './search-panel.css'

const TagFilter = () => {
    return(
        <form>
           <div className="menu-type">
               <button type="button" className="btn btn-type">Тип обьявления:</button>
               <div className="wrapper-menu">
                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6  col-6    wrapper-menu-list">
                           <div className="menu-item-checkbox">
                               <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                               <label className="custom-control-label" htmlFor="customCheck1">Кошки</label>
                           </div>
                           <div className="menu-item-checkbox">
                               <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                               <label className="custom-control-label" htmlFor="customCheck2">Собаки</label>
                           </div>
                          <div className="menu-item-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                              <label className="custom-control-label" htmlFor="customCheck3">Потеряшки</label>
                          </div>
                       </div>
                   </div>
               </div>
        </form>
    )
}

export default TagFilter