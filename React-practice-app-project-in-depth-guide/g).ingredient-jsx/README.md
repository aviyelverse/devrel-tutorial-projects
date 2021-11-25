## App.js
```jsx
import React from 'react';
import './App.css';
import RecipeList from './RecipeList';


function App() {
  return (
    <>
      <RecipeList recipes={arrayRecipe} />
    </>
  );
}

const arrayRecipe = [
  {
    id: 1,
    name: 'Mutton Biryani',
    cookTime: '12:30',
    servings: '3',
    instructions: ' 1.Boil the rice\n2.Fry the rice\n3.Fry the Mutton\n4. Tear the mutton\n5.Fry them both in the same pan\n6.Serve it and Enjoy!!',
    ingredients: [
      {
        id: 1,
        name: "mutton",
        amount: "3 kilogram",
      },
      {
        id: 2,
        name: "rice",
        amount: "2 kilogram",
      },
      {
        id: 3,
        name: "salt",
        amount: "15 gram",
      }
    ]
  },
  {
    id: 2,
    name: 'Readymade Chicken pizza',
    cookTime: '10:30',
    servings: '5',
    instructions: ' 1.Remove pizza from all packaging and shrink wrap.\n 2.Set oven rack to middle position and preheat oven to 450°F.\n3.Place pizza on middle rack.Do not use a pan or cookie sheet to bake pizza.\n4.Bake for 15-20 minutes or until pizza is golden brown.',
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 kilogram",
      },
      {
        id: 2,
        name: "wheat",
        amount: "1 kilogram",
      },
      {
        id: 3,
        name: "salt",
        amount: "12 gram",
      }
    ]
  },
  {
    id: 3,
    name: 'Juicy Burger',
    cookTime: '14:10',
    servings: '2',
    instructions: '1.Dump your ground meat into a bowl.\n2.Shape your burgers into patties, using your thumb to make an indentation in the center; this will keep the burgers from puffing up.\n3.Oil your grill or a cast-iron pan, and grill or sear those patties.\n4. Add your cheese and toast your buns. Let the cheese melt while the burgers are still on the grill; to speed things up, you can close the cover.\n5.Once your burgers iare finished cooking, and your cheese is melty and your buns are nicely charred, throw some condiments and toppings on those burgers.Bite it off!!',
    ingredients: [
      {
        id: 1,
        name: "Patties",
        amount: "4 kilogram",
      },
      {
        id: 2,
        name: "Buns",
        amount: "5 peice buns",
      },
      {
        id: 3,
        name: "Tomatoes",
        amount: "15 gram",
      }
    ]
  }
]

export default App;


```


## RecipeList.js 
```jsx

import React from 'react'
import Recipe from './Recipe';


export default function RecipeList({ recipes }) {
    return (
        <>
            <div>
                {recipes.map(recipe => {
                    return (<Recipe key={recipe.id} {...recipe} />)
                })}
            </div>
            <button>+ Recipe Ingredients</button>
        </>
    )
}

```



## Recipe.js
```jsx
import React from 'react'
import RecipeIngredientList from './RecipeIngredientList';

export default function Recipe(props) {
    const { name, cookTime, servings, instructions, ingredients } = props
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                    {instructions}
                </div>
            </div>
            <div>
                <span>Ingredients:</span>
                <div>
                    <RecipeIngredientList ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}

```

## RecipeIngredient.js
```jsx
import React from 'react'

export default function RecipeIngredient({ name, amount }) {

    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}


```

## RecipeIngredientList.js
```jsx
import React from 'react'
import RecipeIngredient from './RecipeIngredient';

export default function RecipeIngredientList({ ingredients }) {
    const ingredientsElements = ingredients.map(ingredient => {
        return (<RecipeIngredient key={ingredient.id} {...ingredient} />)
    })
    return (
        <div>
            {ingredientsElements}
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
