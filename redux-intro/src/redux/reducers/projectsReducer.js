import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function projectsReducer(state=initialState.projects, action){
    switch (action.type) {
        case actionTypes.GET_PROJECTS_SUCCESS:
            return {data:action.payload, load:true, failed:false}

        case actionTypes.GET_PROJECTS_ERROR:
            return {data:[], load:false, failed:true}
    
        default:
            return state;
    }
}