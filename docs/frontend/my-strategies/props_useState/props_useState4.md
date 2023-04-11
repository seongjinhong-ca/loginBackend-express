# how React creates a component and how React creates (state, setState) pair from useState()method. And when and how the component render the updated state.

link:
https://www.codementor.io/@lizraeli/implementing-the-usestate-hook-13o3wjkh3j

```js
const MyReact = {
  // 1. this is where the {state, setState} pair is stored.
  stateArr: [],
  currentStateIndex: 0,
  component: null,
  // 2. creating the useState() to initialize the {state, setState} pair
  useState(initialValue) {
    // if we reached beyond the last element of the array
    // We will need create a new state
    if (this.currentStateIndex === this.stateArr.length) {
      // statePair = {key1:value1, key2:value2} // key1 == value, key2 == setState
      // {value: expression of value, setState:expression of function}
      const statePair = {
        value: initialValue,
        setState(newValue) {
          statePair.value = newValue;
          MyReact.currentStateIndex = 0;
          // this is where `the React DOM rendering` occurs == Virtual DOM and Real DOM compare each other and updates the change
          ReactDOM.render(<MyReact.component />, rootElement);
        },
      };

      this.stateArr.push(statePair);
    }
    // get the current state and setState before incrementing the index
    const currentStatePair = this.stateArr[this.currentStateIndex];
    this.currentStateIndex += 1;
    return [currentStatePair.value, currentStatePair.setState];
  },
  // 3. React passes in the component, and it is rendering the component.
  render(component, rootElement) {
    this.component = component;
    this.rootElement = rootElement;
    // this is where `the React DOM rendering` occurs == Virtual DOM and Real DOM compare each other and updates the change
    ReactDOM.render(<this.component />, this.rootElement);
  },
};
```

`component` is a `function` that takes in props(== an object that is a set of all attributes in element) as a input.

`element` is `new Component()`, new라는 키워드를 사용해서 Component라는 이름의 객체(instance)를 만든 것, `element`은 run한 객체(instance) of component that has attributes( == properties).

`props` is an object (=={attr1: value1, attr2: value2 ...}) that has all the attributes of an `element` as an input.

`attributes` is an input or properties of `element`.

```js
// function == Component -> const Human = () => {...}
// props                 -> { name:"hong-gil-dong", age:27, gender:"male" }
const Human = ({ name, age, gender }) => {
  [nickname, setNickName] = useState("hello");

  return (
    <>
      <h1>
        This is {name}, {gender}, {age} years old, but you can also call me
        {nickname}
      </h1>
    </>
  );
};
// Element               -> <Human ...attributes />
// attributes            -> name="hong-gil-dong" age={27} gender="male"
const human1 = <Human name="hong-gil-dong" age={22} gender="male" />;
```

When the state has changed or props(the input of the component) has changed, the component is re-rendered.

steps:

1. event occurs.
2. event handler(onClick, onChange etc) triggered.
3. setState() triggered.
4. state or props value changed.
5. goes to ReactDOM.render(component, rootComponent) = comparing virtual DOM and real DOM and updates the changes
6. once it is updated, render the return() 함수.

this.state = {}
