import React from 'react';
import { connect } from 'react-redux';
import { getGraph } from '../actions/query_actions.js';

let defaultQueryText = `query {
  recipes (first: 100) {
    edges {
      node {
        name
        category
        cookTime
        ingredients {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}`;

let Query = React.createClass({
  componentDidMount() {
    this.props.dispatch(
      getGraph(defaultQueryText)
    );
  },
  render() {
    let dispatch = this.props.dispatch;
    let fetchInProgress = String(this.props.store.query.get('fetching'));
    let queryText;
    let data = this.props.store.query.get('data').toObject();
    var recipes = "";
    var ingredients = "";

    if (data.recipes !== undefined) {
      recipes = data.recipes.edges.map(edge =>
        <li key={edge.node.id}>{edge.node.name} (Global ID: {edge.node.id})
           <div>
             Category: {edge.node.category}
           </div>
        </li>
      )
    }

    if (data.ingredients !== undefined) {
      ingredients = data.ingredients.edges.map(edge =>
        <li key={edge.node.id}>{edge.node.name} (Global ID: {edge.node.id})
        </li>
      )
    }
    
    return (
      <div>
        <textarea rows={20} cols={40} defaultValue={defaultQueryText} ref={node => {queryText = node}}></textarea>
        <button onClick={() => {
          dispatch(getGraph(queryText.value))}
        }>
          query
        </button>

        <p>Fetch in progress: {fetchInProgress}</p>

        <ul>
          {recipes}
        </ul>
        <ul>
          {ingredients}
        </ul>
      </div>
    )
    return (<div></div>)
  }
});

const mapStateToProps = (state) => {
  return {
  store: state
  }
};
export const QueryContainer = connect(
 mapStateToProps
)(Query);


