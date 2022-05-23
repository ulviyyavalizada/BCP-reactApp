import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getContactsSuccess(contacts){
    return {type: (actionTypes.GET_CONTACTS_SUCCESS), payload: contacts}
}

export function getContactsError(contacts){
    return {type: (actionTypes.GET_CONTACTS_ERROR), payload: contacts}
}

export function getContacts(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/contacts`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>{
            dispatch(getContactsSuccess(result))
        })
        .catch(error=>dispatch(getContactsError(error)))
    }
}
