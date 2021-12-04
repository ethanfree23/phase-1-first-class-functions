const { spy } = require("chai")


function receivesAFunction(spy) {
    return spy()
}

function returnsANamedFunction() {
    return function fn(){} //returns a named function means return function name(){}
}

function returnsAnAnonymousFunction() {
    return (function(){"Hi"}) //this is anonymous because there is no name for function, just says function() returns something. This is inside another function, so only can be called when main fucntion is invoked
}

// function receivesAFunction(spy) {
//     spy();
// }

// function returnsANamedFunction(){
//     return function fn(){};
// };


// function returnsAnAnonymousFunction(){
//     return function () {
//         return "Hi";
//     }
// }


/*
Passing functions as arguments:
- we can pass numbers, strings, arrays, and objects
- we can also pass functions
* functions are objects

This is how we pass an object as a function:
function iReturnThings (thing) {
  return thing;
}

iReturnThings({ firstName: 'Brendan', lastName: 'Eich' });
// => {firstName: "Brendan", lastName: "Eich"}

this is how we pass a function as a function:
iReturnThings(function () { return 4 + 5; });
// => ƒ () { return 4 + 5; }
^ this is not invoked however

to invoke, add () after return:
function iInvokeThings (thing) {
  return thing();
}

iInvokeThings(function () { return 4 + 5; });
// => 9

iInvokeThings(function () { return 'Hello, ' + 'world!'; });
// => "Hello, world!"

*We refer to the invoked function as a callback

Callback function - The term derives from the fact that the function isn't invoked immediately — instead it's called back, or invoked at a later point

Example:
function greet (name, cb) {
  return cb(name);
}

greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
// => "Hello there, Ada Lovelace"

function doMath (num1, num2, cb) {
  return cb(num1, num2);
}

doMath(42, 8, function (num1, num2) { return num1 * num2; });
// => 336




FIRST CLASS FUNCTIONS:
Functions in JS are first-class, meaning they can be treated like any other object. Can be:
- assigned valiables
- passed values to other functions
- return the value from another function, etc.

If a function requires a function to callback, we can define that function within the first function, anonymously


Functions can also return other functions


*/