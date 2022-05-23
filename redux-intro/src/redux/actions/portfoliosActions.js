
import * as actionTypes from './actionTypes'
import {configs} from '../../config'

export function getPortfoliosSuccess(portfolios){
    return {type: (actionTypes.GET_PORTFOLIOS_SUCCESS), payload: portfolios}
}

export function getPortfoliosFailed(portfolios){
    return {type: (actionTypes.GET_PORTFOLIOS_ERROR), payload: portfolios}
}

export function getPortfolios(){
    return function(dispatch){
        let url = `${configs[0].apiUrl}/portfolios`
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getPortfoliosSuccess(result)))
        .catch(error=>dispatch(getPortfoliosFailed(error)))
    }
}
