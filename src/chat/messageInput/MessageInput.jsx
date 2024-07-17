import { useState } from "react";
import "../Chat.css";
import { useLocation } from "react-router-dom";
import moment from "moment";


const MessageInput = (props) => {

    const [text, setText] = useState('')

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

        const updatedMessages = props.messages.map((message, index) => {
            if(message.chatId === chatUrl){
                return {
                    ...message,
                    messagesText: [
                        ...message.messagesText,
                        {
                            sender: "me",
                            text: text,
                            date: moment().format('MMMM Do YYYY, h:mm:ss a')
                        }
                    ]
                };
            }else{
                return(message);
            }   
        })

        props.updateMessages(updatedMessages);

        event.preventDefault();
        setText('');
        setHeight('14px')
    }

    return(
        <form>
                <textarea 
                    type="text" 
                    value={text} 
                    onChange={(e) => {handleChange(e); sizeChange(e);}}
                    placeholder='Введите сообщение'
                    style={{height: height, overflow: scrollText}}
                    />
                <input 
                    type="submit" 
                    value="Отправить"
                    onClick={handleSend} 
                    />
            </form>
    )
}

export default MessageInput;
            