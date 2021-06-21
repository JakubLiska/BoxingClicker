import React from 'react'

const Rush = ({btnDis, conv}) => {
        return (
            <>
                <button 
                disabled={btnDis}
                onClick = {()=> conv()}>Rush!</button>
            </>
        )
}

export default Rush


