// relearnign javascript basics

// Variables can be thought of as named containers that hold values

// the var, let and const keywords are used to declare variables

// A variable is said to be Initialized when a value is assigned to it

// Js is an untyped language which means that you dont to tell js at the
// time of varibale declaration what type of value to hold

// Datatypes >==  boolean, object, number, string, undefined, null

// Variable scope

// Global
 
var global = 39 + "global variable";

console.log(global);

// Local

function local() {
  var lc = "this is a local variable";
  console.log(lc);
}
local();
