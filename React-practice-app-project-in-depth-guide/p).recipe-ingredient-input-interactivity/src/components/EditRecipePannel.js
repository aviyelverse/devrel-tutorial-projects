import React, { useContext } from 'react';
import '../css/App.css';
import IngredientEdit from './IngredientEdit';
import { RecipeContext } from './App';

export default function EditRecipePannel({ recipe }) {
    const { handleRecipeChange } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(r => r.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
    }


    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-edit-btn-con">
                <button className="recipe-edit__remove-edit-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label HtmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" value={recipe.name} className="recipe-edit__input" onInput={e => handleChange({ name: e.target.value })} />
                <label HtmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" value={recipe.cookTime} className="recipe-edit__input" onInput={e => handleChange({ cookTime: e.target.value })} />
                <label HtmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" value={recipe.servings} className="recipe-edit__input" onInput={e => handleChange({ servings: parseInt(e.target.value) || '' })} />
                <label HtmlFor="instructions" className="recipe-edit__label" >Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" value={recipe.instructions} onInput={e => handleChange({ instructions: e.target.value })} />
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <IngredientEdit key={ingredient.id} handleIngredientChange={handleIngredientChange} ingredient={ingredient} />
                ))}

            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">✏️ Edit Recipe Ingredient</button>
            </div>
        </div>
    )
}
