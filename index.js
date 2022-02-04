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

//************************day12********************************/
 
// code to show that a nested function inside object and problem related to it's this prperty
let vish={
    age:21,
    add:function(){
        function abc(){
            console.log(this.age);
        }
        abc();

    }

};
vish.add();     // produces undefined

//solution-1 using arrow()={} function
const vish={
    age:21,
    abc:function(){
        let arrow=()=>{
            console.log(this.age);
             
        };
        arrow();
    }
};
//soluton-2 using a variable to store this of parent element

const vish={
    age:21,

    abc:function(){
        let self=this;
        let foo=function(){
            console.log(self.age);
             
        };
        foo();
    }
};
vish.abc();
//using shallow copy technique to copy an object and change the value without changing the actual value of original object
 
const wicketKeeper={role:"wicketkeeping",name:"Ms Dhoni"};
const batsman ={role:"batting"}

const copy=Object.assign(wicketKeeper,batsman);
console.log(copy);
console.log(wicketKeeper);

//************************day13********************************/
//array destructuring
let arr1=[1,4,6,7,['vish','para']];
//nested array destructuring assinging default values and skipping an element from obj
const [no1, ,no3,no4,[first_name,last_name],no5='hello']=arr1; 
console.log(no1,no3,no4,first_name,last_name,no5);
//swapping variables using array desturcturing
let abc=1;
let xyz=2;
[abc,xyz]=[xyz,abc];
console.log(abc,xyz);

//object destructuring 
const user = {
    id: 339,
    name1: 'vishwas',
    age1: 21,
    education: {
      degree: 'Masters',
      degree2:'none'
    }
  };
  //nested destructing
  const {name1,age1:old,education: {degree,degree2}} = user;
  console.log(degree,degree2,name1,old);

  //************************day14********************************/
 // spread operator
  const hotel={
    name:'op\'s kitchen ',
    menu:['idly','dosa','pasta bolognse'],
    order:function(waiter1,waiter2,waiter3){
        const self=this;
        console.log(`${waiter1} serve ${self.menu[0]},${waiter2} serve${self.menu[1]},${waiter3}  serve ${self.menu[2]} `);
    }
};
// spread on arrays
let addedmenu=[...hotel.menu,'liguini'];

console.log(addedmenu);
let waiter=['suresh','rathesh','mahesh']
//passing spred array as arguments
hotel.order(...waiter);
// spread operator on objects to replace objects.assign() method 
const compitator={...hotel,name:`ultra op's kitchen`};
console.log(compitator);

//rest pattern 

//rest operator on arrays
const[a,,b,...numbers]=[1,2,3,4,5,6];
console.log(a,b,numbers);
//rest operator on objects
const timings={
    sat:{
        time:12
    },
    sun:{
        time:9
    },
    mon:{
      time:2  
    },
    tuesday:{
        time:2
    }
}
const{sun,...otherdays}=timings;
console.log(sun,otherdays);
// passing rest operator inside function 
const sum=function(...numbers){
    let add=0
    for(i=0;i<numbers.length;i++){
        add=add+numbers[i];
    }
     return(add);
} 
console.log(sum(1,2,3,5,7,9));

 //************************day15********************************/

// various cases of or and shorting
let diet=true;
let cheatday='burger';

let orShorting=diet||cheatday;
let andShorting=diet&&cheatday;
console.log(andShorting);
console.log(orShorting);
let veg=false;
let nonveg=true;
 andShorting=veg&&nonveg;
 orShorting=veg||nonveg;
//nullish coelsecing
let num1=0;
let num2=3;
let nullish=num1 ?? num2;
console.log(nullish)

// here we are using logical assign ment operator
let rcb={
    brand:'kholi',
    quality:'loyal fanbase',
    ipltrophies:0,
      ban:0,

};
let csk={
    captain:'dhoni',
    quality:'iplwinners',
     ban:'got banned',


};
//or assgignment operator
 
rcb.captain||='kholi';
csk.brand||='dhoni';
console.log(rcb);
console.log(csk);
//nullish assignment operator
rcb.ipltrophies ??='min one trophy exist';
csk.ipltrophies ??='min one trophy exist';
console.log(csk);
console.log(rcb);
//and assignment operator
rcb.ban&&='got banned  for 2 years';
csk.ban&&="got  banned for 2 years";
console.log(csk);
console.log(rcb);

//************************day16********************************/

// using for of loop
let days=['weekdays','saturday','sunday'];
//using .entries() to get index of the element
for(let day of days.entries())console.log(`${day[0]+1} :${day[1]}`);
for(let [index,element] of days.entries())console.log(`${index} :${element}`);

let navbar=['gonext','goback']
const modules={
    [navbar[0]]:'working',      //compute with key names
    [navbar[1]]:'working',
    scrollbar:'working',
    hamburger:'working'
    }
    console.log(modules);
    //using optional chaining on objects
    modulesChecker=function(){
        console.log(modules?.slider??'noslider exists');
    }
    modulesChecker();

let testing={
    functionality:'working',
    ui:'working',
    ux:'layed out proper',
    modules,                     //here no variable is needed to copy object

    testingchecks(){             // no function keyword
        if(this.ui&&this.ux&&this.functionality){
            return('good to launch');
        };
    },
};
//using optional chaining to check to check for method
console.log(testing.moduleschecks?.()??'method dosent exist');
console.log(testing.testingchecks?.() ??'method dosent exist');

// foooping through objects indirectly by using .values,.keys,.entries
const skills={
    sports:{
        football:'yes',
        chess:'yes',
    },
    python:'yes',


};

let keys=Object.keys(skills);
for(const key of keys)console.log(key);
let values=Object.values(skills);
for(const value of values)console.log(value);
let entries=Object.entries(skills.sports);
for(const entry of entries)console.log(entry);