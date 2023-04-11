# use state properly

link:

- https://www.innoq.com/en/articles/2023/02/blueprints-how-objects-work-in-javascript/
- https://cplusplus.com/forum/beginner/279316/#:~:text=The%20address%20of%20a%20struct,of%20its%20first%20member%20variable.&text=struct%20myStruct%7B%20int%20number%3B%20char,prints%20out%20the%20same%20address.

핵심:

1. #1: immutability of state
2. #2: asynchronicity of state
3. #3. individuality of state keys.

(내 생각...)
c언어와의 관계:

1. c언어의 struct이 JavaScript의 object이다
2. c언어의 struct이 TypeScript의 interface이다
3. struct의 주소 vs object 주소

```c
struct Human
{
    int age;
    char* name;
    char phoneNum[16];
}
void main ()
{
    struct Human user = {
        20, "hong", "123-456"
    }
}
```

같은 코드, 다른 언어

```ts
// // js
// const Human =
// {
//     age: 20,
//     name: "hong",
//     phoneNum : "123-456",
// }
interface Human
{
    age:int;
    name:string;
    phoneNum:string;
}

let user: Human = {20, "hong", "123-456"};

const main = (user: Human) =>
{
    console.log(user);

}

```

```js
// https://reactjs.org/docs/state-and-lifecycle.html
// 5. State and Lifecycle
import React from 'react';
import ReactDOM from 'react-dom';

// Using State Correctly

// #1: immutability of state
// Wrong
// we cannot mutate the state object
this.state.comment = 'Hello';

// Correct
// we must create a new object for the state, and deep copy the content + updated value. Make sure that the state variable is pointing to the new object.
// the state object is immutable.
/*
// originally, this.state is pointing at the object {comment:"hi"}
this.state = {comment:"hi"}
// by doing, this.setState({comment: "Hello"})

steps:
1. create a new object with the same key in the original state
-> {comment: }
2. store the updated value or information
-> {comment: "Hello"}
3. make sure this.state is pointing at the new object.
// this.state object is pointing at {comment: "Hello"}
this.state = {comment: "Hello"}

transformation:
from : this.state = {comment:"hi"} // this.state is pointing at {comment:"hi"}
to : this.state = {comment: "Hello"} // this.state is pointing at  {comment: "hello"}
*/
this.setState({ comment: 'Hello' });

// #2: asynchronous of state
// asynchronous
// this.props.increment might be ready to evaluate before setState runs
/*
this.props.increment가 비동기일 경우,
this.state.counter + this.props.increment를 evaluate하기 전에
this.props.increment값이 준비가 안되있기 때문에
this.state.counter + this.props.increment를 evaluate할 때 논리상 error가 생긴다.
*/
// Wrong
this.setState({ // arg is an object
  counter: this.state.counter + this.props.increment,
});

// Correct
/*
// 함수화 함으로써, 만약 props가 준비가 되면 props.increment가 evaluate할 준비가 된 것 이고, props가 inputs으로 passed in되어서 state.counter + props.increment를 할수 있다. 함수가 함수 안에 있는 evaluation이나 operation을 하기 전에 그 evaluation(= operation)에 필요한 정보를 input으로 안전하게 획득한 후에 계산을 할 수 있다.

const func1 = (if condition of all the required information met) => {
    let result;
    then do
    result = operation1;
    result = evaluation2;
    return result;
}
*/
this.setState((state, props) => ({ // arg is a function.
  counter: state.counter + props.increment
}));

// Correct
this.setState(function (state, props) {
  return {
    counter: state.counter + props.increment
  };
});

// #3. individuality of state keys.
// if I'm fetching a data from backend to frontend and the communication between frontend and backend is asynchronous, and the state need to be updated one by one if necessary, then we can do it like below.
/*
states:
posts:[]
comments:[]

or

this.state is pointing at the object -> { posts:[], comments:[] }
*/
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

// useEffect in functional Component
componentDidMount() {
    // asynchronously receiving the response data
    fetchPosts().then(response => {
        // once I get a response, that means I'm ready to have an updated inputs just like function has its input before evaluating inner operation. Hence, it is safe to update in an object form
        // setState({key:value})
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
