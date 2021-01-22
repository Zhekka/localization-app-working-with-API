import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://randomuser.me/'
});

export const usersAPI = {
    getUsers() {
        return instance.get('api/')
    }
}