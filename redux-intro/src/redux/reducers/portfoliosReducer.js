import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function portfoliosReducer(state=initialState.portfolios, action){
    switch (action.type) {
        case actionTypes.GET_PORTFOLIOS_SUCCESS:
            return {data:action.payload, load:true, failed:false}

        case actionTypes.GET_PORTFOLIOS_ERROR:
            return {data:[], load:false, failed:true}
        
        default:
            return state;
    }
}