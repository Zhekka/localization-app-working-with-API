import React from 'react'
import { useTranslation} from "react-i18next";
import style from './Header.module.css'


export default function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (<div className={style.content}>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
        </div>
    )
}
