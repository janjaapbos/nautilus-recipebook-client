// third party imports
import intersection from 'lodash/array/intersection'
import flatten from 'lodash/array/flatten'
import uniq from 'lodash/array/uniq'
import findWhere from 'lodash/collection/findWhere'
// local imports
import {selectRecipes} from '../types'

export default (recipes) => (dispatch, getState) => {
    // grab the necessary info from the previous state
    const {entries2, selected, filters} = getState().recipes
    const entries = getState().query.get("entries")

    // the complete selection
    let selection = recipes

    // if there is a filter
    if (filters.length > 0) {
        // start the selection with the current one
        selection = [...selected]

        // go over every filter
        for (const name of selected) {
            // the variable used to index the recipe
            const selectedRecipe = findWhere(entries, {name})
            // if the recipe matches the filter
            if (intersection(selectedRecipe.ingredients, filters).length === filters.length) {
                // remove the recipe from the selection
                selection.splice(selection.indexOf(name), 1)
            }
        }

        // add the entries to the selection
        selection = uniq(selection.concat(recipes))
    }

    // save the selection list in local storage
    localStorage.setItem('recipes-previousSelection', JSON.stringify(selection))

    // update the local storage
    dispatch({
        type: selectRecipes,
        payload: selection,
    })
}
