import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function contactsReducer(state=initialState.contacts, action){
    switch (action.type) {
        case actionTypes.GET_CONTACTS_SUCCESS:
            return {data:action.payload, failed:false, load: true}
        case actionTypes.GET_CONTACTS_ERROR:
            return {data:action.payload, failed:true, load: false}
        default:
            return state;
    }
}