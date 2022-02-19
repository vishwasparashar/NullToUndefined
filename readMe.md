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

******************** DAY 10***************************

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
## hoisting table:
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

      



****************** **DAY 12***************************
## regular function vs arrow function
 - this keyword,argument obj
## nested function inside a obj
- here the nested function which inside a function cant call it self directly .
- we need to create a variable or use arrow function
## primitive datatypes vs obj
- primtive types are stored in call stack
- adress of obj which is in heap memmory is stored in call stack
- using shallow cloning method to have effective method borrow process.

****************** **DAY 13***************************
# data structures 
## Destructuring arrays:
  - using array of variables enclosed within[]
  - skipping particular element 
  - swap using destructring
  - nested array destructuring
  - assign default value while destructuring

## Destructuring objects:
   - using keys enclosed inside {}
   - it shud have same name as original key
   - we can change the name of key by assigning value to new key
   - can assign default values
   - flower braces ie,{} expects a code block
   - mutation of objects
   - nested object destructuring
   - can pass object as argument in function call and destructure them in function parameters
    
   
****************** **DAY 14***************************
## Spread operator 
 - spread operator on Arrays
   - can be used to copy arrays and copy them
   - can be used to merge to arrays
   - difference between destructuring and spread operator
     - in spread operator no variables are created,no items inside array can be skipped

     - destructuring involves creation of variables,items in array can be skipped
 - spread operator on Strings
   - they will work as they work on arrays 
   - they cant be used inside string template
 - Spread operator on Object
    - from es2018 we can use spread operator on objects as well
    - this can be usedon creating shallow copy of object and modify the values
    - it can replace Object.assign() method

  - passing spread array inside function call
  
 
****************** **DAY 15***************************
## using logical operator with other datatypes 
  - or operator short circuiting
    - here only the first value that is true is returned
    - if there are all falsy values then the last false value is returned

  - and operator shor ciruiting 
    - here the first falsy  value is returned
    - if there are all true values then the last true value is returned'
## nullish coalescing operator(??) startedin {es2020}
  - only null values are considered to be false the zero and empty string are considered to be true values
  - works like or operator

## Logical assignment operator
  - or assignment operator(||=): assign value to variable only if the value of variable is already falsy
  - nullish assignment operator(??=):assign value to variable only if the value is null or undefined for a given variable
  - and assignment operator(&&=): assign value to variable only id the value of variable is truthy


****************** **DAY 16***************************
## for of loop:
   - create for of loop without any counter to iterate through the iteralble
   - however we dont have counter we cant get the index of particular element easily therefore we need to use Array_name.entries() by using this will store the array element and its index in form of map

## Enhanced object literal (es6):
  - to copy a set of object from outside object there is no need to create variable and assign value to them
  - to declare a funtion inside no need to use function keyword
  - can perform computtation on any propperty name by enclosing it inside[] box brackets

## optional chaining(?.):
  - can be used on arrays and object 
  - it can help us to find the weather the particualer element or key exist and amd take necessary operation based on that
  - it can reduce usage of if statement

## looping on object(indirectly):
  - to loop on keys use Object.keys(obj_name)
  - to loop on values use Object.values(obj_name)
  - to loop on both the values use Object.entries(obj_name)

****************** **DAY 17***************************
## sets (es6):
  - its i also an iterable
  - stores unique values
  - set functions
     - Set.size(),Set.add(),Set.delete(),Set.clear(),set.has()
  - retriving data is not needed
  - spread operator on sets

## Maps
  - mapping values to keys
  - keys can be of any datatype
  - map functions
     - Map.set()
     - Map.delete()
     - Map.get()
     - map.has()
  - array as key 
     - should declare array first and then assign it as key

  - converting object  to map using object.entries()
  - converting map to array uing spread operator
  - two ways of creating maps using set() and other is passing array of arrays

difference between object and map
 | Point     | Object                      | Map                            |
| --------- | --------------------------- | ------------------------------ |
| Iterable  | Not directly iterable       | Directly Iterable              |
| Size      | Does not have size property | Has the size property          |
| Key Type  | Must Be string or symbol    | Can be any DataType            |
| Key Order | They are not well ordered   | They are oredered by insertion |
| Defaults  | Have Default Keys           | Do not have default keys       |



****************** **DAY 18***************************
## String operations
 - string[index]
 - String.length
 - String.indexOf()
 - String.lastIndexOf()
 - String.slice(begin_index,end_idex) we can use negative indexing
 - String is primitive datatype still we can call methods because it uses boxing method where the String turns to Object implicitly
 - String.toLowerCase()
 - String.toUpperCASe()
 - String.trim()
 - String.trimStart()
 - String.trimEnd()
 - String.includes()
 - String.startsWith()
 - String.endsWith()
 - String.replace()
 - String.replaceAll()
 - String.replace(using regular expression)regularexpresssion=/string/
 - String.split() 
 - String.join()
 - String.padding() //default it will add space
 - String.paddingStart()
 - String.paddingEnd()
 - String.repeat()
 

 ****************** **DAY 19***************************
 ## More on functions
   - passing default parameter
   - to skip an argument define it as undefined in funtion call

## how passing arguments work
   - passing value vs refernce
   ### note :no pass by reference exist in  js
##  first class vs higher oreder functions
   - first class function :
       - Treated simple values
       - Treated as another obj
       - methods can be called on functions

   - higher order functions:
       - Returns a function
       - takes function as arguments


 ****************** **DAY 20***************************
## higher and lower order functions
   - passing argument inside function
   - call back functions are used on argument
## returning lower order function
   - two ways to retunr funtion 
     - using variable
     - using direct arguments

## call and apply methods:
  - used to set this keyword manually
  - they call function
  - .call(obj_name,function_argumets)
  - .apply(obj_name,function_arguments array)
  - today we can use .call to ti pass even array by using spread operators
## The Bind method: 
  - they don't call function 
  - only this keyword is set
  - also can use to set default arguments
  - using bind will create new function

## IIFE immediately invoked function:
  - no funtion_name is needed to declare function or call
  - to support encapsultion and provide block to variables
  - also used to execulte the function only once

  ****************** **DAY 21***************************
## Closures:
  - it occurs implicitly
  - a function has acess to variable environment of  of execcution cntext in wich it was created
  - when variable is not fount  js will check closure which contains varible environment of already executed Ec
  to check the closure uses  
  - closure property gets proprity over scope chain

## More on arrays
  - arr.slice()
      - can use negative indexing
      - dose't mutate original array
      - .slice() is passed without argument then it produces shallow copy
  - .splice()
      - it removes the specified index can use negative indexing
      - mutates original array
  - .reverse()
      - it mutates original array 
  - .concat()
      - dose'nt mutate original
      - combiles 2 arrays
  - .join('char')
      -joins two array with the specified character
  - .at()
      - used to retrive data at particular index
      - can use negative indexing
## for each loop on arrays
  - array.forEach(function(current_item,idex,array))
  - current_item: will act like variable for the element of array that enters loop
  - index: gives indexing
  - array: it holds entire array
  - continue and break can't be applied
## for each loop on map and set:
  - map.forEach(function(value,key,map))
  - we know that data is stored in form of key value pairs in map
  - set.forEach(function(vlaue,key,set))
  - note: that order of arguments should not change

****************** **DAY 22***************************
## Creating dom
  - using .insertAdjacenHTML();
     - takes two arguments 'positon and  html string'
     - position are:
       - beforebegin : before beging of the particular html element
       - afterbegin  : after beging of the particular html element
       - beforeend   : before ending of particular html element
       - afterend    : after the ending of particular html element


## data transformation :
   - .map():applies operation and returns new array
        - takes function as argument inside function  we can specify like for each loop
        - dosent mutate original array

   - .filter():
        - returns new array after element is put through a particular test
        - dosen't mutate original array
   - .reduce():
       - it takes 4 arguments one is called as acccumulator and other three are same
       - mainly gets single out put from the array
       - we can specify the initial value of the accumulator




****************** **DAY 23***************************
## method chaining :
  - using more than one array method one after the other on same array
  - to check the particular output of a method we can use array argument that gets the array
  - try not to over use
  -it is better if we dont use mutating methods while we are chaining

## .find(condition) method:
  - it retrives the data
  - it returns the first element that satisfies the condition in that array
  - it dosen't return array like filter method

## .findIndex() method:
  - it returns the index of the particular element
  - it takes functions argument and according to and the value returned from that function the findindex method is applied 

## *dom methods :* 
  - e.preventDefault() it is the method used to stop the event that occurs defaultly 
  - .blur() used to remove the focus fro a particular element

## .some() :
  - it will return true of false if the condition is satisfied or not
  - it  returns true if even a single element satisfies the condition
  - it takes call back function

## .every():
  - it will return true  if all the elements in  array satisfies the consition
  - it takes callback function as argument

## .flat(level):
   - it will return a single array if  there is nested array
   - it takes laevel of nesting as argument
## .flatMap():
   - it is combination of map and flat 
   - it can do single level flat however
   
 ****************** **DAY 24***************************
 ## Sorting array:
   - .sort() method
   - we can use this alone to sort strings and single digint numbers
   - we can't use it directly on more than one number digits 
   - to sort multiple number digit and negative numbers we need to pass a call back function
   - .sort((a,b)=>a-b) if this returns negative number then the position of a and b inter changes if it returns  postive number it dosent change

## Creating array(other methods):
   - using Array() constructor
   - if we use only single argument then only the array size will be allotted 
   - no map method can be used to populate data inside emepty array
   - to populate data we can use .fill(element,begin_index,last_index)

## Array(obj).from({lenght:number},call_back):
   - can create array and use call back to populate the array
   - can use them to convert other data structure to arrays

## nodelist to array
   - Array.from()
   - spred operator
## when and where:
   - these are the needs that one should consider
       - should the operation return new array
       - should the operation mutate original array
       - should the operation return array Index
       - should the operation return element
       - should it return new string
       - should the operation just loop through arrray
       - should the operation check weather it includes
 

  ****************** **DAY 25***************************
  ## fractional bug in array
   - .1+.2 will not be equal to .3 but a wrong value this leads to mathematical inaccuracy in js
   - Number has a limit of 64 bits where 54 for digits remaining for sign of the number
  ## conversion from string to number
   - when we specify + in front of string value of a number it gets converted by type coercion
   - ### parsing:
      - Number.pareInt('num',radix)
      - first argument is the value however second argument is radix which specifies the format of the value that needs to be converted
  - Number methods dosent need Number. dosen't need to be specified as it is global method
  - .isNan() checks weather the given element is NaN type or not
  - .isFinite() checks the given value is the element of finite value or not
  - .isInterger() checks for the type of Integer
  - Number.toFixed(8) returns the nuber of fractional number after the decimal point specified inside as arguments
  - Number.MAX_SAFE_INTEGER : gets the maximum no of size of digits that is stored 
## Math library functions
  - Math.sqrt(num);
  - .random()
  - .trunc()
  - .floor()
  - .ceil()
  - .round()

## modulus or remainder operator(%)
## Numeric separator: 
   - used to separate the numbers with _ how ever when js reads then the underscore is discarded
   - has to be used only between two numbers however can't be used to start or end of numbers
## BigInt: 
  - declaring bigInt
     - without uisng constructor: just mention n aflter all digits
     - using  BigInt() consturctor
     - can't mix BigInt types with normal number types
     - can't use Math library operation on BigInt
     - can perform normal mathematical operations on 2 BigInt types
## Date and Time
  - declaring date:
     - new Date()
     - can pass the value as string
     - can pass the normal number as arguments
     - if no hr sec and min is mentioned then default 00 will be taken
     - if new Date(0) is passed then it gets the time that unix was launched
## methods on Date:
  - Date is just another object so we have many methods on on the obj like:
  - .getfullYear()
  - .getDay()
  - .gethours()
  - .IsoString()
  - .getDate()
  - .getTime()
  - .now()
  - .setFullyear()


  ****************** **DAY 26***************************
  ## Using dates operations
   - when we use arithmatic operaton on date we it retuns answer in ms

  ## International date timing
  - Intl.DateTimeFormat('local',options).format;
  - iso language code should be passed in local
  ## International numberformat
  - Intl.NumberFormat(local,option).format;
  

  ## setinterval(),clearinterval()
  ## setTimeout(),clearTimeout()

****************** **DAY 27***************************

## Dom again
  - Dom is complex api
  - dom contains different type of nodes that are:
    - elements: this has methods
       - html Elements
         - btns
         - div and more
    - text
    - comment
    - documents:even this has methods
  - Methods and and propersties can be inherited
## select,create,delete elements of dom using js
   ### selections:
  - .queryselector()
  - .querselectorall()- returns nodelist
  - .getElementByID()- returns htmlcollections
   ### creations:
  - document.createElement('html');
    - .prepend():becomes first child
    - .append():becomes second child
    - these can be used to position the div as well
  - insertAdjacentHTML()

  ### >> in dom we cant have same elements repaeted twice for this we need to clown the element and then insert 
     - .append(elem.cloneNode(true));
    
  ### deletions:
  - .remove(): new method
  - div.parentElement.removeChild(div): old method

## Styles 
  - .style.css_property="value"
     - this adds inline style 
     - this can read only tthe styles present inline 
     - cant read the style present in file
  - to read the styles that is present on the page we need to use
     - .getComputedStyle('elem').css_property
  - .style.setproperty('css_attribute','value')

## attributes
  - elem.src
  - elem.className ...
  - these can read the properties that are standard property also we can't read the custom property using these
  - to read the custom attributes and bring what the exact value of attribute we need to use :
     - elem.getAttribute('attribute');

## scrolling and methods:
  - element.getBoundingClientRect(): gets the dimensions and position related to the element with the reference to the view port
  - .pageXOffset() gets the x co ordinate that has been scrolled(scrollX)
  - .pageYOffset() gets the y co ordinate the has been scrolled(scrolly)
  - .clientHeight() gets the height excluding marigins and paddings
  - .clientWidth() gets the width excluding margins and paddings

****************** **DAY 28***************************
## different event handlers 
  - element.onEvent=call_back();
  - inline call 
  - these are old ways to addEventListner() legacy
  - .removeEventListner('event',call_back()) is used to remove the event listner when it becomes unecessary in webpage