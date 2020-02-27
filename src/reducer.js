import {FETCH_USER} from './actions'
import {ADD_ITEM} from './actions'

const defaultState = { 
    user: null,
    items: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_USER: 
        return {
            ...state,
            user: action.user
        }
        case ADD_ITEM: 
        return {
            ...state,
            items: [...state.items, action.item]
        }
        default:
        return state
    }
}

