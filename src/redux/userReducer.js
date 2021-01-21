import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS'

let initialState = {
    users: [{
        name: 'Eugene',
        surname: 'Kirnasuk',
        country: 'Ukraine',
        city: 'Vinnitsa'
    }]

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        default: {
            return state
        }
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});


export const getUserThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getUsers()
            .then(data => {
                dispatch(setUsersAC(data))
            });
    }
}

export default userReducer;