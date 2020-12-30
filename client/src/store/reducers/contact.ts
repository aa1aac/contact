import {ActionTypes, Action, ContactState} from '../actions'

const initialState = {
    contacts: []
}

export const ContactReducer = (state : ContactState = initialState, action : Action) => {
    switch(action.type){
        case ActionTypes.AddContact:
            return {
                ...state,
                contacts : [...state.contacts, action.payload ]             
            }
        case ActionTypes.fetchContacts:
           
            return {
                ...state,
                contacts: [...action.payload]
            }
        case ActionTypes.deleteContact:
            return {
                ...state,
                contacts: state.contacts.filter(contact => {
                    return contact._id !== action.payload.id
                })
            }
        default:
            return state
    }
}