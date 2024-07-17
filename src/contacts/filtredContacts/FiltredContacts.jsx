import { Link } from "react-router-dom";
import "../Contacts.css";
import user from "../../images/USER.png";

const FiltredContacts = (props) => {
    if(props.text === ''){
        return(
            <div className="contactsList">
            {props.users.map((value) => (
                <Link to={`/${value.chatId}`}><div className="contactItem">
                    <img src={user} alt="user" />
                    <p>{value.name}</p></div>
                </Link>
            ))}
            </div>
        ) 
    }else{
        return(
            <div className="contactsList">
            {props.users.map((value) => { 
                let name = value.name.toLowerCase();
                if(name.includes(props.text.toLowerCase())){
                    return(
                        <Link to={`/${value.chatId}`}><div className="contactItem">
                        <img src={user} alt="user" />
                        <p>{value.name}</p></div>
                        </Link>
                    )  
                }else{
                    return null;
                }
            })}
            </div>
        )
    }
}

export default FiltredContacts;