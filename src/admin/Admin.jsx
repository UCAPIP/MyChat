import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser } from "../redux/userSlice";
import { setNewChat } from "../redux/messageSlice";




const Admin = () => {

    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const loginChange = (event) => {
        setLogin(event.target.value);
    }
    const passwordChange = (event) => {
        setPassword(event.target.value);
    }

    

    const addUser = (event) => {

        const newId = users[users.length - 1].userId + 1;

        dispatch(setNewUser({
            chatId: newId,
            userId: newId,
            name: name,
            login: login,
            password: password
        }))

        dispatch(setNewChat({
            chatId: newId,
            messagesText: []      
        }))
        setName('');
        setLogin('');
        setPassword('');
        event.preventDefault();
    }


    return(
        <div>
            <h2>Создать пользователя</h2>
            <form>
                <label>Имя</label>
                <input type="text" onChange={nameChange} value={name}/>
                <label>Логин</label>
                <input type="text" onChange={loginChange} value={login}/>
                <label>Пароль</label>
                <input type="text" onChange={passwordChange} value={password}/>
                <input type="button" value="Создать" onClick={addUser}/>
            </form>
        </div>
    )
}

export default Admin;