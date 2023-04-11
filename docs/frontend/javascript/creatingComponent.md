link:
https://www.youtube.com/watch?v=X2e4eoL5iPw&list=PLo3AHtncM26y0qX58gjc_QrkYlBCzQ2R_&index=16

Component:

- element를 만들기 위한 틀
- 여러 element들이 비슷한 틀안에서 그들만의 properties를 inputs으로 색깔이나, element에 대한 정보를 다르게 display하는 것

props 특징:

- property for individual element
- read-only

```js
React.createComponent(type, props, children);

// props is an object (== {}) containing properties
// children can be one kind of properties
// property can be: component as a children, attributes(data value or callback function)
// check react04.props_useState2.md
```

how does input works in Component?

- the component take a props as a input and props is an object == ({...}).
- inside the props = {children:{}, key:value}

key can be:

- children
- attribute variable from element

value can be:

- value
- function
- object : set of values or functions
- elements can be a value for children object
  요약:
  Component is a function that is taking in either object, a value, function or a element as a props.
