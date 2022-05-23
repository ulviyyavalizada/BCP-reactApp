import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

const languageReducer = (state = initialState.currentLanguage, action) => {
    switch (action.type) {
        case actionTypes.changeLanguage:
          localStorage.setItem('locale', action.payload)
          return {current: action.payload};
    
        default:
          return state;
      }
}

export default languageReducer;