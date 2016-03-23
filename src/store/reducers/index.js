// third party imports
import {combineReducers} from 'redux'
import {responsiveStateReducer} from 'redux-responsive'
// local imports
import recipes from './recipes'
import ui from './ui'
import query  from './query';

// combine and export the reducers
export default combineReducers({
    recipes,
    ui,
    query,
    browser: responsiveStateReducer,
})
