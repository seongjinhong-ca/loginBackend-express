// functions that evaluate to functions
// function programming. Haskell. 

// (() => (() => 0))()

// (() => () => true)()()//=> true

console.log((() => () => true)()())
console.log((() => true)())
console.log(true)