import React from 'react'
import avatar from '../../img/user_male2-512.png'

export default function UserInfo(props) {

    let infoName = props.users.map((data)=>{
        return <div>Name is: {data.name.first}</div>
    })

    console.log('props in UserInfo',props.users)
    return(<div>
        User info
        <div>
            <img width={60} src={avatar} alt="User"/>
            {infoName}
            {/*<div>Name: {props.users.name.first}</div>*/}
            <div>Surname: test</div>
            <div>Gender: test</div>
            <hr/>
        </div>
    </div>)
}