import React, { useContext } from 'react'
import Recipe from './Recipe';
import "../css/recipe-list.css";
import { RecipeContext } from './App'


export default function RecipeList({ recipes }) {
    const { handleRecipeAddButton } = useContext(RecipeContext)
    return (
        <div className="recipe-list">
            <div>
                {recipes.map(recipe => {
                    return (<Recipe key={recipe.id} {...recipe} />)
                })}
            </div>
            <div className="recipe-list__add-recipe-list-button">
                <button className="btn btn--primary" onClick={handleRecipeAddButton}>🥣 Add Recipe Ingredients</button>
            </div>
        </div>
    )
}
