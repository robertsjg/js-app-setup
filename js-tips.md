
Javascript tips for creating consistent, maintainable code

Automatic semi-colon insertion

Curly braces - pop up to same line to avoid issues with return statements and auto sem-colon insertion

Equals == operator will try and convert the two types it is operating on to be the same
If use === operator then there is no auto type conversion on equality
Rule -
Generally use triple equals not double equals operator (add eslint rule "eqeqeq": [2, "smart"],)

To check if an object exists use 
if(typeof x !== 'undefined'){
   // do something useful
}

Variables 
var declarations are scoped to the running execution
context's Variable Environment ('hoisted to top') and are initialized to undefined when created
Example of variable scope 'fun'

  var myVar = 1;

  function f(){
    var myVar;
    myVar = 2;
  }

  f();
  console.log(myVar); // wld print 1

Rule -
Put all your var declarations at the top of your scope

ESlint rule is no-shadow: "error"

Functions
Expressions v Declarations

Suggested code layout to avoid hoisting issues
'use strict';
// variable decs
var x = 1;
// function decs
function foo(input){
  // variable desc
  var y = 1;
  // function decs
  function bar(){
    // code/logic
  }
  // code/logic
}
 // run code
 foo(5);

Callbacks
In order to avoid Xmas tree code use named functions instead of anon functions
Have a pattern for results, for node use f(err,results) and use return on callbacks that are done



Strict Mode

Turning on strict mode, 'use strict' in your own code files, will throw errors, if devs for example -

 Overwrite a read only value
 Use an undeclared global variable
 Declare duplicate parameter names
 Delete an object but subsequently reference that object**
 Declare implicit hex or octal converted variables eg 012 (use parseInt(12,8) if octal req'd)
 The 'with' keyword is deprecated
 The 'this' keyword cannot bind to the global scope***
** Note: Deletion
Using the delete keyword can cause Javascript to be 'helpful' and ignore the delete if there are references 
to the deleted object post delete. 'use strict' solves this by removing this behavior
*** Note: this
When creating objects with new it is a good idea to take a local copy of this and referencing it instead (_this) instead
Eg 
var obj = function(){
  var _this = this;
  _this.hello = 'hello';
  _this.greet = function(){
    console.log(_this.hello);
  }
}

var greeter = new obj();


