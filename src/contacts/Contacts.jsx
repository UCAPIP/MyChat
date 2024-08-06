import "./Contacts.css";
import { useState } from "react";
import FiltredContacts from "./filtredContacts/FiltredContacts";
import Filters from "./filters/Filters";
import Header from "./header/Header";


const Contacts = () => {

    const [InptText, setInptText] = useState('');
    const InptTextChange = (event) => setInptText(event.target.value);

    return(
        <div className="allSection">
            <Header />        
            <Filters InptText={InptText} InptTextChange={InptTextChange}/>
            <FiltredContacts InptText={InptText}/>
        </div>
    )
}

export default Contacts;