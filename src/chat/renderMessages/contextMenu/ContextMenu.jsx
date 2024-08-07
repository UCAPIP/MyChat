import "../RenderMessages.css";

const ContextMenu = (props) => {
    return(
        <div className="custom-menu" style={{ top: props.menuPosition.y, left: props.menuPosition.x }}>
            <p>Ответить</p>
            <p>Переслать</p>
        </div>
    )
}

export default ContextMenu;