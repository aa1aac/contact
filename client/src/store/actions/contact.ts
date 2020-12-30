import axios from 'axios';
import {Dispatch} from 'redux'
import {toast} from 'react-toastify'

import { ActionTypes } from './types';

export interface Contact {
    _id?: string;
    name:string; 
    email?: string; 
    phoneNumber: string;
}

export interface ContactState {
    contacts: Contact[];
}

export interface AddContact {
    type: ActionTypes.AddContact;
    payload: Contact
}

export interface FetchContact {
    type: ActionTypes.fetchContacts;
    payload: Contact[]
}

export interface DeleteContact {
    type: ActionTypes.deleteContact;
    payload: {
        id : string;
    };
}

export const fetchContacts = () => {
    return async (dispatch:Dispatch) => {
        try{
            let res = await axios.get('/api/contacts')

            dispatch({type: ActionTypes.fetchContacts, payload: res.data.contacts})
        } catch(e) {
            console.error(e)
        }
    }
}

export const addContact = (data: Contact) => {
    return async (dispatch: Dispatch) => {

        try {
            let res = await axios.post('/api/contacts', data)

            dispatch({type:ActionTypes.AddContact, payload: {...data, _id: res.data._id}})

            toast.success('contact successfully added')

            return true;
        } catch (e) {
            console.error(e)
            toast.error(e.response.data.errors[0])
            return false;
        }
    
    };
}

export const deleteContact = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.delete(`/api/contacts/${id}`)
            
            dispatch({payload: {id} ,type: ActionTypes.deleteContact })
        } catch (e) {
            console.error(e)
            toast.error('unable to delete contact. Try again!')
        }
    }
}