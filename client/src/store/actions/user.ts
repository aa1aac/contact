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
    email: string;
}

export const fetchUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.get('/api/auth/get-user')
            dispatch({type: ActionTypes.fetchUser, payload: res.data.user})
        } catch (e) {
            console.error(e)
        } 
    }
}

export const loginUser = ({ email, password }: { email: string; password: string }) => {

    return async (dispatch: Dispatch) => {
        try {
            await axios.post('/api/auth/login', { email, password })
            let res = await axios.get('/api/auth/get-user')

            dispatch({type: ActionTypes.loginUser, payload: res.data.user})
            toast.success('user logged in')
        }
        catch (e) {
            if(e.response?.data === 'Unauthorized' && e.response?.status === 401){
                toast.error('invalid email or password')
            }
        }
    }

}

export const signupUser = ({ name, email, password, confirmPassword }: { name: string; email: string; password: string; confirmPassword: string; }) => {

    return async (dispatch: Dispatch) => {
        try {
            await axios.post('/api/auth/signup', { name, email, password, confirmPassword })
            
            toast.success('sucessfully signed up! You can now log in.')
        } catch (e) {
        
            toast.error(e.response.data.errors[0])
        }
    }
}

export const logoutUser = () => {

    return async (dispatch: Dispatch) => {
        try {
            let res = await axios.get('/api/auth/logout')
            dispatch({type:ActionTypes.logoutUser})
            toast.success(res.data.msg)
        } catch (e) {
            toast.error('some error occured logging out')
            console.error(e)
        }
    }
}