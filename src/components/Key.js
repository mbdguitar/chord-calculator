import React from "react";

function Key({ className, handleToggle }) {
    return (
        <>
            <div className={className} onClick={handleToggle}></div>
        </>
    )
}

export default Key;