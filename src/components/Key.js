import React from "react";

function Key({ className, handleToggle, name }) {
    return (
        <>
            <div className={className} onClick={handleToggle}>
                <p>{name}</p>
            </div>
        </>
    )
}

export default Key;