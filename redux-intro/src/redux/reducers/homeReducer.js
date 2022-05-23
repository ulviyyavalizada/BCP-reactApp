import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function homeReducer(state=initialState.home, action){
    switch (action.type) {
        case actionTypes.GET_HOME_SUCCESS:
            return {data:action.payload, load:true, failed:false}

        case actionTypes.GET_HOME_ERROR:
            return {data:[], load:false, failed:true}
        
        default:
            return state;
    }
}