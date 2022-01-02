//Scope

//Global Scope

var a = '1';
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   var b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c)
// }

// test()

// console.log('Global Scope: ', a, b, c)

// if(true) {
//   //Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If scope: ', a, b, c)
// }

// the a variable is hoisted 
// var can cause security issues

// This changes the value of the global a
//which is not good
// for (let a = 0; a < 10; a++){
//   console.log(`Loop: ${a}`)
// }

console.log('Global Scope: ', a, b, c)