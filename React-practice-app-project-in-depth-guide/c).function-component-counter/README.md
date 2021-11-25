<p>Functional components are some of the more common components and are simply a JavaScript functions. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree.</p>

### creation of functional components.
```bash
import React from 'react';  
import ReactDOM from 'react-dom';  
  
function FirstFunction() 
{ 
  return <h1>Hello!!! there</h1>; 
} 
  
export default FirstFunction; 
```

We can also use a functional component into another component.

### The use of functional component in other component.

```bash
import React from 'react';  
  
function FirstOne()  
{ 
return ( 
<h1>Yoo!! from the First One</h1> 
); 
} 
  
function ExampleTest() 
{ 
    return ( 
    <FirstOne/> 
    ); 
} 
  
export default FirstOne; 
```

Functional components lack a significant amount of features as compared to class-based components. The gap is filled with the help of a special ReactJS concept called “hooks”. Hooks are special functions that allow ReactJS features to be used in functional components.Functional components do not have access to dedicated state variables like class-based components. The only “state” that a functional component effectively has access to are the props passed to it from its parent component. ReactJS has access to a special hook called useState() that can be used for giving the illusion of working with the state in functional components. The useState() is used to initialize only one state variable to initialize multiple state variables, multiple useState() declarations are required. The first value returned is the initial value of the state variable, while the second value returned is a reference to the function that updates it. When the state variable needs to be updated, it can be done by calling the update function and by updating the state variable directly inside it.

### The use of useState() hook.
```bash
import React, { useState } from 'react';  
   
function FirstOne() { 
  const [message, setMessage] = useState(true);       
      return ( 
        <div> 
        <button onClick = {() => setMessage(!message)}> 
          Click Here! 
        </button> 
        {message?<h1>Yooo!! Hello There</h1>: 
                <h1>I am general Kenobi</h1>} 
        </div> 
        ); 
  } 
  
export default FirstOne; 

```


Functional components do not have access to lifecycle functions like class-based components do since lifecycle functions need to be defined within the boundaries of a class. If lifecycle functions need to be used with functional components, a special React hook called useEffect() needs to be used. It is worth noting that useEffect() isn’t an exact duplicate of the lifecycle functions – it works and behaves in a slightly different manner.

### The use of useEffect() hook.
```bash
import React, { useEffect } from 'react'; 
  
function Testing() { 
  useEffect(() => { 
    console.log("Mounting..."); 
  }); 
      return ( 
      <h1> 
        yoo....! 
      </h1> 
      ); 
} 
  
export default Testing; 
```



Data is passed from the parent component to the child components in the form of props. ReactJS does not allow a component to modify its own props as a rule. The only way to modify the props is to change the props being passed to the child component. This is generally done by passing a reference of a function in the parent component to the child component. Props have more significance in functional components for the simple reason that functional components do not have access to a state, unlike class-based components.

### The use of props.

```bash
import React, { useState } from 'react';  
import props from 'prop-types'; 
  
function Testing() { 
  return( 
    <h1>{props.data}</h1> 
    ); 
    } 
    function propsExample() 
    {         
    const [message, setMessage] = useState(true); 
        return ( 
        <div> 
          <button onClick = {() => setMessage(!message)}> 
            Click Here! 
          </button> 
          {message? 
            <Testing data="YOOO!! Hello there"/>: 
            <Testing data="General Kenobi"/>} 
        </div> 
        ); 
    } 
  
export default Testing; 
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
