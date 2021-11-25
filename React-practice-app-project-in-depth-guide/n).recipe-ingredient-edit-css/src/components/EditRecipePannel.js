import React from 'react';
import '../css/App.css';
import IngredientEdit from './IngredientEdit';

export default function EditRecipePannel() {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-edit-btn-con">
                <button className="recipe-edit__remove-edit-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label HtmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" className="recipe-edit__input" />
                <label HtmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" className="recipe-edit__input" />
                <label HtmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" className="recipe-edit__input" />
                <label HtmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" />
            </div>
            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <IngredientEdit />
                <IngredientEdit />
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary">✏️ Edit Recipe Ingredient</button>
            </div>
        </div>
    )
}
