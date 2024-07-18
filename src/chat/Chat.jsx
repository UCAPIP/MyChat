import "./Chat.css"
import RenderMessages from './renderMessages/RenderMessages';
import MessageInput from './messageInput/MessageInput';

const Chat = (props) => {
    return(
        <div className='chatBody'>
            <div className='messagesFiled'>
            <RenderMessages users={props.users}/>
            </div>
            <MessageInput />
        </div>
    )
}

export default Chat;