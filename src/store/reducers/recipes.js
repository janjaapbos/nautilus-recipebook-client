// third party imports
import {List} from 'immutable'
// local imports
import {
    selectRecipes,
    toggleIngredientSummary,
    toggleRecipeFilter,
} from 'actions/types'


// this reducer manages recipes in memory
export default (state = initialRecipeState, {type, payload}) => {

    // if the payload represents a recipe to select
    if (type === selectRecipes) {
        // the key to index the recipe with
        const name = payload
        // the previously selected recipes
        const {selected} = state
        // if the recipe is already selection
        return {
            ...state,
            selected: payload,
        }

    // otherwise if the payload is a recipe filter
    } else if (type === toggleRecipeFilter) {
        // the key to index the recipe with
        const name = payload

        // the previously selected recipes
        const filters = [...state.filters]

        // if the recipe is already selection
        if (filters.indexOf(name) > -1) {
            filters.splice(filters.indexOf(name), 1)
        } else {
            filters.push(name)
        }

        return {
            ...state,
            filters,
        }
    }

    // this is an action we don't care about so leave the state unmutated
    return state
}

const initialRecipeState = {
    selected: [],
    filters: [],
    entries: []
}
