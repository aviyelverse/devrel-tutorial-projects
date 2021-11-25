import React from 'react'

export default function IngredientEdit({ ingredient }) {
    return (
        <>
            <input className="recipe-edit__input" type="text" value={ingredient.name}></input>
            <input className="recipe-edit__input" type="text" value={ingredient.amount}></input>
            <button className="btn btn--danger">&times;</button>
        </>
    )
}
