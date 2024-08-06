import "../Contacts.css";
import { useSelector } from "react-redux";
import ContactItem from "./contactItem.jsx/ContactItem";

const FiltredContacts = (props) => {

    const users = useSelector((state) => state.users);

    const allContacts = users.map(user => <ContactItem user={user}/>);

    const foundContacts = users.map((user) => { 
        let name = user.name.toLowerCase();
        return(name.includes(props.InptText.toLowerCase()) ? <ContactItem user={user}/> : null);
    })

    return(
        <div className="contactsList">
            {props.inptText === '' ? allContacts : foundContacts}
        </div>
    )
}

export default FiltredContacts;