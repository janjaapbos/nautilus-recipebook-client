import intersection from 'lodash/array/intersection'
import uniq from 'lodash/array/uniq'
import flatten from 'lodash/array/flatten'
import findWhere from 'lodash/collection/findWhere'

// return a flat and unique array of every ingredient of the given recipes
export const allIngredients = (recipes) => uniq(flatten(recipes.map(recipe => recipe.ingredients)))

// return an array of the ingredients of selected recipes
export const selectedIngredients = (recipes, selected) => allIngredients(selected.map(name => findWhere(recipes, {name})))

// return an array of recipes that match the given list of filters
export const filteredRecipes = (recipes, filters) => recipes.filter(recipe => filters.length === 0 || intersection(recipe.ingredients, filters).length == filters.length)
