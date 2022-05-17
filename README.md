# Learn-React-Webpack
# Foundation

- Composable
- Declarative
    - What should be done? Just tell me what to do, and I’ll worry about how I get it done

# Q&A

1. Why do we need to “import React from “react” in our files?
    
    React is what defines JSX
    
2. If I were to console.log(page) in index.js, what would show up?
    
    A Javascript object. React element that describe what React should eventually add to the real DOM for us
    
3. What’s wrong with this code:

```
const page = (
      <h1>Hello</h1>
      <p>This is my website!</p>
)
```

We need our JSX to be nested under a single parent element

1. What does it mean for something to be "declarative" instead of "imperative"?
- Declarative: tell the computer what to do and expect it to handle the details
- Imperative: tell the computer HOW to do step by step

1. What does it mean for something to be “composable”?
    
    We have small pieces that we can put together to make something larger / greater than the individual pieces
    

1. What is a React component?
    
    A function that returns React element (JSX). Can be reused over and over.
    
2. What do props help us accomplish?
    
    Make a component more reusable.
    

1. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />
2. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)
3. How do I receive props in a component?
function Navbar(props) {
return (
<header>
...
</header>
)
}
4. What data type is `props` when the component receives it?
    
    An Object
    
5. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)

1. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

1. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component)

1. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.

1. You have 2 options for what you can pass in to a
state setter function (e.g. `setCount`). What are they?
    
    a. New value of state (setCount(42))
    b. Callback function - whatever the callback function
    returns === new value of state
    
2. When would you want to pass the first option (from answer
above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.
3. When would you want to pass the second option (from answer
above) to the state setter function?
Whenever you DO need the previous value to determine the new value
