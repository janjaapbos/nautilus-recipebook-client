import Immutable from "immutable";
import {selectRecipes} from 'actions/creators';

const immutableState = Immutable.Map({
  fetching: false,
  entries: [],
  data: Immutable.Map({})
})

export default (state = immutableState, action) => {
  switch (action.type) {
    case "STARTING_REQUEST":
      return state.set("fetching", true);
    case "FINISHED_REQUEST":
      return state.set("fetching", false)
                       .set("entries", action.response.data.recipes.edges.map(
          function(edge) {
            return {
              'name': edge.node.name,
              'type': edge.node.category,
              'cook_time': edge.node.cookTime,
              'ingredients': edge.node.ingredients.edges.map(
                 function(ingredients_edge) {
                    return ingredients_edge.node.name
                 }
               )
             }
           }
          )
      );

      //return state;
      //return state.set("fetching", false)
      //       .set("data", Immutable.Map(action.response.data));
    default:
      return state
  }
}
