# life cycle

```js
// https://reactjs.org/docs/state-and-lifecycle.html
// 5. State and Lifecycle
import React from "react";
import ReactDOM from "react-dom";

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// the difference between function and class is how to manage local data/state
// Component == Clock
class Clock extends React.Component {
  // props == inputs from outside -. for this example, there is nothing for props b/c <Clock />
  constructor(props) {
    super(props); // props = {} // nothing is being passed from <Clock/> element
    // state == =local variable == object form
    this.state = { date: new Date() };
  }

  // useEffect == the action requires to do after the component is rendered from ReactDOM (converting virtual DOM -> real DOM)
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // unsubscribe == remove the component from the memory
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // updating the state object
    this.setState({
      date: new Date(),
    });
  }

  // rendering the component Clock
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  // ReactDOM.render(component, rootComponent);
  // <Clock {this is where the inputs are passed in}/>
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

setInterval(tick, 1000);
```
