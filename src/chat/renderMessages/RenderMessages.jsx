import { useLocation } from "react-router-dom";
import "./RenderMessages.css";
import { useSelector } from 'react-redux';
import { useState } from "react";
import ContextMenu from "./contextMenu/ContextMenu";

const RenderMessages = () => {

    const users = useSelector((state) => state.users);
    const messages = useSelector((state) => state.messages);

    const location = useLocation();
    let chatUrl = Number(location.pathname.replace('/', ''));

    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});

    const handleContextMenu = (event) => {
        event.preventDefault();
        setShowMenu(true);
        setMenuPosition({x: event.pageX, y: event.pageY});
        if(showMenu){
            setShowMenu(false);
        }
    }

    const handleClick = () => {
        setShowMenu(false);
    }

    for(let i = 0; i < messages.length; i++){
        if(messages[i].chatId === chatUrl){

            const messagesList = messages[i].messagesText.map((message, index) => (
                <div 
                    key={index} 
                    className={message.sender ? 'messagesBody__messageUser' : 'messagesBody__messageMe'}
                    onContextMenu={handleContextMenu}
                    >
                    <p className='messagesBody__text' style={{whiteSpace: 'pre-wrap'}}>{message.text}</p>
                    <p className='messagesBody__time'>{message.date}</p>
                </div>
            ))

            return(
                <div className="messagesBody" onClick={handleClick}>
                        <h2 className='messagesBody__chatName'>{users[i].name}</h2>
                        { messagesList }
                        {showMenu ? <ContextMenu menuPosition={menuPosition} /> : null}
                </div>
            )
        }
    }
    return null;
}

export default RenderMessages;