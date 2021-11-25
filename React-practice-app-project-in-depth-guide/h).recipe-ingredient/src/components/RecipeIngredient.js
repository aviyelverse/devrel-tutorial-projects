import React from 'react'

export default function RecipeIngredient({ name, amount }) {

    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}
