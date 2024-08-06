import AddCommentIcon from '@mui/icons-material/AddComment';
import DehazeIcon from '@mui/icons-material/Dehaze';
import user from "../../images/USER.png";
import { useState } from "react";
import Menu from '../dropdownMenu/Menu';

const Header = () => {

    const [open, setOpen] = useState(false);
    const showMenu = () => !open ? setOpen(true) : setOpen(false);

    return(
        <header>
            <img src={user} alt="user" />
            <div className="headerBtns">
                <div className="headerBtn" onClick={showMenu}>
                    <DehazeIcon />
                    {open ? <Menu /> : null}
                </div>
                <div className="headerBtn">
                    <AddCommentIcon />
                </div>
            </div>
        </header>
    )
}

export default Header;