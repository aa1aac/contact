import {ActionTypes, Action, User} from '../actions'

export const userReducers = (state : User, action: Action) => {
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