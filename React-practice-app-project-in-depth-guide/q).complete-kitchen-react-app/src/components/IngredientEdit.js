import React from 'react'

export default function IngredientEdit({ ingredient, handleIngredientChange, handleRecipeIngredientDelete }) {

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }


    return (
        <>
            <input className="recipe-edit__input" type="text" value={ingredient.name} onChange={e => handleChange({ name: e.target.value })}></input>
            <input className="recipe-edit__input" type="text" value={ingredient.amount} onChange={e => handleChange({ amount: e.target.value })}></input>
            <button className="btn btn--danger" onClick={() => handleRecipeIngredientDelete(ingredient.id)}>&times;</button>
        </>
    )
}
