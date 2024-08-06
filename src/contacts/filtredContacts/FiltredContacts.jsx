import "../Contacts.css";
import { useSelector } from "react-redux";
import ContactItem from "./contactItem.jsx/ContactItem";

const FiltredContacts = (props) => {

    const users = useSelector((state) => state.users);

    if(props.InptText === ''){
        return(
            <div className="contactsList">
            {users.map((user) => (
                <ContactItem user={user}/>
            ))}
            </div>
        ) 
    }else{
        return(
            <div className="contactsList">
            {users.map((user) => { 
                let name = user.name.toLowerCase();
                return(name.includes(props.InptText.toLowerCase()) ? <ContactItem user={user}/> : null);
            })}
            </div>
        )
    }
}

export default FiltredContacts;