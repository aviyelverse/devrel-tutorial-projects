import React from 'react'
import RecipeIngredient from './RecipeIngredient';


export default function RecipeIngredientList({ ingredients }) {
    const ingredientsElements = ingredients.map(ingredient => {
        return (<RecipeIngredient key={ingredient.id} {...ingredient} />)
    })
    return (
        <div>
            {ingredientsElements}
        </div>
    )
}
