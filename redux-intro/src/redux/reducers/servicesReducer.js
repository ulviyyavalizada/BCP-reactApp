import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function servicesReducer(state=initialState.services, action){
    switch (action.type) {
        case actionTypes.GET_SERVICES_SUCCESS:
            return {data:action.payload, load:true, failed:false}

        case actionTypes.GET_SERVICES_ERROR:
            return {data:[], load:false, failed:true}
    
        default:
            return state;
    }
}