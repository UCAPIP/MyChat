import moment from 'moment';
import { useState } from 'react';
import "./Chat.css"
import { useLocation } from 'react-router-dom';

const Chat = (props) => {

    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(text);
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

    let chatID;

    const RenderMessages = () => {

        const location = useLocation();
        let chatUrl = Number(location.pathname.replace('/', ''));

        for(let i = 0; i < props.messages.length; i++){
            if(props.messages[i].chatId === chatUrl){
                chatID = i;
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

    const handleSend = (event) => {
        props.messages[chatID].messagesText.push(
            {
                sender: "me",
                text: text,
                date: moment().format('MMMM Do YYYY, h:mm:ss a')
            }
        )
        event.preventDefault();
        setText('');
        setHeight('14px')
    }
    
    return(
        <div className='chatBody'>
            <div className='messagesFiled'>
            <RenderMessages />
            </div>
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
        </div>
    )
}

export default Chat;