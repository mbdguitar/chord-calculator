import React from "react";

function RootForm({ getRoot, keys }) {
    return (
        <div>
            <form>
                <label for='notes'>Select the root note:</label>
                <select id='notes' name='notes' onChange={getRoot}>
                    {keys.map((key) => {
                        return <option value={key.name}>{key.name}</option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default RootForm;