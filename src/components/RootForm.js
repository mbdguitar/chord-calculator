import React from "react";
import styles from '../modules/RootForm.module.css'

function RootForm({ getRoot, keys }) {
    return (
        <div className={styles.form_container}>
            <form>
                <label htmlFor='notes'>Root Note</label>
                <select id='notes' name='notes' onChange={getRoot}>
                    <option default></option>
                    {keys.map((key) => {
                        return <option value={key.name} key={key.id}>{key.name}</option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default RootForm;