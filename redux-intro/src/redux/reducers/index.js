import {combineReducers} from "redux";
import languageReducer from "./languageReducer";
import servicesReducer from "./servicesReducer"
import portfoliosReducer from "./portfoliosReducer"
import projectsReducer from "./projectsReducer"
import contactsReducer from "./contactsReducer"
import homeReducer from "./homeReducer"
import aboutReducer from './aboutReducer'

export const reducers = combineReducers({
    languageReducer,
    servicesReducer,
    portfoliosReducer,
    projectsReducer,
    contactsReducer,
    homeReducer,
    aboutReducer,

});
