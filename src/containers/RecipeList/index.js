// third party imports
import React from 'react'
import {connect} from 'react-redux'
// local imports
import {selectRecipes} from 'actions/creators'
import styles from './styles'
import FilterList from '../FilterList'
import RecipeTable from './RecipeTable'

export default connect()(({query, recipes, selected, dispatch, showFilterSidebar}) => (
    <article style={showFilterSidebar ? styles.container_thin : styles.container}>
        <RecipeTable
            query={query}
            recipes={recipes}
            selected={selected}
            onRowSelection={list => dispatch(selectRecipes(list.map(i => recipes[i].name)))}
        />
        <FilterList
            show={showFilterSidebar}
            showToggleButton={false}
        />
    </article>
))
