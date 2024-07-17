import logo from "../LOGO.png";
import "./EmptyPage.css";

const EmptyPage = () => {
    return(
        <div className="fullPage">
            <div className="flexContainer">
                <img src={logo} alt="logo"/>
                <h2>Десктопная версия MyChat уже в разработке</h2>
                <p>Уже совсем скоро вы сможете скачать приложение для Windows 
                    с высокой производительностью, поддержкой звонков и демонстрации экрана.</p>
                <button className="btnLoad">Установить из Microsoft Store</button>
            </div>
            <p className="article">Защищено рекурсивным шифрованием</p>
        </div>
    )
}

export default EmptyPage;