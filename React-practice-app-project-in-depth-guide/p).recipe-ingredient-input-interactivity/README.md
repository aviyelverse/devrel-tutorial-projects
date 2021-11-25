## Hooking up change events so anytime we edit, updates happens simultaneously

## setting up the intractions between the inputs and actual stored recipes state so anytime we change the inputs is going to update our states which is going to propagates throught entire applications and updates every single thing inside of that application

At First

#### In App.js
adding a function inside App.js
```jsx

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }
```

#### In EditRecipePannel.js
```jsx
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

```

#### In IngredientEdit.js
```jsx
import React from 'react'

export default function IngredientEdit({ ingredient, handleIngredientChange }) {

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }


    return (
        <>
            <input className="recipe-edit__input" type="text" value={ingredient.name} onInput={e => handleChange({ name: e.target.value })}></input>
            <input className="recipe-edit__input" type="text" value={ingredient.amount} onInput={e => handleChange({ amount: e.target.value })}></input>
            <button className="btn btn--danger">&times;</button>
        </>
    )
}

```


## Available Script

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
