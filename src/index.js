// fix browser land
import 'babel-polyfill'
// third party imports imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
// local imports
import store from './store'
import RecipeBook from './app'
import {selectRecipes} from 'actions/creators'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

/*
// grab the previous selection from local storage
const previousSelection = JSON.parse(localStorage.getItem('recipes-previousSelection'))
// if there was a previous selection
if (previousSelection) {
    // perform the previous selection
    store.dispatch(selectRecipes(previousSelection))
}
*/

import { QueryContainer } from "./containers/Query.js";

const Main = () => {
  return (
    <div>
      <QueryContainer/>
      <RecipeBook/>
    </div>
  )
};

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById("example")
);
