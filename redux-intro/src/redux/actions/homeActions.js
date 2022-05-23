
import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getHomeSuccess(home){
    return {type: (actionTypes.GET_HOME_SUCCESS), payload: home}
}

export function getHomeFailed(home){
    return {type: (actionTypes.GET_HOME_ERROR), payload: home}
}

export function getHome(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/home`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getHomeSuccess(result)))
        .catch(error=>dispatch(getHomeFailed(error)))
    }
}
