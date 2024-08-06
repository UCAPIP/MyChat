import "./Chat.css"
import RenderMessages from './renderMessages/RenderMessages';
import MessageInput from './messageInput/MessageInput';

const Chat = () => {
    return(
        <div className='chatBody'>
            <RenderMessages />
            <MessageInput />
        </div>
    )
}

export default Chat;