import React from 'react';
import pear from '../img/pear.png'; 
import'../containers/styles.module.css'

const BoxingPear = () => {
    return(
        <div className={pear}>
            <img alt = "gruszka bokserska" src={pear}/>
        </div>
    )
}

export default BoxingPear;