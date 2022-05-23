import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getAboutSuccess(about){
    return {type: (actionTypes.GET_ABOUT_SUCCESS), payload: about}
}

export function getAboutFailed(about){
    return {type: (actionTypes.GET_ABOUT_ERROR), payload: about}
}

export function getAbout(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/about`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getAboutSuccess(result)))
        .catch(error=>dispatch(getAboutFailed(error)))
    }
}

