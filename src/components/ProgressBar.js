import React from 'react'
import styles from '../containers/styles.module.css'


const ProgressBar = (props) => {
    return (
        <div className={styles.progress && styles.center} >
            <div className={styles['progress-done']} style={{width:props.done}}>
                Stamina
            </div>
        </div>
    )
}

export default ProgressBar
