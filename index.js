/*                                         DAY1                */



let n=20;// declarartion of variable

let value=true;                            //booloean variable
let notdefined;                           //here variable is not defined just declared because its let variable
const z=4;                                //const variable
var d=25;                                 //var variable

let a="vishwas";
a=7;                                     //dynamic typing 
console.log(a);



//here we are seeing various operators in action
 
if(undefined){
    console.log('true');
}else{
    console.log("false");
}  

 first_name='vishwas';
 last_name='parashar';
 console.log(first_name+" "+last_name);

 let avg=(25+35+44+77)/4;
 let falseAvg=25+35+44+77;         //thsis shows the precedence of operator to get proper average
 console.log(avg,falseAvg);



 /************************************************************************************************************************************/



//***************************Day 2******************************* */

//string using normal inverted comma
let first_name='vishwas';
let age=21;
//multi line string using escape sequence
let intro="helloo i am "+ first_name +"\n\
and i am "+age+" old ";

//string using template literals and backticks 
let intro2=`hello I am ${first_name} 
and i am ${age} old`; 


//if and else statement
if(true){
    console.log('truth');
}else{
    console.log('not a truth');
}
// note : declare a variable out side the conditional statement 

//type conversion and type coercion
let a=promt('enter a number');
sum=Number(a)+5;               // here we need to change the type of variable a because input given in the prompt will always be a string and the addition operation cant be performed on a string but can be used to cancatinate them

let num1='25'
let add=num1 +5;// here 5 will get converted to string implicitly
let sub=num1-5;//here 5 num1 will get converted to Number implicitly

 

//comparision between == and ===
// equals
let abc='25';
if(abc==25){
    console.log(true);
}else{
    console.log(false)
}                            //here op is true

 if(abc===25){
    console.log(true);
}else{
    console.log(false)
}                            //here op is false


 if(abc!==25){
    console.log(true);
}else{
    console.log(false)
}                           //here op is true


 if(abc!=25){
    console.log(true);
}else{
    console.log(false)
}                          //here op is false

//***************************Day 3********************************/
'use  strict';                                                //activates strict mode 

// switch statement 

let marks=90;
switch (true) {
    case(marks>80) :
          console.log("A")
          break;
    case(marks>50&&marks<80):
            console.log('B')
           break;
     default:
         console.log('fail');
};

//ternary operator this can be used inside template literals
let cost=200;
let tip=cost>50 &&cost<300?15/100*cost:20/100*cost;
 console.log(tip);

//experimented
 let cost =1000;
if(50<cost<300){            //this results in true because value of true will be one

    console.log('15%');

}else{
console.log('20%')
}


//***************************Day 4********************************/
// functions:

function cook(item1,item2){                   //using function declaration
    let cooked=`${item1},${item2} is ready`;
    return(cooked);                           //return keyword returning value 

};

const waiteress=function(order_1,order_2){    //using function expression
    let deliver= cook()
    console.log(deliver);

};
customers();                                  //invoking function
const  customers=()=>{                        //using arrow function
     let order_1=prompt("enter your starter");
     let order_2=prompt("enter your your main course");
     waiteress(order_1,order_2);
 };

//***************************Day 5********************************/
//Arrays

 const arr=[2,3,8,9];                     //declaring array using square bracket
 const arr_1=new Array('a','b','c','d');  //declaring array using new key word


 //adding and deleting elements from arrays 
 arr.push('vishwas');                     //adds element to last position on array // this shows that const can make only primary data types immutable
 console.log(arr);        
 arr.unshift('parashar');                 //adds element to the first positon on array
 console.log(arr);
 arr.pop();                               //removes the last element from array
 console.log(arr);
 arr.shift();                             // removes the first element from array
 console.log(arr);
 //other basic finction on arrays
 const index=arr.indexOf(9);              //shows the index of the given element
 console.log(index);
 const notFound=arr.indexOf(100);         // if a particular element dosen't exist in the given array we get -1 as op
 console.log(notFound);
 const check=arr_1.includes('vishwas');              // this returns true or false based on presence of element in the array
 console.log(check);

 //***************************Day 6********************************/

 //objects:

 
const avengers={
    hulk:"mark Ruffolo",
    ironMan:"robert downey",
    thor:"chris hemsworth",
    captainAmerica:"chris evens",
    blackWidow:"scarlett johansson",
    villain:"loki",
    mission:function(){                                     //object method inside which to spedcify the properties using  this keyword
        let orders=`${this.hulk}smash ${this.villain},${this.ironMan},${this.thor} clear flying targets,${this.captainAmerica} and ${this.blackWidow} clear ground and recuse`;
        return orders;
    },
};
console.log(avengers.mission());                            //retriving data from using . operator
console.log(avengers['thor']);                              //retriving datat from using [] square brackets

// loops

const excercise=['squats','pushups'];
for(let i=0;i<excercise.length;i++){                         //looping array using for loop

    // if(i===1) continue;                                      // skiping the iteration when i=1 to skip pushups and cheat
   
    for(j=1;j<=5;j++){
        if(j===5) break;                                      // using brak and reducing  the number of repetation of excercise
        
        console.log(`${excercise[i]} number ${j} `);
    };
};


 
//****************day7********************************/
 
//***************************Day 7********************************/
 
// dom manipulatons
// selection types:

document.getElementById('id')                     // acessing elemnts using id
document.getElementsByClassName('class_name')     // acessing by class name
document.getElementsByTagName(span)               //using tag name
document.getElementsByName('name')
document.querySelector('#id');
document.querySelector('.class_name');
document.querySelector('.span');                  // can be acessed using either of them
document.querySelectorAll('h1');                  // will select all the h1 tags and stored it inside node list

// few event listner and manipulation
document.querySelector('.btn').addEventListener('click',function(){
    //this id immediately invoked function that runs as soon as click event on btn occurs
});
document.querySelector('.class_name').setAttribute('attribute','new_value');
document.querySelector('.class_name').textContent='new content'
document.querySelector('.class_name').value='new value'



document.querySelector('.class_name').style.property_name="property"

  
 
//***************************Day 8********************************/
 
// using class list to manipulate css of particular elements using class names

div.classList;                                // returns all the class associtated to div

//events are stored inside objects
document.addEventListener('keydown',function(e){
       console.log(e);            //this returs the event object that was created ehrn particular event was triggred      
});
 
//************************day9********************************/
div.classList.remove("class");
div.classList.add('new_class');
div.classList.toggle("class_name",condition) ;  //toggles the class if the conditon is true
 
 
 //************************day11********************************/
 let first_name='vishwas';
 let  example={
     dob:2001,
     age:function (){
         console.log(2022-this.dob);

     },
     greet:()=>console.log(`${first_name}, hello `),
     lexical_this:()=>{console.log(this)}


 };
 example.age();
 example.greet();
 example.lexical_this();
 let example2={
     dob:3001,
 }
 example2.age=example.age;       // method borrow process  
 console.log(example2.age())

//tdz for functions and variables
  function tdz(){
    console.log(age);   // hoisting with initial value undefined
    var age=21;                 
    console.log(name);   // no hoisting also tdz 
    const name="vishwas";
}
tdz();