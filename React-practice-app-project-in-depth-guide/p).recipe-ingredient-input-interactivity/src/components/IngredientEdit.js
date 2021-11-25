import React from 'react'

export default function IngredientEdit({ ingredient, handleIngredientChange }) {

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }


    return (
        <>
            <input className="recipe-edit__input" type="text" value={ingredient.name} onInput={e => handleChange({ name: e.target.value })}></input>
            <input className="recipe-edit__input" type="text" value={ingredient.amount} onInput={e => handleChange({ amount: e.target.value })}></input>
            <button className="btn btn--danger">&times;</button>
        </>
    )
}
