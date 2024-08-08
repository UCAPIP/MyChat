import "./Chat.css"
import MessageInput from './messageInput/MessageInput';
import MessagesContainer from "./messagesContainer/MessagesContainer";

const Chat = () => {
    return(
        <div className='chatBody'>
            <MessagesContainer />
            <MessageInput />
        </div>
    )
}

export default Chat;