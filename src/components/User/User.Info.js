import React from 'react'
import { useTranslation} from "react-i18next";
import style from './UserInfo.module.css'

export default function UserInfo(props) {

    const {t, i18n} = useTranslation()

    return (<div className={style.content}>

        <strong>{t('description.part3')}</strong>
        <div>

            <img width={100} src={props.users.picture.medium} alt="User"/>

            <div>{t('description.part1')}: {props.users.name.first}</div>
            <div>{t('description.part2')}: {props.users.name.last}</div>
            <div>{t('description.part4')}: {props.users.gender}</div>
            <div>{t('description.part5')}: {props.users.location.country}</div>
            <div>{t('description.part6')}: {props.users.location.city}</div>
        </div>


    </div>)
}