import React, { useState } from "react";
import Output from "./Output";

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
            <Output>good to see you</Output>}
            {showText && 
            <Output>The text has changed</Output> }
            <button onClick={handleShowText}>Change Text</button>
        </div>
    )
}
export default Greeting;