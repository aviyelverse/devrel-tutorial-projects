import React, { useContext } from 'react'
import RecipeIngredientList from './RecipeIngredientList';
import { RecipeContext } from './App'

export default function Recipe(props) {
    const { handleRecipeDeleteButton } = useContext(RecipeContext)
    const { id, name, cookTime, servings, instructions, ingredients } = props
    return (
        <div className="recipe">
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div>
                    <button className="btn btn--primary mr-1">Edit ✏️</button>
                    <button className="btn btn--danger" onClick={() => handleRecipeDeleteButton(id)}>Delete 🗑️</button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings:</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time :</span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions:</span>
                <div className="recipe__value recipe__instruction recipe__value--indented">
                    {instructions}
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients :</span>
                <div className="recipe__value recipe__ingredient recipe__value--indented">
                    <RecipeIngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}
