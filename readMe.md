****************** DAY1 **********************
# topics
## Data types: 
###   (i)primitive datatypes:
=>Number \
=>String \
=>Boolean\
=>undefined: its a falsey value\
=>Null :its a falsey value\
=>symbol\
=>BigInt
## Null vs undefined:
    null==undefined //this results in true 
    null===undefined//this results in false
this shows us that null and undefined are similar but not identical,when variable is null its shows that variable is empty but if variables are undefined then it shows that variables dont exist in compiler

## Dynamic typing:
if we want to change the data type  we dont have to change type of data manually it's done automatiocally 

 

## bug in js (not changed due to legacy reasons): 
typeof(null);
output object

## Declaring variables in js:
=>let : re-assigning variables is possible, empty variable can be declared\
=>const : re-assigning variables is not possible, empty variable cant be declared \
=>var : can be re-assigned but its not recomended to be used, it is function Scoped
## Basic operators:
### (i)Math operators:
      +,-,*,/ and **
      these operation takes place from left to right
### (ii)Assignment operators:
     =,+=,*=,-=,/=
     these operation  takes place from right to left
### (iii)Increment and Decrement operators:
     prefix:++..,--..;
     postfix:..++,..++;
### (iv)comparision operators:
     >,<,>=,<=
     these operation have less priority than math operations

### (v)typeof() operator:
    this data type of the variable



## Operator Precedence:
    when we have more than one operators in an expression js follows the precendece table in order to execute the expression
    refere mdn doc for this


*****************  DAY 2 ***************************

## String  and template literals

### there are two ways to join a string that is
     (*) using normal string concatination 
      ex: firstName="vishwas";
          secondName="Parashar";
          let name=firstName+ lastName;

     here for multi line String an escape sequence \n\.


     (*) using back ticks that is ``
     ex: let name=`I'am ${firstName} ${name};
     here wen dont need any escape sequence for multi line Strings


## conditional statement(if/else)
      declaration of variables should be out side cant be inside ths statements
      If the above rule is not followed we ge reference error

## Type conversion:
- it's done expicitly by the user
 

## Type corecion:
- done implicitly by the user
  - when we have + operator in presence of string then the num will get converted to string 
  - but when we have other operators such as *,/,% hten string will get converted to num

## Truthy and Falsy values:
most of the time they are used in if else statements and other conditional statements
  falsy values are :0,undefined,null,NaN,' ';
  - note :not a number(NaN) is also a type of number!!


## Equality operators(=== vs ==) :
- when we use === strict equality operator type coercion dosen't occur 
- when we use == loose equality operatoe type coercion occurs 

## prompt():
- gets the input from the user and the input willl always be inform of string

## logical Operators:
- and(&&): If both the statements are true any then the output will be true
- or(||):if any one of the statement is true then the output will br true
- not(!):the complement of statement will act as output

 
     

 *****************  DAY 3 ***************************

 ## Switch statement:
   - here we can use this in place of elseif() ladder 
   - this has 2 parts cases and default where default can get executed regardless of condition

## Statement and Expressions:
   - can say that statements are sentence and expression as words as words give meaning to sentence the other way
   - statemnent cant return expression 
   - expression can return expression\
   **note**:in template literals only expression can be added but not the statemnt as they dont return value
## History of javaScript:
   - 1995 js was created with a sole pupose to make the webpages dynamic and was named as **Mocha**
   - 1996 name was changed to **live Script** and then to **java script**
   - 1997 js was standerdized for first time by ECMA and **ES1**
   was released


## ECMA versions:
   - 2009 after 1997 first update was released i,e **ES5** was released
   - 2015 **ES6/ES2015** was released form here the anual update relase cylcle was implemented

     - js is backward compatible language not forward compatible therefore while developing its better to use latest version of chrome but during production to make it compatible with older browser code can be converted to **ES5** using polyfill or transfile
     - js follows don't break web rule.

## Strict mode:
   - activation strict mode helps us to reduce the errors which would not be detected by the js compiler and this results in efficient coding
   - strict mode shoud be activated before a coding  

 *****************  DAY 4 ***************************
 ## Functions:
   - creating function:
       - function declration method-Can be acessed before initialization of function
       - function expression method-Can't be acessed before intialization of function 
       - arrow function method- Can be acessed before initialization of function,also here this key word for arrow functions are prohibited
       - immediately invoked function
   - funtions are executed only when the function is called/invoked
## first class functions: 
    - function is treated as variables they can be passed or returned by function.
## return:
 - return key word returns a particular value generated by the function when it is invoked.
## Nesting of function.



*****************  DAY 5 ***************************
## Arrays:
  - heterogenous datastructure
  - used to store ordered data

## Array functions:
  - used to work on arrays such as performing adding element to array or deleting element or finding lenght ETC.



*****************  DAY 6 ***************************
## objects:
 - They are heterogenous datastructure dosen't have index for the elements 
 - The data is stored in form of key value pairs
 - to acess a dota from object we need to use keys
## Retriving data from objects:
 - objects can be retrived using 2 methods:
   - using . dot operator, we need to use  exact name of the key directly
   - using [] square bracket,we need to use string of the particular key which gives flexibility
## Methods inside objects:
- methods can be created inside objects and can be acessed like a property of an object.
- to used the properties that are already present in the object we can use **this** operator, this key word refers to property of the parent object to which it belongs

## Basic loops :
  - for loop : in for loop we need to specify three parameters that are initiating counter,condition and counter increment  or decrement
  - while loop:in while loop we only can specify the condition but not the counter its basically needed when number of loops needed is unknown.
## continue and break:
  - *continue* it is used to skip  the particular iteration from execution
  - *break* it is used to stop execution inside loop and come outside loop

*****************  DAY 7***************************
# Dom manipulations

## Dom (document object model):
 - documentation of of HTML documents
 - used to acess every element of HTML and manipulate them
 - it follows tree structure
 - Dom is not a part of js it's a web api which acts like library

## Dom selection and manipulation:
- There are diffrent ways to select the particular element they are: 
    - getElementById -herethe id of the element is reffered
    - getElementByclassName- here the class of element is reffered
    - getElementByTagName- here the name of tag is reffered if there exist many same tags then the first tag is reffered
    - querySelector- here we can use anything to select an element
    - querySelectorAll- here multiple elements can be selcted togeather they are put to geather in form of arrays
- We can manipulate HTML and and css using js :
    - .textContent is used to acess the text inside a particular elements
    - .value is used to acess to text inside a particalur input fields like textbok and 
    - .setAttribute is used to change the attributes of the particular element tag

## eventListener(addEventListner()):
  - handling click event


*****************  DAY 8***************************
- refactoring: check for repetative and try to reduce
- we need to use class to manipulate css for particular element
- event are usually store in form of object


*****************  DAY 9***************************
- getElementById() is faster than querSelector()
- once we assign Number value to .textcontent it gets converted to string
- if we want varibles to be changed and accessed by all parts of code use declaration outside of all functions

********************DAY 10***************************

## javaScript working behind scenes

### js has qualities that are mentioned down
   - high level language: unlike c add c++ its not low level language it dosent need to ask for memmory to allocate its variables to the hardware
   - garbage collecton: it's an inbuilt algorithm thath is used to clear the memmory occupied by uncessary objects
   - Just-in-time compiler:used to convert the source code to machine code 
      - here the coverted datat is not stored in file and then interpreted
      - they are interpreted directly

   - multi paradigm : the approach for coding to sove a particular code (an be of two types imperative and declararive)
        - procedural programming
        - oops programming
        - function oriented programming
   - prototype oop:object is used every where except for primitive data types such as Number,String,etc.
   - dynamic: this makes the user not to mention on any data types while they declare variable the data type is given to variable dynamically.
   - single threaded and non blocking event loop: js runs on single thread there fore if a big event that takes more time to be executed then other events that need to be executed will be blocked therefore we need to use event loop which runs such process in back ground and pu them back to main thred


### js engine
   - it has two parts namely call stacks and heap.
   - call stack is where actual code gets executed
   - heap is where the object is stored
   #### compilation vs interpretation
   - compilation: source code to portable binary file  and then excecuted
     - it is fast
     - portable file can be execute on any system

   - interpretation: source code is converted to binary code and executed line by line directly no file is created
   - it is slow

  #### there fore jit is used which act as interpreter between these two therefore js is not interpreted language any more


### runtime
  - contanins things that are needed to use js and web api etc
  - events are stored in call back queue and then moved to call stack for exeuction via event loop


### Execution of code process:
  - excution takes place in three steps
     - creation of global execution context(only one global execution context)this holds the code  that is declared outside functions (top level code)
     - the top level code is execute
     - when the function is called the each funtion will have there their own execution context

  - **inside execution context**  during creation phase scope chains ,this keyword,argument objects are initialized



**note: arrow functions dosen't have this keyword or obj argument of its own**



    
****************** **DAY 11***************************
## more on execution context
 
      - scoping:It controls where to acess variable and where not it cant be acessed
      - lexical scoping:the scope of variables depends on where variable is declared
      - scope: It is the environment around which a particular variable is declared
      - scope of variable: it specifies the region till where the particular variable is valued
## Types of scopes:
  - global scope
  - functional scope: ex: var variables
  - block scope: acessable inside a part of particular code block
      - example: let and const variables
 
## scope chain: maintains variables
  - varible lookup process:
      - here the variables are first searched in the local function execution context if not found it searches in parent context like global execution context
     - Scope chain works upwards no to sibling function can acess each others varible present

## variable environment:
  - hoisting: code scans for variables first
## hoinsting table:
     function declaration =>   hoisted:yes                                      initial-value:actual function   
     scope:block(when strict mode is used);
     let and const variable =>   hoisted:no                                   
     initial-value:<unintialized>,tdz
     scope:block;
     var variables =>
     hoisted:yes
     intial-value:undefined
     scope:function;


## TDZ temporal dead zone: (used to avoid hoisting)
  - variables tdz
  - functions tdz


## this keyword:
  - it is special variable that is created in every execution context takes the value of the owner object of the function
  - obj belonging to particular function call is the value taken by this
  - this is dynamic
      - this in (()=>{}) arrow function will not have its own this keyword uses lexical this ie global obj window
  
## method barrowing
    newobj.method= obj.method this allows newobj to copy a method from already existing obj

      






  
   
