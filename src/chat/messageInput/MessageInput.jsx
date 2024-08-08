import { useState } from "react";
import "./MessageInput.css";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setNewMessage } from "../../redux/messageSlice";


const MessageInput = () => {

    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }
   
    const [height, setHeight] = useState('14px');
    const [scrollText, setScrollText] = useState('hidden');
    
    const sizeChange = (e) => {
        if(height.replace('px', '') <= 252){
            const newHeight = `${e.target.value.split('\n').length * 14}px`;
            setHeight(newHeight);
        }else if(height.replace('px', '') > 252){
            setScrollText('auto');
        }else if(text === ''){
            setHeight('14px');
        }
    }
    
    const location = useLocation();
    let chatUrl = Number(location.pathname.replace('/', ''));

    const handleSend = (event) => {

        const chatToUpdate = messages.find(message => message.chatId === chatUrl)?.chatId;

        dispatch(setNewMessage({
            chatId: chatToUpdate,
            newMessage: {
                sender: false,
                text: text,
                date: `${moment().format('D.M.YYYY h:mm a')}`
            }
        }))

        event.preventDefault();
        setText('');
        setHeight('14px')
    }

    const keySend = (event) => {
        if(event.key === "Enter" && !event.shiftKey){
            handleSend(event);
        }
    }

    return(
        <form className="inputForm">
            <textarea 
                className="inputForm__input"
                type="text" 
                value={text} 
                onChange={(e) => {handleChange(e); sizeChange(e);}}
                placeholder='Введите сообщение'
                style={{height: height, overflow: scrollText}}
                onKeyDown={keySend}
                />
            <input 
                className="inputForm__btn"
                type="submit" 
                value="Отправить"
                onClick={handleSend}
                />
        </form>
    )
}

export default MessageInput;
            