import {combineReducers} from 'redux'

import {userReducers} from './user'
import {User} from '../actions'

export interface StoreState {
    user: User;
}

export const reducers = combineReducers<StoreState>({
    user: userReducers,
})

