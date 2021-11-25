# React-Projects-with-detailed-explanation
Full-on hands-on tutorial with a detailed explanation. From simple app to full-on fully functional full-stack react application.Various topics covered for example,basic intro to jsx , react functional components ,react class components, implementing state, using hooks & props,storing data in localStorage,etc.

## Project Demonstration
Project (counter app) [Live demo](https://reactcontextimplement.netlify.app/) | Project (Kitchen App) [Live demo](https://completekitchenapp.netlify.app/)
-------------------------|--------------------------:
![4PLL6vk4hv](https://user-images.githubusercontent.com/37651620/92783286-5e095c00-f3c5-11ea-9166-e79ea5ab0c2b.gif) | ![Complete_Project](https://user-images.githubusercontent.com/37651620/92781623-03233500-f3c4-11ea-9462-2d0e60246a50.gif)

---
## 1).javascript-xml-intro ==> [Its Live](https://javascriptxmlintro.netlify.app/)
### Intro To Jsx (JavaScript XML)
=============================
JSX is language extension for writing the UI logic for your React components. It gets transpiled by Babel to calls to React.createElement. Even though opinions are very polarized about the use of JSX, you'll find that most React developers really enjoy it. In this post we'll cover what you need to know to get up and running with writing the UI for React components using JSX.
### Why JSX?
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called "components" that contain both. We will come back to components in a further section, but if you're not yet comfortable putting markup in JS, this talk might convince you otherwise. React doesn't require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages. With that out of the way, let's get started!
### Embedding Expressions in JSX
In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions. In the example below, we embed the result of calling a JavaScript function, formatName(user), into an h1 element.
```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
          firstName: 'Harper',
  lastName: 'Perez'
};
const element = (
      <h1>
          Hello, {formatName(user)}!
  </h1>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Try it on CodePen We split JSX over multiple lines for readability. While it isn't required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion. JSX is an Expression Too After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX You may use quotes to specify string literals as attributes:
```jsx
const element = <div tabIndex="0"></div>;
```
You may also use curly braces to embed a JavaScript expression in an attribute:
```jsx
const element = <img src={user.avatarUrl}></img>;
```
Don't put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

### Specifying Children with JSX
If a tag is empty, you may close it immediately with />, like XML:
```jsx
const element = <img src={user.avatarUrl} />;
```
JSX tags may contain children:
```jsx
const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
);
```
### JSX Prevents Injection Attacks

It is safe to embed user input in JSX:
```jsx
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that's not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
### JSX Represents Objects
Babel compiles JSX down to React.createElement() calls. These two examples are identical:
```jsx
const element = (
      <h1 className="greeting">
        Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
      {className: 'greeting'},
  'Hello, world!'
);
```
React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
```jsx
// Note: this structure is simplified
const element = {
        type: 'h1',
  props: {
        className: 'greeting',
    children: 'Hello, world!'
  }
};
```
These objects are called "React elements". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.
## It's Live 🎉 Visit here ==>https://javascriptxmlintro.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3m9X9Ur)
---
---
---
## 2).class-component-counter ==> [Its Live](https://classbasedcomponent.netlify.app/)
![class_based_counter](https://user-images.githubusercontent.com/37651620/92363174-d4316880-f110-11ea-929d-746b70414465.png)
## It's Live 🎉 Visit here ==>https://classbasedcoponent.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2FmwHWM)
---
---
---
## 3).function-component-counter ==> [Its Live](https://functionbasedcomponent.netlify.app/)
![function_based_counter](https://user-images.githubusercontent.com/37651620/92414188-e5ab5c80-f172-11ea-989b-a51b821badfc.png)
## It's Live 🎉 Visit here ==>https://functionbasedcomponent.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2R2DOGn)
---
---
---
## 4).react-context ==>  [Its Live](https://reactcontextimplement.netlify.app/)
![react-context](https://user-images.githubusercontent.com/37651620/92418322-aedf4180-f186-11ea-85ca-c36ea6c69bca.png)
## It's Live 🎉 Visit here ==>https://reactcontextimplement.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3bA6Erb)
---
---
---

## 5).continious-deployment-continious-integration
Build project npm run build | git 
-------|------
![build](https://user-images.githubusercontent.com/37651620/92791920-d1629c00-f3cc-11ea-90a0-ec4d888daf5c.png)|![build2](https://user-images.githubusercontent.com/37651620/92791926-d293c900-f3cc-11ea-9d83-0b29198d7f56.png)

upload that build folder in netlify
------|
![build7](https://user-images.githubusercontent.com/37651620/92791928-d32c5f80-f3cc-11ea-9233-8344e7ed4466.png)|

login to netify select new site from git | select github 
-------|--------:
![build3](https://user-images.githubusercontent.com/37651620/92792382-34ecc980-f3cd-11ea-8439-0ec144cc79c8.png)|![build4](https://user-images.githubusercontent.com/37651620/92792391-36b68d00-f3cd-11ea-9f05-062acb64497b.png)


select your repo | Enter npm run build command adn build directory
---------|-------:
![build5](https://user-images.githubusercontent.com/37651620/92792396-36b68d00-f3cd-11ea-90da-b3c1a0dc258a.png)|![build6](https://user-images.githubusercontent.com/37651620/92792398-374f2380-f3cd-11ea-94e1-dcaf68f57a55.png)

---
---
---

## 6).kitchen-app-component-breakdown  ==>  [Its Live](https://kitchenappcomponent.netlify.app/)
![kitechen-app-component-breakdown](https://user-images.githubusercontent.com/37651620/92796392-df1a2080-f3d0-11ea-93bc-5643a90b748f.png)
## It's Live 🎉 Visit here ==>https://kitchenappcomponent.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2ZrhYRB)
---
---
---

## 7).ingredient-jsx  ==>  [Its Live](https://ingredientjsx.netlify.app/)
![ingredient-jsx](https://user-images.githubusercontent.com/37651620/92802487-44244500-f3d6-11ea-9de0-013ba3fc4ea9.png)
## It's Live 🎉 Visit here ==>https://ingredientjsx.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3ijx6YJ)
---
---
---
## 8).recipe-ingredient ==>  [Its Live](https://recipeingredient.netlify.app/)
![recipe-ingredient-styling](https://user-images.githubusercontent.com/37651620/92802954-ae3cea00-f3d6-11ea-8df5-bd8bbd68315d.png)
## It's Live 🎉 Visit here ==>https://recipeingredient.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3bJ6HB9)
---
---
---
## 9).complete-recipe-ingredient ==>  [Its Live](https://completerecipeingredient.netlify.app/)
![styling-recipe-ingredient](https://user-images.githubusercontent.com/37651620/92804094-c4977580-f3d7-11ea-974e-c2031c6f3b75.png)
## It's Live 🎉 Visit here ==>https://completerecipeingredient.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3m5QjiZ)
---
---
---
## 10).recipe-ingredient-add-remove-interactivity==>  [Its Live](https://recipeingredientbutton.netlify.app/)
![recipe-ingredient-button](https://user-images.githubusercontent.com/37651620/92804528-1e983b00-f3d8-11ea-8dc4-80fabc9bab99.png)
## It's Live 🎉 Visit here ==>https://recipeingredientbutton.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2FsxUvW)
---
---
---
## 11).recipe-ingredient-add-remove-context==>  [Its Live](https://recipeingredientbuttoncontext.netlify.app/)
![recipe-ingredient-button-context](https://user-images.githubusercontent.com/37651620/92806157-75524480-f3d9-11ea-9d87-b24473aba61b.png)
## It's Live 🎉 Visit here ==>https://recipeingredientbuttoncontext.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/32eN1ls)
---
---
---
## 12).useEffect-hook-localstorage==>  [Its Live](https://useffectlocalstorage.netlify.app/)
![useffectlocalstorage](https://user-images.githubusercontent.com/37651620/92806455-bfd3c100-f3d9-11ea-89d0-91a169845727.png)
## It's Live 🎉 Visit here ==>https://useffectlocalstorage.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/32g3PIE)
---
---
---
## 13).recipe-ingredient-edit-jsx==>  [Its Live](https://recipeingredientedit.netlify.app/)
![recipe-ingredient-edit](https://user-images.githubusercontent.com/37651620/92807052-41c3ea00-f3da-11ea-9564-ded5e3fb445a.png)
## It's Live 🎉 Visit here ==>https://recipeingredientedit.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3k2SQbG)
---
---
---
## 14).recipe-ingredient-edit-css==>  [Its Live](https://recipeingredienteditstyling.netlify.app/)
![recipe-ingredient-edit-styling](https://user-images.githubusercontent.com/37651620/92807878-f8c06580-f3da-11ea-9fe3-302a41515094.png)
## It's Live 🎉 Visit here ==>https://recipeingredienteditstyling.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2DNlyxM)
---
---
---
## 15).recipe-ingredient-state-recipe-ingredient-value==>  [Its Live](https://recipeingredientstate.netlify.app/)
![recipe-ingredient-state](https://user-images.githubusercontent.com/37651620/92808898-daa73500-f3db-11ea-8611-870bfaddb62f.png)
## It's Live 🎉 Visit here ==>https://recipeingredientstate.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/3hia3vW)
---
---
---
## 16).recipe-ingredient-input-interactivity==>  [Its Live](https://recipeingredientinput.netlify.app/)
![recipe-ingredient-input-interactivity](https://user-images.githubusercontent.com/37651620/92809341-3ffb2600-f3dc-11ea-8908-d7b3181c4e47.png)
## It's Live 🎉 Visit here ==>https://recipeingredientinput.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/2F8wneH)
---
---
---
## 17).complete-kitchen-react-app==>  [Its Live](https://completekitchenapp.netlify.app/)
![complete-kitchen-app](https://user-images.githubusercontent.com/37651620/92809829-b3049c80-f3dc-11ea-94b8-950227788c80.png)
## It's Live 🎉 Visit here ==>https://completekitchenapp.netlify.app/
## Project Source Code ==> [Here](https://bit.ly/35qVBzG)
---
