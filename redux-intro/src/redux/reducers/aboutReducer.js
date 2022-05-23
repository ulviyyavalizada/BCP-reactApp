import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function aboutReducer(state=initialState.about, action){
    switch (action.type) {
        case actionTypes.GET_ABOUT_SUCCESS:
            return {data:action.payload, load:true, failed:false}

        case actionTypes.GET_ABOUT_ERROR:
            return {data:[], load:false, failed:true}
    
        default:
            return state;
    }
}