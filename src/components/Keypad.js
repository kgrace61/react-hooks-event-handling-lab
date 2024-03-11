import React from "react";

function Keypad (){
    function handleKeyPress(event) {
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            type= "password"
            onChange={handleKeyPress}
            />
        </div>
    )
}

export default Keypad;