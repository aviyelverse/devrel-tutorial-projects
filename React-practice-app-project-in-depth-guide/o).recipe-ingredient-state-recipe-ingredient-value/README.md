## Making the edit button to actually change the state.

## At first add state inside App() on App.js 
```jsx
const [selectedRecipeUnique, setSelectedRecipeUnique] = useState();
```
## Inside same function add the following code
```jsx
const selectedRecipies = recipes.find(recipe => recipe.id === selectedRecipeUnique)
```
## The above code is just trying to tell you to go through all of the recipies find the recipe with the given unique id of "selectedRecipeUnique" and that will be stored on "selectedRecipies" and if there is no recepie with that id it will return undefined value.


## after that create a function called handleRecipeSelect and pass id to it .
```jsx
  function handleRecipeSelect(id) {
    setSelectedRecipeUnique(id)
  }
```
## Now pass it to the context

## Now inside EditRecipePanel add the value attributes as follows:
```jsx
.
.
.
.
.
.
    <label HtmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" id="name" name="name" value={recipe.name} className="recipe-edit__input" />
                <label HtmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" id="cookTime" name="cookTime" value={recipe.cookTime} className="recipe-edit__input" />
                <label HtmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" id="servings" name="servings" value={recipe.servings} className="recipe-edit__input" />
                <label HtmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea id="instructions" name="instructions" className="recipe-edit__input" value={recipe.instructions} />
                .
.
.
.
.
.

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
