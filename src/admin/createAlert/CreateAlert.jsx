import style from "./CreateAlert.module.css";

const CreateAlert = ({users}) => {
    return(
        <div className={style.bodyAlert}>
            <p>Пользователь</p>
            <p><b>Имя:</b> {users.name}</p>
            <p><b>Логин:</b> {users.login}</p>
            <p><b>Пароль:</b> {users.password}</p>
            <p>успешно создан!</p>
        </div>
    )
}

export default CreateAlert;