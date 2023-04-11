link:
https://blog.logrocket.com/guide-usestate-react/#:~:text=useState%20is%20React%20Hook%20that,the%20setter%20function%20is%20called.

```js
import React from "react";
import ReactDOM from "react-dom";

// Specifying Attributes with JSX
let element3 = <div tabIndex="0"></div>; //use quotes to specify string literals as attributes
console.log(element);
/*
{
  type: "div",
  key: null,
  ref: null,
  props: {tabIndex: "0"},
  _owner: null,
  _store: {}
}
*/
// Specifying Children with JSX
//*
// const element = <img src={user.avatarUrl} />; //If a tag is empty
const element = // with children
  (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );

console.log(element);

/*
{
  type: "div",
  key: null,
  ref: null,
  props: {children: [
                      {type: "h1",
                        key: null,
                        ref: null,
                        props: {children: "Hello!"},
                        _owner: null,
                        _store: {}
                      },
                      {type: "h2",
                      key: null,
                      ref: null,
                      props: {children: "Good to see you here."},
                      _owner: null,
                      _store: {}
                      }
                    ]
          },
          _owner: null,
          _store: {}
}
*/

const element_copy = <h1 className="greeting">Hello, world!</h1>;

// Note: this structure is simplified
const element_copy_object = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

//*/

// JSX Prevents Injection Attacks
/*
const title = response.potentiallyMaliciousInput; // possible XSS (cross-site-scripting) attacks
const element = <h1>{title}</h1>;// This is safe:
//*/

// JSX is an Expression Too
/*
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

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
//*/
// JSX is an Expression Too
//*

//*/
// JSX is an Expression Too
//*

//*/
```
