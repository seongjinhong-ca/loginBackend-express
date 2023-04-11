props == input

```js
import React from "react";
import ReactDOM from "react-dom";

// Specifying Attributes with JSX
//*
let element = <div tabIndex="0"></div>; //use quotes to specify string literals as attributes
console.log(element);

let ele = (
  <input
    type="email"
    name="email"
    value={"email"}
    onChange={() => {
      return "onChange";
    }}
  ></input>
);

console.log(ele);
```
