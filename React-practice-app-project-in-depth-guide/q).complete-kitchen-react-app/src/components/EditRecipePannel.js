import React, { useContext } from 'react';
import '../css/App.css';
import IngredientEdit from './IngredientEdit';
import { RecipeContext } from './App';
import { v4 as uuidv4 } from 'uuid';

export default function EditRecipePannel({ recipe }) {
    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, { ...recipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(r => r.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
    }

    function handleRecipeIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ ingredients: [...recipe.ingredients, newIngredient] })
    }

    function handleRecipeIngredientDelete(id) {
        handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id) })
    }


    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-edit-btn-con">
                <button className="recipe-edit__remove-edit-button" onClick={() => handleRecipeSelect(undefined)}>&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" value={recipe.name} className="recipe-edit__input" onChange={e => handleChange({ name: e.target.value })} />
                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" value={recipe.cookTime} className="recipe-edit__input" onChange={e => handleChange({ cookTime: e.target.value })} />
                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" value={recipe.servings} className="recipe-edit__input" onChange={e => handleChange({ servings: parseInt(e.target.value) || '' })} />
                <label htmlFor="instructions" className="recipe-edit__label" >Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" value={recipe.instructions} onChange={e => handleChange({ instructions: e.target.value })} />
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <IngredientEdit key={ingredient.id} handleIngredientChange={handleIngredientChange} ingredient={ingredient} handleRecipeIngredientDelete={handleRecipeIngredientDelete} />
                ))}

            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary" onClick={() => handleRecipeIngredientAdd()}>✏️ Edit Recipe Ingredient</button>
            </div>
        </div>
    )
}
