import RenderMessages from "./renderMessages/RenderMessages";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MessagesContainer = () => {

    const [chosenMessage, setChosenMessage] = useState(null);

    const targetMessage = (id) => {
        setChosenMessage(id);
    }

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

    const foundChat = messages.find(messageGroup => messageGroup.chatId === chatUrl);
    const chatUser = users.find(user => user.userId === foundChat.chatId);
    
    return(
        <RenderMessages
            targetMessage={targetMessage}
            chosenMessage={chosenMessage}
            chatUser={chatUser}
            messagesList={foundChat?.messagesText || []}
            showMenu={showMenu}
            menuPosition={menuPosition}
            handleContextMenu={handleContextMenu}
            handleClick={handleClick}
        />
    )
}

export default MessagesContainer;