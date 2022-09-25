# How do you write a pure JavaScript function

### A pure function is a function that always returns the same result if the same arguments are passed.

```
function calculateGST( productPrice ) {
        return productPrice \* 0.05;
}
```

# What is inheritance and how do you make a child from a parent class?

### Inheritence is a feature by which parent class properities are inherited to a child class

### we can make a child class from parent class using _`extends`_ keyword.

```
class Animal {} // parent class
class Dog extends Animal{} // child class extending parent
```

# What is class based React component ?

### class based react component is a child of React.component and it has a built-in render method.

# What is the difference between functional React component and class based React component ?

### A class component is a child extended from react component with built-in render method where as functional component is a plain javascript function that returns react element

# When do we need to use class based components instead of functional components

### Class Components should be preferred whenever we have the requirement with the state of the component.

# What is the use cases of class based component ?

### the use case with the State of the component and rendering the UI based on the Component State are some use cases of class based components

# Which type of component do use most frequently ? functional or class-based component

### functional components

# What is React life cycle ? (not covered yet) ?

### each component in react has a life cycle by which you can monitor and manipulate it

# What is state in React ? (not covered yet)

### the state in react is a built-in object that is used to contain data or information about the component
