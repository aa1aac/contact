import {FetchUser, LogoutUser, LoginUser} from './user'
import {AddContact, FetchContact, DeleteContact } from './contact'

export enum ActionTypes {
    fetchUser,
    logoutUser,
    signupUser,
    loginUser,
    AddContact,
    fetchContacts,
    deleteContact
}

export type Action = FetchUser | LogoutUser | LoginUser | AddContact | FetchContact | DeleteContact