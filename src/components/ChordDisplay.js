import React from "react";

function ChordDisplay({ chord }) {
    return (
        <div>
            <div>
                <h1>{chord.name}</h1>
            </div>
            <div>
                {chord.intervals ? chord.intervals.map((i) => <p>{i}</p>) : <p>Please select a chord</p>}
            </div>
        </div>
    )
}

export default ChordDisplay