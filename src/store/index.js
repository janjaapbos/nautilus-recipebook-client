// third party imports
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {addResponsiveHandlers} from 'redux-responsive'
// local imports
import reducers from './reducers'

const storeFactory = applyMiddleware(
    thunk,
)(createStore)

const store = storeFactory(reducers)

addResponsiveHandlers(store)

// export a store with no initial data
export default store
