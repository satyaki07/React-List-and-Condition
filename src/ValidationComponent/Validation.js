import React from 'react';

const validation = (props) => {

    let textLength = <p>Text too short!</p>
    if (props.inputLength > 5) {
        textLength = <p>Text long enough!</p>
    }
    return (
        <div>
            {/* {
                props.inputLength > 5 ?
                <p>Text long enough!</p> : 
                <p>Text too short!</p> 
            } */}
            {textLength}
            
        </div>
        
    )
}

export default validation;