// third party imports
import React from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
// local imports
import styles from './styles'
import IngredientCategory from './IngredientCategory'

export default ({ingredients, selected}) => (
    <aside style={styles.container}>
        { selected.length > 0 ? (
            <div>
                <IngredientCategory
                    title="Selected Recipes"
                    entries={selected}
                />
                {ingredients.length > 0 && (
                    <IngredientCategory
                        title="Unique Ingredients"
                        entries={ingredients}
                    />
                )}
            </div>
        ) : (
            <div style={styles.empty}>
                select a recipe
            </div>
        )}
    </aside>
)
