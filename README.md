# React

# Foundation

- Composable
- Declarative
  - What should be done? Just tell me what to do, and I’ll worry about how I get it done

## Controlled Component & Uncontrolled Component

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

4. What does it mean for something to be "declarative" instead of "imperative"?

- Declarative: tell the computer what to do and expect it to handle the details
- Imperative: tell the computer HOW to do step by step

5.  What does it mean for something to be “composable”?

    We have small pieces that we can put together to make something larger / greater than the individual pieces

6.  What is a React component?

    A function that returns React element (JSX). Can be reused over and over.

7.  What do props help us accomplish?

    Make a component more reusable.

8.  How do you pass a prop into a component?
    <MyAwesomeHeader title="???" />
9.  Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
    No, because the JSX we use to describe native DOM elements will
    be turned into REAL DOM elements by React. And real DOM elements
    only have the properties/attributes specified in the HTML specification.
    (Which doesn't include properties like `blahblahblah`)
10. How do I receive props in a component?
function Navbar(props) {
return (
<header>
...
</header>
)
}
11. What data type is `props` when the component receives it?

    An Object

12. How would you describe the concept of "state"?
    A way for React to remember saved values from within a component.
    This is similar to declaring variables from within a component,
    with a few added bonuses (which we'll get to later)

13. When would you want to use props instead of state?
    Anytime you want to pass data into a component so that
    component can determine what will get displayed on the
    screen.

14. When would you want to use state instead of props?
    Anytime you want a component to maintain some values from
    within the component. (And "remember" those values even
    when React re-renders the component)

15. What does "immutable" mean? Are props immutable? Is state immutable?
    Unchanging. Props are immutable. State is mutable.

16. You have 2 options for what you can pass in to a
    state setter function (e.g. `setCount`). What are they?
        a. New value of state (setCount(42))
        b. Callback function - whatever the callback function
        returns === new value of state
17. When would you want to pass the first option (from answer
    above) to the state setter function?
    Whenever you don't need the previous value of state to determine
    what the new value of state should be.
18. When would you want to pass the second option (from answer
    above) to the state setter function?
    Whenever you DO need the previous value to determine the new value

19. What is "conditional rendering"?
    When we want to only sometimes display something on the page
    based on a condition of some sort
20. When would you use &&?
    When you want to either display something or NOT display it
21. When would you use a ternary?
    When you need to decide which thing among 2 options to display
22. What if you need to decide between > 2 options on
    what to display?
    Use an `if...else if... else` conditional or a `switch` statement

        ```jsx
        function App() {
        let someVar
        if () {
        someVar = <SomeJSX />
        } else if() {
        ...
        } else {
        ...
        }
        return (
        <div>{someVar}</div>
        )
        }
        ```

23. In a vanilla JS app, at what point in the form submission
    process do you gather all the data from the filled-out form?
    Right before the form is submitted.
24. In a React app, when do you gather all the data from
    the filled-out form?
    As the form is being filled out. The data is all held in local state.
25. Which attribute in the form elements (value, name, onChange, etc.)
    should match the property name being held in state for that input?
    `name` property.
26. What's different about saving the data from a checkbox element
    vs. other form elements?
    A checkbox uses the `checked` property to determine what should
    be saved in state. Other form elements use the `value` property instead.
27. How do you watch for a form submit? How can you trigger
    a form submit?

- Can watch for the submit with an onSubmit handler on the `form` element.
- Can trigger the form submit with a button click.
