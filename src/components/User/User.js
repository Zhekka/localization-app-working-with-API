import React from 'react'
import UserInfo from "./User.Info";
import style from './User.module.css'

export default function User(props) {

    let showUserInfo = props.users.map((data) => {
        return <UserInfo key={data} users={data}/>
    })

    return (<div className={style.content}>
        {showUserInfo}
    </div>)
}