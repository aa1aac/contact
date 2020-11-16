import axios from 'axios'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'

import { ActionTypes } from './types'

export interface FetchUser {
    type: ActionTypes.fetchUser;
    payload: User;
}

export interface LogoutUser {
    type: ActionTypes.logoutUser;
}

export interface LoginUser {
    type: ActionTypes.loginUser;
    payload: User
}

export interface User {
    _id: string;
    name: string;
}

export const fetchUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.get('/api/auth/get-user')
            console.log(res.data)
        } catch (e) {
            console.error(e)
        } 
    }
}

export const loginUser = ({ email, password }: { email: string; password: string }) => {

    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.post('/api/auth/login', { email, password })
            toast.success(res.data.msg)
        }
        catch (e) {
            console.error(e)
            toast.error(e.response.data.errors[0])
        }
    }

}

export const signupUser = ({ name, email, password, confirmPassword }: { name: string; email: string; password: string; confirmPassword: string; }) => {

    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.post('/api/auth/signup', { name, email, password, confirmPassword })
            
            toast.success('sucessfully signed up! You can now log in.')
        } catch (e) {
            
            console.log(e.response.data)
            toast.error(e.response.data.errors[0])
        }
    }
}

export const logoutUser = () => {

    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.get('/api/auth/logout')
            console.log(res.data)
            toast.success(res.data.msg)
        } catch (e) {
            toast.error('some error occured logging out')
            console.error(e)
        }
    }
}