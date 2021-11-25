import React, { useState, useEffect } from 'react';
import '../css/App.css';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';


export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = 'recipeIngredientReact.recipes'

function App() {
  const [recipes, setRecipes] = useState(arrayRecipe);


  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAddButton,
    handleRecipeDeleteButton
  }


  function handleRecipeAddButton() {
    const newRecipeItem = {
      id: uuidv4(),
      name: 'Test',
      cookTime: '12:30',
      servings: '30',
      instructions: 'Instruction test',
      ingredients: [{

        id: uuidv4(),
        name: "test_ingredient",
        amount: "1kilogram"
      }]
    }
    setRecipes([...recipes, newRecipeItem])
  }


  function handleRecipeDeleteButton(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }



  return (
    <RecipeContext.Provider value={recipeContextValue}>

      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>

  );



}


const arrayRecipe = [
  {
    id: 1,
    name: 'Mutton Biryani',
    cookTime: '12:30',
    servings: '3',
    instructions: '1.Boil the rice.\n2.Fry the rice.\n3.Fry the Mutton.\n4. Tear the mutton.\n5.Fry them both on same pan.\n6.Serve it and Enjoy!!',
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
    instructions: '1.Remove pizza from all packaging and shrink wrap.\n2.Set oven rack to middle position and preheat oven to 450°F.\n3.Place pizza on middle rack.Do not use a pan or cookie sheet to bake pizza.\n4.Bake for 15-20 minutes or until pizza is golden brown.',
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
