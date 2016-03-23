// third party imports
import React from 'react'
// local imports
import styles from './styles'

export default ({title, entries}) => (
    <div style={styles.container}>
        <h1 style={styles.header}>
            {title}
        </h1>
        {entries.sort().map((recipe, i) => (
            <span style={styles.ingredient} key={i}>
                {recipe}
            </span>
        ))}
    </div>
)
