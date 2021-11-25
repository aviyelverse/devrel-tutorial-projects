import React from 'react'
import Recipe from './Recipe';
import "../css/recipe-list.css"


export default function RecipeList(props) {
    const { recipes, handleRecipeAddButton, handleRecipeDeleteButton } = props
    return (
        <div className="recipe-list">
            <div>
                {recipes.map(recipe => {
                    return (<Recipe key={recipe.id} handleRecipeDeleteButton={handleRecipeDeleteButton} {...recipe} />)
                })}
            </div>
            <div className="recipe-list__add-recipe-list-button">
                <button className="btn btn--primary" onClick={handleRecipeAddButton}>+ Add Recipe Ingredients</button>
            </div>
        </div>
    )
}
