import React, {useEffect, useState} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import User from "./User";
import {getUserThunkCreator} from "../../redux/userReducer";
import {useTranslation} from "react-i18next";

function UserContainer (props){

    const {t, i18n} = useTranslation()
    const [count, setCount] = useState(0);

        useEffect(() => {
            props.getUserThunkCreator();
        }, [count])

    return (<div >
        <button onClick={() => {
            setCount(count+1)
        }}>{t('description.part7')}
        </button>

        <User users={props.users}/>
    </div>)
}



let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUserThunkCreator: () => {
            dispatch(getUserThunkCreator())
        }
    }
}

let compotic = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UserContainer);

export default compotic;