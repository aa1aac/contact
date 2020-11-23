import {FetchUser, LogoutUser, LoginUser} from './user'
import {AddContact, FetchContact} from './contact'

export enum ActionTypes {
    fetchUser,
    logoutUser,
    signupUser,
    loginUser,
    AddContact,
    fetchContacts
}

export type Action = FetchUser | LogoutUser | LoginUser | AddContact | FetchContact