import "./Contacts.css";
import user from "../images/USER.png";
import { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import FiltredContacts from "./filtredContacts/FiltredContacts";
import Menu from "./dropdownMenu/Menu";


const Contacts = () => {

    const [text, setText] = useState('');

    const handleChange = (event) => setText(event.target.value);

    const [open, setOpen] = useState(false);

    const showMenu = () => !open ? setOpen(true) : setOpen(false);

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
            <FiltredContacts text={text} />
        </div>
    )
}

export default Contacts;