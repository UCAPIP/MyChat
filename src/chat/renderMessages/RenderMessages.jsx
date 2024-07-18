import { useLocation } from "react-router-dom";
import "../Chat.css";
import { useSelector } from 'react-redux';



const RenderMessages = () => {

    const users = useSelector((state) => state.users);
    const messages = useSelector((state) => state.messages);

    const location = useLocation();
    let chatUrl = Number(location.pathname.replace('/', ''));
    for(let i = 0; i < messages.length; i++){
        if(messages[i].chatId === chatUrl){
            return(
                <div className='messages'>
                    <h2 className='chatName'>{users[i].name}</h2>
                        {messages[i].messagesText.map((message, index) => {
                            if(message.sender === "user"){
                                return(
                                    <div key={index} className='messageUser'>
                                        <p className='text'>{message.text}</p>
                                        <p className='time'>{message.date}</p>
                                    </div>
                                )
                            }else if(message.sender === "me"){
                                return(
                                    <div key={index} className='messageMe'>
                                        <p className='text'>{message.text}</p>
                                        <p className='time'>{message.date}</p>
                                    </div>
                                )
                            }else{
                                return null;
                            }
                        })}
                </div>
            )
        }
    }
    return null;
}

export default RenderMessages;