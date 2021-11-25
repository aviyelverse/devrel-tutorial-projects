## App.css
```css
@import-normalize;
@import '../css/font.css';
@import '../css/button.css';

*,*::before,*::after{
  font-family: dance;
}


body{
  padding:0;
  margin:0;
}


html{
  font-size:25px;
}


```

## button.css
```css
.btn{
    border:none;
    background:none;
    outline:none;
    font-size:inherit;
    font-weight:bold;
    border-radius:5px;
    cursor:pointer;
    padding:5px 20px;
}

.btn--primary{
    color:white;
    background: #ee0979;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff6a00, #ee0979); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

.btn--primary:hover{
    background: #ff7e5f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #feb47b, #ff7e5f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #feb47b, #ff7e5f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
}
```

## font.css
```css
@font-face {
    font-family:dance;
    src: url('../fonts/Dance.woff') format(woff);
    font-weight: bold;
    font-style: italic;
}
```

## recipe-list.css 
```css
.recipe-list{
border-right:1px solid black;
min-height:100vh;
width:50%;

}

.recipe-list__add-recipe-list-button{
padding-top:30px;
padding-bottom:30px;
text-align:center;

}
```

## RecipeList.js
```jsx
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
