import {FetchUser, LogoutUser, LoginUser} from './user'

export enum ActionTypes {
    fetchUser,
    logoutUser,
    signupUser,
    loginUser
}

export type Action = FetchUser | LogoutUser | LoginUser