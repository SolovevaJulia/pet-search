
const TagFilter = () => {
    return(
        <form>
           <div>
               <p>Тип обьявления:</p>
               <div className="wrapper-menu">
                   <div className="wrapper-menu-list custom-control custom-checkbox">
                       <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                       <label className="custom-control-label" htmlFor="customCheck1">Кошки</label>
                       <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                       <label className="custom-control-label" htmlFor="customCheck2">Собаки</label>
                       <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                       <label className="custom-control-label" htmlFor="customCheck3">Потеряшки</label>
                   </div>
               </div>
           </div>
        </form>
    )
}

export default TagFilter