import {FetchUser, LogoutUser, LoginUser} from './user'
import {AddContact} from './contact'

export enum ActionTypes {
    fetchUser,
    logoutUser,
    signupUser,
    loginUser,
    AddContact
}

export type Action = FetchUser | LogoutUser | LoginUser | AddContact