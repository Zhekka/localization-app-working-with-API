import {usersAPI} from "../api/api";
import picture from '../img/user_male2-512.png'

const SET_USERS = 'SET_USERS'

let initialState = {
    users:[]

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            try{
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            }
            catch (e) {
                console.log('my error')
            }
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
            .then(response => {
                dispatch(setUsersAC(response.data.results))
            });
    }
}

export default userReducer;