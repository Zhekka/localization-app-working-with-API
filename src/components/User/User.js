import React from 'react'
import UserInfo from "./User.Info";

export default function User(props) {

    console.log('props in User=', props.users)

    // let showUserInfo = props.users.map((data) => {
    //     return <UserInfo key={data} users={data}/>
    // })

    return (<div>
        {/*{showUserInfo}*/}
        {/*<UserInfo />*/}
    </div>)
}