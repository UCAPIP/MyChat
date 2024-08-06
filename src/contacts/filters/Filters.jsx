
const Filters = (props) => {

    return(
        <div className="filters">
            <input type="text" placeholder="Поиск" className="search" value={props.InptText} onChange={props.InptTextChange}/>
            <div className="btnsBlock">
                <button className="btnItem">Все</button>
                <button className="btnItem">Непрочитанное</button>
                <button className="btnItem">Группы</button>
            </div>
        </div>
    )
}

export default Filters;