import {ActionTypes, Action, User} from '../actions'

const initialState = {_id:'', name:'', email: ''}  

export const userReducers = (state : User = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.loginUser:
        case ActionTypes.fetchUser:
            return {
                ...state,
                ...action.payload
            }  
        case ActionTypes.logoutUser:
            return initialState  
        default:
            return state
    }
}