import bag from '../img/bag.png'; 
import React from 'react'
import pbse1 from '../mp3/PBSE1.wav' 
import pbse2 from '../mp3/PBSE2.wav' 
import pbse3 from '../mp3/PBSE3.wav' 
import pbse4 from '../mp3/PBSE4.wav' 
import pbse5 from '../mp3/PBSE5.wav' 
import pbse6 from '../mp3/PBSE6.wav' 

import styles from '../containers/styles.module.css'

function playSound(){
    const sounds = [pbse1, pbse2, pbse3, pbse4, pbse5, pbse6]
    const audio = sounds.map((s, i) => new Audio(sounds[i]))
    let randomElement = audio[Math.floor(Math.random() * audio.length)];
    randomElement.play()
  }

const BoxingBag = ({xpBtn}) => {
    return(
        <div className={styles.bag}>    
            <img 
                onClick={() =>{
                    xpBtn(); 
                    playSound()
                }}
                alt="worek bokserski" 
                src={bag} 
            />
        </div>  
    )
}

export default BoxingBag;