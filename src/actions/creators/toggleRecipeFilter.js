import {toggleRecipeFilter} from '../types'

export default (recipeName) => ({
    type: toggleRecipeFilter,
    payload: recipeName,
})
