import { useLocation } from "react-router-dom";
import "../Chat.css";
import { useSelector } from 'react-redux';



const RenderMessages = (props) => {


    const messages = useSelector((state) => state.user);
    console.log(messages)
    debugger;

    const location = useLocation();
    let chatUrl = Number(location.pathname.replace('/', ''));
    for(let i = 0; i < props.messages.length; i++){
        if(props.messages[i].chatId === chatUrl){
            return(
                <div className='messages'>
                    <h2 className='chatName'>{props.users[i].name}</h2>
                        {props.messages[i].messagesText.map((message, index) => {
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