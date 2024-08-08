import style from "./ContextMenu.module.css";

const ContextMenu = (props) => {
    return(
        <div className={style.customMenu} style={{ top: props.menuPosition.y, left: props.menuPosition.x }}>
            <p>Ответить</p>
            <p>Переслать</p>
            <p onClick={props.targetMessage(props.index)}>Выбрать сообщение</p>
        </div>
    )
}

export default ContextMenu;