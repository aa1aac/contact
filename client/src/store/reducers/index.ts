import {combineReducers} from 'redux'

import {userReducers} from './user'
import {ContactState, User} from '../actions'

import {ContactReducer} from './contact'

export interface StoreState {
    user: User;
    contact: ContactState
}

export const reducers = combineReducers<StoreState>({
    user: userReducers,
    contact: ContactReducer
})

