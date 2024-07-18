import { Link } from "react-router-dom";
import "../Contacts.css";

const Menu = () => {
    return(
        <div className="dropMenu">
            <ul className="list">
                <li>Новая группа</li>
                <li>Новое сообщество</li>
                <li>Сообщества</li>
                <li>Избранные сообщения</li>
                <li>Выбрать чаты</li>
                <li>Настройки</li>
                <li>Выйти</li>
                <br />
                <Link to="/admin"><li>ADMIN</li></Link>
                <li>Установите MyChat для Windows</li>
            </ul>
        </div>
    )
}

export default Menu;