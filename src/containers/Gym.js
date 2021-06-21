import React from 'react'
import styles from '../containers/styles.module.css'
import BoxingBag from '../components/BoxingBag';
import Idlers from '../components/Idlers'

 const Gym = ({idler, idler2, xpBtn}) => {
    return (
        <div className={styles.gym}>
            <Idlers idler={idler} idler2={idler2}/>
            <BoxingBag xpBtn = {xpBtn}/>
        </div>
    )
}
export default Gym;