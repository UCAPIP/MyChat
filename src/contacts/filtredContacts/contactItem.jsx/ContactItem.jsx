import user_img from "../../../images/USER.png";
import { Link } from "react-router-dom";

const ContactItem = (props) => {
    return(
        <>
            <Link to={`/${props.user.chatId}`}>
                <div className="contactItem">
                    <img 
                    src={user_img} 
                    alt="user" 
                    />
                    <p>{props.user.name}</p>
                </div>
            </Link>
        </>
    )
}

export default ContactItem;