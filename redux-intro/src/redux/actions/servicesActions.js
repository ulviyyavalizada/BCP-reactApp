import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getServicesSuccess(services){
    return {type: (actionTypes.GET_SERVICES_SUCCESS), payload: services}
}

export function getServicesFailed(services){
    return {type: (actionTypes.GET_SERVICES_ERROR), payload: services}
}

export function getServices(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/services`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getServicesSuccess(result)))
        .catch(error=>dispatch(getServicesFailed(error)))
    }
}

