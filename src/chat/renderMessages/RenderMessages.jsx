import { useLocation } from "react-router-dom";
import "./RenderMessages.css";
import { useSelector } from 'react-redux';

const RenderMessages = () => {

    const users = useSelector((state) => state.users);
    const messages = useSelector((state) => state.messages);

    const location = useLocation();
    let chatUrl = Number(location.pathname.replace('/', ''));

    for(let i = 0; i < messages.length; i++){
        if(messages[i].chatId === chatUrl){

            const messagesList = messages[i].messagesText.map((message, index) => (
                <div key={index} className={message.sender ? 'messagesBody__messageUser' : 'messagesBody__messageMe'}>
                    <p className='messagesBody__text'>{message.text}</p>
                    <p className='messagesBody__time'>{message.date}</p>
                </div>
            ))

            return(
                <div className="messagesBody">
                        <h2 className='messagesBody__chatName'>{users[i].name}</h2>
                        { messagesList }
                </div>
            )
        }
    }
    return null;
}

export default RenderMessages;