import * as actionTypes from "./actionTypes"

export const changeLanguage = (payload)=> {
    return ({
        type: actionTypes.changeLanguage,
        payload: payload
    })
}
