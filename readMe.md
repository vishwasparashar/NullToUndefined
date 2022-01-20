****************** DAY1 **********************
# topics
## Data types: 
###   (i)primitive datatypes:
=>Number \
=>String \
=>Boolean\
=>undefined: its a flsey value\
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

