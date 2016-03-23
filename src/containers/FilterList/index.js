// third party imports
import React from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Checkbox from 'material-ui/lib/checkbox'
import AppBar from 'material-ui/lib/app-bar'
import {connect} from 'react-redux'
// local imports
import {MenuButton} from 'app'
import {
    toggleFilterList,
    toggleRecipeFilter,
} from 'actions/creators'
import {
    allIngredients,
} from 'utils'



const selector = ({query, recipes}) => ({
    selectedFilters: recipes.filters,
    possibleFilters: allIngredients(query.get("entries")),
})
export default connect(selector)(({possibleFilters, selectedFilters, selectFilter, show, dispatch, showToggleButton=true}) => (
    <LeftNav
        open={show}
        openRight={true}
        width={350}
    >
        <AppBar
            title="Filter by Ingredients"
            showMenuIconButton={false}
            iconElementRight={showToggleButton && <MenuButton onClick={() => dispatch(toggleFilterList())}/>}
        />
        <List>
            { possibleFilters.sort().map((filter, i) => (
                <ListItem
                    onClick={() => dispatch(toggleRecipeFilter(filter))}
                    key={i}
                >
                    <Checkbox
                        checked={selectedFilters.indexOf(filter) > -1}
                        label={filter}
                    />
                </ListItem>
            ))}
        </List>
    </LeftNav>
))
