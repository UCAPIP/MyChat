

const Auth = () => {
    return(
        <>
            <form>
                <div>
                    <label>Логин</label>
                    <input type="text" onChange={loginChange} value={login}/>
                </div>
                <div>
                    <label>Пароль</label>
                    <input type="text" onChange={passwordChange} value={password}/>
                </div>
                <input type="button" value="Войти" onClick={null}/>
            </form>
        </>
    )
}

export default Auth;