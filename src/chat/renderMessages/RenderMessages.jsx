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
            return(
                <div className="messagesBody">
                    <div className='messagesBody__messages'>
                        <h2 className='messagesBody__chatName'>{users[i].name}</h2>
                        {messages[i].messagesText.map((message, index) => {
                            if(message.sender === "user"){
                                return(
                                    <div key={index} className='messagesBody__messageUser'>
                                        <p className='messagesBody__text'>{message.text}</p>
                                        <p className='messagesBody__time'>{message.date}</p>
                                    </div>
                                )
                            }else if(message.sender === "me"){
                                return(
                                    <div key={index} className='messagesBody__messageMe'>
                                        <p className='messagesBody__text'>{message.text}</p>
                                        <p className='messagesBody__time'>{message.date}</p>
                                    </div>
                                )
                            }else{
                                return null;
                            }
                        })}
                    </div>
                </div>
            )
        }
    }
    return null;
}

export default RenderMessages;