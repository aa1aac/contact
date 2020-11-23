import axios from 'axios';
import {Dispatch} from 'redux'
import {toast} from 'react-toastify'

import { ActionTypes } from './types';

export interface Contact {
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

export const addContact = (data: Contact) => {
    return async (dispatch: Dispatch) => {

        try {
            await axios.post('/api/contacts', data)

            dispatch({type:ActionTypes.AddContact, payload: data})

            toast.success('contact successfully added')

            return true;
        } catch (e) {
            console.error(e)
            toast.error(e.response.data.errors[0])
            return false;
        }
    
    };
}