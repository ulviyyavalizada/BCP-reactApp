import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getProjectsSuccess(projects){
    return {type: (actionTypes.GET_PROJECTS_SUCCESS), payload: projects}
}

export function getProjectsFailed(projects){
    return {type: (actionTypes.GET_PROJECTS_ERROR), payload: projects}
}

export function getProjects(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/projects`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getProjectsSuccess(result)))
        .catch(error=>dispatch(getProjectsFailed(error)))
    }
}

