# useState Implementation

link:https://www.codementor.io/@lizraeli/implementing-the-usestate-hook-13o3wjkh3j

```js
const MyReact = {
  state: null,
  stateInitialized: false,
  setState(newState) {
    this.state = newState;
    ReactDOM.render(<Counter />, rootElement);
  },
  useState(initialValue) {
    if (!this.stateInitialized) {
      this.stateInitialized = true;
      this.state = initialValue;
    }
    return [this.state, this.setState];
  },
};

// example
const Counter = () => {
  const [count, setCount] = MyReact.useState(0);
  // ...
};
```
