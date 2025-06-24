import React from "react";

function CalculateButton({ updateIntervals }) {
    return (
        <button onClick={updateIntervals}>Calculate Chord</button>
    )
}

export default CalculateButton;