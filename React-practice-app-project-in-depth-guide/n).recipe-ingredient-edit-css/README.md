## Applying some awesome styling to the app 

### recipe-edit.css
```css
.recipe-edit{
    padding:30px;
    padding-top:10px;
    position:fixed;
    right:0;
    top:0;
    width:50%;
    max-height:100%;
    overflow-y:auto;
}
.recipe-edit__remove-edit-btn-con{
    text-align:end;
}
.recipe-edit__remove-edit-button{
    padding:0;
    border:none;
    background:none;
    outline:none;
    font-size: 2rem;
}
.recipe-edit__details-grid{
    display:grid;
    grid-template-columns: auto 1fr;
    row-gap: 40px;
    column-gap:100px;
}
.recipe-edit__label{
    font-weight:bold;
}
.recipe-edit__input{
    border: 2px solid black;
    border-radius: 15px;
    font-size:inherit;
    padding: 5px 10px;
    outline: none;
    width:100%
}
.recipe-edit__ingredient-grid{
    display:grid;
    grid-template-columns:repeat(3, auto);
    gap:20px;
    margin-top : 30px;
    margin-left: 30px;
}
.recipe-edit__add-ingredient-btn-container{
    margin-top: 25px;
    text-align: center;
}
@media (max-width:1000px;){
    .recipe-edit__details-grid,
    .recipe-edit__ingredient-grid{
        grid-template-columns:1fr;
    }
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
