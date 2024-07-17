import "./Chat.css"
import RenderMessages from './renderMessages/RenderMessages';
import MessageInput from './messageInput/MessageInput';
import { useState } from "react";

const Chat = (props) => {

    const [messages, setMessages] = useState(props.messages);

    const updateMessages = (newMessages) => {
        setMessages(newMessages);
    }


    return(
        <div className='chatBody'>
            <div className='messagesFiled'>
            <RenderMessages messages={messages} users={props.users}/>
            </div>
            <MessageInput messages={props.messages} updateMessages={updateMessages}/>
        </div>
    )
}

export default Chat;