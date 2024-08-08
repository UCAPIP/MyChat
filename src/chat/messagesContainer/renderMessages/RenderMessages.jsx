import "./RenderMessages.css";
import ContextMenu from "./contextMenu/ContextMenu";

const RenderMessages = ({ chatUser, messagesList, showMenu, menuPosition, handleContextMenu, handleClick, chosenMessage, targetMessage }) => {
    return (
        <div className="messagesBody" onClick={handleClick}>
            {chatUser && <h2 className='messagesBody__chatName'>{chatUser.name}</h2>}
            {messagesList.map((message, index) => (
                <div 
                    key={index} 
                    className={message.sender ? 'messagesBody__messageUser' : 'messagesBody__messageMe'}
                    onContextMenu={handleContextMenu}
                    style={index === chosenMessage ? {backgroundColor: 'black'} : {backgroundColor: 'white'}}
                >
                    <p className='messagesBody__text' style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                    <p className='messagesBody__time'>{message.date}</p>
                    {showMenu && <ContextMenu menuPosition={menuPosition} targetMessage={targetMessage} index={index}/>}
                </div>
            ))} 
        </div>
    )
}

export default RenderMessages;