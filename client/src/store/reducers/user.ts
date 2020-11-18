import {ActionTypes, Action, User} from '../actions'

const initialState = {_id:'', name:'', email: ''}

export const userReducers = (state : User = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.loginUser:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}