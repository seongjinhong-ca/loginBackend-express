
(((ref1, ref2) => ref1 === ref2)(value, value)) // 42 ???

// let a = ((value) => (((ref1, ref2) => ref1 === ref2)(value, value)))("Jupeter")
// console.log(a)
// Closures and Scope
((x) => (y) => x)(1)(2) 
/*
((x) => (y) => x)(1) ..
((1) => (y) => x)()(2) 
((y) => x)(2) //{x: 1, ...}
x //{x: 1, y: 2} // name, bind, value
1
*/

console.log()