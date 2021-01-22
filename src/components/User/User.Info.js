import React from 'react'
import {Trans, useTranslation} from "react-i18next";

export default function UserInfo(props) {

    const {t, i18n} = useTranslation()

    // const changeL = (language) => {
    //     i18n.changeLanguage(language)
    // }

    return (<div>
        {/*<button onClick={()=>changeL('en')}>En</button>*/}
        {/*<button onClick={()=>changeL('ru')}>Ru</button>*/}

        {/*<Trans i18nKey={"description.part1"}>*/}
        {/*    Hello*/}
        {/*</Trans>*/}


        {/*<div>{t('description.part1')}</div>*/}


        <br/>
        <strong>{t('description.part3')}</strong>
        <div>

            <img width={100} src={props.users.picture.medium} alt="User"/>

            <div>{t('description.part1')}: {props.users.name.first}</div>
            <div>{t('description.part2')}: {props.users.name.last}</div>
            <div>{t('description.part4')}: {props.users.gender}</div>
            <div>{t('description.part5')}: {props.users.location.country}</div>
            <div>{t('description.part6')}: {props.users.location.city}</div>
            <hr/>
        </div>


    </div>)
}