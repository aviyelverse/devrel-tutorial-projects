import React from 'react'
import Recipe from './Recipe';
import "../css/recipe-list.css"


export default function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
            <div>
                {recipes.map(recipe => {
                    return (<Recipe key={recipe.id} {...recipe} />)
                })}
            </div>
            <div className="recipe-list__add-recipe-list-button">
                <button className="btn btn--primary">+ Add Recipe Ingredients</button>
            </div>
        </div>
    )
}
