import React from 'react';
import './App.css';

function App() {
  return (

    <div className="centerIntro">
      <h1>Intro To Jsx (JavaScript XML)</h1>
      <p>JSX is language extension for writing the UI logic for your React components. It gets transpiled by Babel to calls to React.createElement. Even though opinions are very polarized about the use of JSX, you’ll find that most React developers really enjoy it. In this post we’ll cover what you need to know to get up and running with writing the UI for React components using JSX.</p>
      <h3>Why JSX?</h3>
      <p>
        React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
        Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.
        React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
        With that out of the way, let’s get started!
      </p>

      <h3>Embedding Expressions in JSX</h3>
In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
      <pre>{`
        const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
`}
      </pre>
      <p>
        You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

        In the example below, we embed the result of calling a JavaScript function, formatName(user), into an h1 element.
</p>
      <pre>{`
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
`}</pre>
      <p>
        Try it on CodePen

        We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.

        JSX is an Expression Too
        After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

        This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
</p>
      <pre>
        {`
        function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
`}
      </pre>
      <h3>
        Specifying Attributes with JSX
        You may use quotes to specify string literals as attributes:
</h3>
      <pre>
        {`
        const element = <div tabIndex="0"></div>;
You may also use curly braces to embed a JavaScript expression in an attribute:

const element = <img src={user.avatarUrl}></img>;
`}
      </pre>
      <p>
        Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
</p>


      <h3>Specifying Children with JSX</h3>
      <p>If a tag is empty, you may close it immediately with />, like XML:</p>
      <pre>{`const element = <img src={user.avatarUrl} />;
JSX tags may contain children:

const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
);`}</pre>


      <h3>JSX Prevents Injection Attacks</h3>
      <p>It is safe to embed user input in JSX:</p>
      <pre>{`
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
`}</pre>
By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

      <h3>JSX Represents Objects</h3>
      <p>Babel compiles JSX down to React.createElement() calls.

      These two examples are identical:</p>
      <pre>{`
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
React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// Note: this structure is simplified
const element = {
        type: 'h1',
  props: {
        className: 'greeting',
    children: 'Hello, world!'
  }
};
`}</pre>
      <p>These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.</p>
      <br />
      <br />

    </div>
  );
}

export default App;
