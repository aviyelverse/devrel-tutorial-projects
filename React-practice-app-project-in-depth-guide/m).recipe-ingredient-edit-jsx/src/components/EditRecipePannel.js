import React from 'react';
import '../css/App.css';
import IngredientEdit from './IngredientEdit';

export default function EditRecipePannel() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label HtmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label HtmlFor="cookTime">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" />
                <label HtmlFor="servings">Servings</label>
                <input type="number" min="1" id="servings" name="servings" />
                <label HtmlFor="instructions">Instructions</label>
                <textarea id="instructions" name="instructions" />
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <IngredientEdit />
                <br />
                <IngredientEdit />
            </div>
            <div>
                <button>+ Edit Recipe Ingredient</button>
            </div>
        </div>
    )
}
