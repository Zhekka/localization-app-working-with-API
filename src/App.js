import React from 'react'
import './App.css';
import UserContainer from "./components/User/UserContainer";
import Header from "./components/Head/Header";
import { Trans, useTranslation } from "react-i18next";


function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">

            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <hr/>


            <Header/>
            <UserContainer/>
        </div>
    );
}

export default App;
