import "./Contacts.css";
import user from "../USER.png"
import { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FiltredContacts from "./FiltredContacts";


const Contacts = (props) => {

    const [text, setText] = useState('');

    const handleChange = (event) => setText(event.target.value);

    const [open, setOpen] = useState(false);

    const showMenu = () => !open ? setOpen(true) : setOpen(false);

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
                    <li>Установите MyChat для Windows</li>
                </ul>
            </div>
        )
    }

    return(
        <div className="allSection">
            <header>
                <img src={user} alt="user" />
                <div className="headerBtns">
                    <div className="headerBtn" onClick={showMenu}>
                        <DehazeIcon />
                        {open ? <Menu /> : console.log('test')}
                    </div>
                    <div className="headerBtn">
                        <AddCommentIcon />
                    </div>
                </div>
            </header>
            <div className="filters">
                <input type="text" placeholder="Поиск" className="search" value={text} onChange={handleChange}/>
                <div className="btnsBlock">
                    <button className="btnItem">Все</button>
                    <button className="btnItem">Непрочитанное</button>
                    <button className="btnItem">Группы</button>
                </div>
            </div>
            <FiltredContacts users={props.users} text={text} />
        </div>
    )
}

export default Contacts;