import { Link } from "react-router-dom";
import "../Contacts.css";
import user_img from "../../images/USER.png";
import { useSelector } from "react-redux";

const FiltredContacts = (props) => {

    const users = useSelector((state) => state.users);

    if(props.text === ''){
        return(
            <div className="contactsList">
            {users.map((user) => (
                <Link to={`/${user.chatId}`}><div className="contactItem">
                    <img src={user_img} alt="user" />
                    <p>{user.name}</p></div>
                </Link>
            ))}
            </div>
        ) 
    }else{
        return(
            <div className="contactsList">
            {users.map((user) => { 
                let name = user.name.toLowerCase();
                if(name.includes(props.text.toLowerCase())){
                    return(
                        <Link to={`/${user.chatId}`}><div className="contactItem">
                        <img src={user_img} alt="user" />
                        <p>{user.name}</p></div>
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