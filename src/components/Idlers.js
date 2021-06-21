import React from 'react'
import styles from '../containers/styles.module.css'

const Idlers = ({idler, idler2}) => {
    return (
        <div className ={styles.idlers}>
            <button onClick = {() => idler()} >Cursor</button>
            <button onClick = {() => idler2()} >Idler 2</button>
        </div>  
    )
}

export default Idlers;