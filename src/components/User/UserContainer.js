import React, {useEffect, useState} from 'react'
import {compose} from "redux";
import {connect} from "react-redux";
import User from "./User";
import {getUserThunkCreator} from "../../redux/userReducer";
import axios from "axios";

function UserContainer (props){

    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // debugger
        props.getUserThunkCreator();
    },[count])

    // console.log(props)

    return (<div>
        <button onClick={() => {
            setCount(count+1)
        }}>Load more
        </button>
        <hr/>
        <User users={props.users}/>
        {/*<User users={props.users}/>*/}
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