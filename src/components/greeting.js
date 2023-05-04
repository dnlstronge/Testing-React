import React, { useState } from "react";

const Greeting = () => {
    const [showText, setShowText] = useState(false)

    /*handler */
    const handleShowText = () => {
        setShowText(!showText)
    }
    return (
        <div>
            <h2>Hello world</h2>
            {!showText &&
            <p>good to see you</p>}
            {showText && 
            <p>The text has changed</p> }
            <button onClick={handleShowText}>Change Text</button>
        </div>
    )
}
export default Greeting;