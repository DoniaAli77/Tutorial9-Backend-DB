// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places 
// where zero or more arguments (for function calls) or elements (for array literals) are expected. 
// In an object literal, the spread syntax enumerates the properties of an object 
// and adds the key-value pairs to the object being created.

let x={
    uni:"giu",
    sems:"4th"

}
console.log('x: ',x);
let y= {
    ...x, major:"cs",course:"se"
}
console.log("y: ",y);

let a=[1,2,3]
let b=[...a,4,5]
console.log("b: ",b)

const obj = { ...a }
console.log("obj: ",obj)


function sum(x, y, z) {
    return x + y + z;
  }
let s=sum(...a);
console.log("sum: ",s)

// for more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
