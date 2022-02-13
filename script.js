'use strict';

/*                                         DAY1                */



// let n=20;// declarartion of variable

// let value=true;                            //booloean variable
// let notdefined;                           //here variable is not defined just declared because its let variable
// const z=4;                                //const variable
// var d=25;                                 //var variable

// let a="vishwas";
// a=7;                                     //dynamic typing 
// console.log(a);



// //here we are seeing various operators in action
 
// if(undefined){
//     console.log('true');
// }else{
//     console.log("false");
// }  

//  first_name='vishwas';
//  last_name='parashar';
//  console.log(first_name+" "+last_name);

//  let avg=(25+35+44+77)/4;
//  let falseAvg=25+35+44+77;         //thsis shows the precedence of operator to get proper average
//  console.log(avg,falseAvg);



//  /************************************************************************************************************************************/



// //***************************Day 2******************************* */

// //string using normal inverted comma
// let first_name='vishwas';
// let age=21;
// //multi line string using escape sequence
// let intro="helloo i am "+ first_name +"\n\
// and i am "+age+" old ";

// //string using template literals and backticks 
// let intro2=`hello I am ${first_name} 
// and i am ${age} old`; 


// //if and else statement
// if(true){
//     console.log('truth');
// }else{
//     console.log('not a truth');
// }
// // note : declare a variable out side the conditional statement 

// //type conversion and type coercion
// let a=promt('enter a number');
// sum=Number(a)+5;               // here we need to change the type of variable a because input given in the prompt will always be a string and the addition operation cant be performed on a string but can be used to cancatinate them

// let num1='25'
// let add=num1 +5;// here 5 will get converted to string implicitly
// let sub=num1-5;//here 5 num1 will get converted to Number implicitly

 

// //comparision between == and ===
// // equals
// let abc='25';
// if(abc==25){
//     console.log(true);
// }else{
//     console.log(false)
// }                            //here op is true

//  if(abc===25){
//     console.log(true);
// }else{
//     console.log(false)
// }                            //here op is false


//  if(abc!==25){
//     console.log(true);
// }else{
//     console.log(false)
// }                           //here op is true


//  if(abc!=25){
//     console.log(true);
// }else{
//     console.log(false)
// }                          //here op is false

// //***************************Day 3********************************/
// 'use  strict';                                                //activates strict mode 

// // switch statement 

// let marks=90;
// switch (true) {
//     case(marks>80) :
//           console.log("A")
//           break;
//     case(marks>50&&marks<80):
//             console.log('B')
//            break;
//      default:
//          console.log('fail');
// };

// //ternary operator this can be used inside template literals
// let cost=200;
// let tip=cost>50 &&cost<300?15/100*cost:20/100*cost;
//  console.log(tip);

// //experimented
//  let cost =1000;
// if(50<cost<300){            //this results in true because value of true will be one

//     console.log('15%');

// }else{
// console.log('20%')
// }


// //***************************Day 4********************************/
// // functions:

// function cook(item1,item2){                   //using function declaration
//     let cooked=`${item1},${item2} is ready`;
//     return(cooked);                           //return keyword returning value 

// };

// const waiteress=function(order_1,order_2){    //using function expression
//     let deliver= cook()
//     console.log(deliver);

// };
// customers();                                  //invoking function
// const  customers=()=>{                        //using arrow function
//      let order_1=prompt("enter your starter");
//      let order_2=prompt("enter your your main course");
//      waiteress(order_1,order_2);
//  };

// //***************************Day 5********************************/
// //Arrays

//  const arr=[2,3,8,9];                     //declaring array using square bracket
//  const arr_1=new Array('a','b','c','d');  //declaring array using new key word


//  //adding and deleting elements from arrays 
//  arr.push('vishwas');                     //adds element to last position on array // this shows that const can make only primary data types immutable
//  console.log(arr);        
//  arr.unshift('parashar');                 //adds element to the first positon on array
//  console.log(arr);
//  arr.pop();                               //removes the last element from array
//  console.log(arr);
//  arr.shift();                             // removes the first element from array
//  console.log(arr);
//  //other basic finction on arrays
//  const index=arr.indexOf(9);              //shows the index of the given element
//  console.log(index);
//  const notFound=arr.indexOf(100);         // if a particular element dosen't exist in the given array we get -1 as op
//  console.log(notFound);
//  const check=arr_1.includes('vishwas');              // this returns true or false based on presence of element in the array
//  console.log(check);

//  //***************************Day 6********************************/

//  //objects:

 
// const avengers={
//     hulk:"mark Ruffolo",
//     ironMan:"robert downey",
//     thor:"chris hemsworth",
//     captainAmerica:"chris evens",
//     blackWidow:"scarlett johansson",
//     villain:"loki",
//     mission:function(){                                     //object method inside which to spedcify the properties using  this keyword
//         let orders=`${this.hulk}smash ${this.villain},${this.ironMan},${this.thor} clear flying targets,${this.captainAmerica} and ${this.blackWidow} clear ground and recuse`;
//         return orders;
//     },
// };
// console.log(avengers.mission());                            //retriving data from using . operator
// console.log(avengers['thor']);                              //retriving datat from using [] square brackets

// // loops

// const excercise=['squats','pushups'];
// for(let i=0;i<excercise.length;i++){                         //looping array using for loop

//     // if(i===1) continue;                                      // skiping the iteration when i=1 to skip pushups and cheat
   
//     for(j=1;j<=5;j++){
//         if(j===5) break;                                      // using brak and reducing  the number of repetation of excercise
        
//         console.log(`${excercise[i]} number ${j} `);
//     };
// };


 
// //****************day7********************************/
 
 
 
// // dom manipulatons
// // selection types:

// document.getElementById('id')                     // acessing elemnts using id
// document.getElementsByClassName('class_name')     // acessing by class name
// document.getElementsByTagName(span)               //using tag name
// document.getElementsByName('name')
// document.querySelector('#id');
// document.querySelector('.class_name');
// document.querySelector('.span');                  // can be acessed using either of them
// document.querySelectorAll('h1');                  // will select all the h1 tags and stored it inside node list

// // few event listner and manipulation
// document.querySelector('.btn').addEventListener('click',function(){
//     //this id immediately invoked function that runs as soon as click event on btn occurs
// });
// document.querySelector('.class_name').setAttribute('attribute','new_value');
// document.querySelector('.class_name').textContent='new content'
// document.querySelector('.class_name').value='new value'



// document.querySelector('.class_name').style.property_name="property"

  
 
// //***************************Day 8********************************/
 
// // using class list to manipulate css of particular elements using class names

// div.classList;                                // returns all the class associtated to div

// //events are stored inside objects
// document.addEventListener('keydown',function(e){
//        console.log(e);            //this returs the event object that was created ehrn particular event was triggred      
// });
 
// //************************day9********************************/
// div.classList.remove("class");
// div.classList.add('new_class');
// div.classList.toggle("class_name",condition) ;  //toggles the class if the conditon is true
 
 
//  //************************day11********************************/
//  let first_name='vishwas';
//  let  example={
//      dob:2001,
//      age:function (){
//          console.log(2022-this.dob);

//      },
//      greet:()=>console.log(`${first_name}, hello `),
//      lexical_this:()=>{console.log(this)}


//  };
//  example.age();
//  example.greet();
//  example.lexical_this();
//  let example2={
//      dob:3001,
//  }
//  example2.age=example.age;       // method borrow process  
//  console.log(example2.age())

// //tdz for functions and variables
//   function tdz(){
//     console.log(age);   // hoisting with initial value undefined
//     var age=21;                 
//     console.log(name);   // no hoisting also tdz 
//     const name="vishwas";
// }
// tdz();

// //************************day12********************************/
 
// // code to show that a nested function inside object and problem related to it's this prperty
// let vish={
//     age:21,
//     add:function(){
//         function abc(){
//             console.log(this.age);
//         }
//         abc();

//     }

// };
// vish.add();     // produces undefined

// //solution-1 using arrow()={} function
// const vish={
//     age:21,
//     abc:function(){
//         let arrow=()=>{
//             console.log(this.age);
             
//         };
//         arrow();
//     }
// };
// //soluton-2 using a variable to store this of parent element

// const vish={
//     age:21,

//     abc:function(){
//         let self=this;
//         let foo=function(){
//             console.log(self.age);
             
//         };
//         foo();
//     }
// };
// vish.abc();
// //using shallow copy technique to copy an object and change the value without changing the actual value of original object
 
// const wicketKeeper={role:"wicketkeeping",name:"Ms Dhoni"};
// const batsman ={role:"batting"}

// const copy=Object.assign(wicketKeeper,batsman);
// console.log(copy);
// console.log(wicketKeeper);

// //************************day13********************************/
// //array destructuring
// let arr1=[1,4,6,7,['vish','para']];
// //nested array destructuring assinging default values and skipping an element from obj
// const [no1, ,no3,no4,[first_name,last_name],no5='hello']=arr1; 
// console.log(no1,no3,no4,first_name,last_name,no5);
// //swapping variables using array desturcturing
// let abc=1;
// let xyz=2;
// [abc,xyz]=[xyz,abc];
// console.log(abc,xyz);

// //object destructuring 
// const user = {
//     id: 339,
//     name1: 'vishwas',
//     age1: 21,
//     education: {
//       degree: 'Masters',
//       degree2:'none'
//     }
//   };
//   //nested destructing
//   const {name1,age1:old,education: {degree,degree2}} = user;
//   console.log(degree,degree2,name1,old);

//   //************************day14********************************/
//  // spread operator
//   const hotel={
//     name:'op\'s kitchen ',
//     menu:['idly','dosa','pasta bolognse'],
//     order:function(waiter1,waiter2,waiter3){
//         const self=this;
//         console.log(`${waiter1} serve ${self.menu[0]},${waiter2} serve${self.menu[1]},${waiter3}  serve ${self.menu[2]} `);
//     }
// };
// // spread on arrays
// let addedmenu=[...hotel.menu,'liguini'];

// console.log(addedmenu);
// let waiter=['suresh','rathesh','mahesh']
// //passing spred array as arguments
// hotel.order(...waiter);
// // spread operator on objects to replace objects.assign() method 
// const compitator={...hotel,name:`ultra op's kitchen`};
// console.log(compitator);

// //rest pattern 

// //rest operator on arrays
// const[a,,b,...numbers]=[1,2,3,4,5,6];
// console.log(a,b,numbers);
// //rest operator on objects
// const timings={
//     sat:{
//         time:12
//     },
//     sun:{
//         time:9
//     },
//     mon:{
//       time:2  
//     },
//     tuesday:{
//         time:2
//     }
// }
// const{sun,...otherdays}=timings;
// console.log(sun,otherdays);
// // passing rest operator inside function 
// const sum=function(...numbers){
//     let add=0
//     for(i=0;i<numbers.length;i++){
//         add=add+numbers[i];
//     }
//      return(add);
// } 
// console.log(sum(1,2,3,5,7,9));

//  //************************day15********************************/

// // various cases of or and shorting
// let diet=true;
// let cheatday='burger';

// let orShorting=diet||cheatday;
// let andShorting=diet&&cheatday;
// console.log(andShorting);
// console.log(orShorting);
// let veg=false;
// let nonveg=true;
//  andShorting=veg&&nonveg;
//  orShorting=veg||nonveg;
// //nullish coelsecing
// let num1=0;
// let num2=3;
// let nullish=num1 ?? num2;
// console.log(nullish)

// // here we are using logical assign ment operator
// let rcb={
//     brand:'kholi',
//     quality:'loyal fanbase',
//     ipltrophies:0,
//       ban:0,

// };
// let csk={
//     captain:'dhoni',
//     quality:'iplwinners',
//      ban:'got banned',


// };
// //or assgignment operator
 
// rcb.captain||='kholi';
// csk.brand||='dhoni';
// console.log(rcb);
// console.log(csk);
// //nullish assignment operator
// rcb.ipltrophies ??='min one trophy exist';
// csk.ipltrophies ??='min one trophy exist';
// console.log(csk);
// console.log(rcb);
// //and assignment operator
// rcb.ban&&='got banned  for 2 years';
// csk.ban&&="got  banned for 2 years";
// console.log(csk);
// console.log(rcb);

// //************************day16********************************/

// // using for of loop
// let days=['weekdays','saturday','sunday'];
// //using .entries() to get index of the element
// for(let day of days.entries())console.log(`${day[0]+1} :${day[1]}`);
// for(let [index,element] of days.entries())console.log(`${index} :${element}`);

// let navbar=['gonext','goback']
// const modules={
//     [navbar[0]]:'working',      //compute with key names
//     [navbar[1]]:'working',
//     scrollbar:'working',
//     hamburger:'working'
//     }
//     console.log(modules);
//     //using optional chaining on objects
//     modulesChecker=function(){
//         console.log(modules?.slider??'noslider exists');
//     }
//     modulesChecker();

// let testing={
//     functionality:'working',
//     ui:'working',
//     ux:'layed out proper',
//     modules,                     //here no variable is needed to copy object

//     testingchecks(){             // no function keyword
//         if(this.ui&&this.ux&&this.functionality){
//             return('good to launch');
//         };
//     },
// };
// //using optional chaining to check to check for method
// console.log(testing.moduleschecks?.()??'method dosent exist');
// console.log(testing.testingchecks?.() ??'method dosent exist');

// // looping through objects indirectly by using .values,.keys,.entries
// const skills={
//     sports:{
//         football:'yes',
//         chess:'yes',
//     },
//     python:'yes',


// };

// let keys=Object.keys(skills);
// for(const key of keys)console.log(key);
// let values=Object.values(skills);
// for(const value of values)console.log(value);
// let entries=Object.entries(skills.sports);
// for(const entry of entries)console.log(entry);



// //************************day17********************************/
// // sets
// let applicant1={
//     name:'vicky',
//     role:'business manager'
// };
// let applicant2={
//     name:'licy',
//     role:"senior developer"
// };
// let applicant3={
//     name:'bond',
//     role:'business analyst'
// };
// let applicant4={
//     name:"lucy",
//     role:"business analyst"
// };
// let roles=[applicant1.role,applicant2.role,applicant3.role,applicant4.role];
// console.log(roles);
// let uniqueroles=new Set(roles);
// console.log(`${uniqueroles.size} roles are up for grabs`);
// console.log(uniqueroles);
// qualified=[applicant1,applicant2,applicant3];
// for(const q of qualified){
//     uniqueroles.delete(q.role);
//     console.log(uniqueroles);
// }
// userRole=prompt('enter your role');
// if(uniqueroles.has(userRole)){
//     console.log('we hav an opeaning');

// }else{
//     console.log('we dont have opeaning for you role ');
// }


// // maps
// const mapping = new Map();
// mapping.set("name", "vishwas").set("age", 21).set("passion",'cricket');
// console.log(mapping);

// for (const key of mapping.keys()) {
// 	console.log(key);
// }

// for (const values of mapping.values()) {
// 	console.log(values);
// }

// for (const [key, value] of mapping.entries()) {
// 	console.log(key, value);
// }

// // Other way of creating map
// const map1 = new Map([
// 	['fname','vishwass'],
// 	["age", 24],
// 	["profession", "cricketer"],
// 	[true, "he is fast bowler"],
// ]);
// console.log(map1);

// console.log(map1.get('fname'));

// console.log(map1.size);

// map1.delete('fname');
// console.log(map1);

// console.log(map1.has("age"));

// console.log(typeof map1);
// console.log(map1 instanceof Map);

// map1.clear();
// console.log(map1);

// //************************day18********************************/
// const underscore='first_name';
// const camelCase=underscore.split('_');
// const[first,_name]=camelCase;
// const final=_name.replace(_name[0],_name[0].toUpperCase());
// console.log(first+final);

// //************************day19********************************/

// let fun2=function(a=20,b=7){
//     return(c=a+b);
// }
// console.log(fun2(30));        // since the value for b is not passed it gets the default value but a value gets overridden
// let test='1025f'
// let test_obj={
//     fname:"vishwas",
//     lname:"parashar"
// }
// let fun1=function(code,obj){
//        code="138975";
//        obj.lname="peter";
// };
// fun1(test,test_obj);
// console.log(test);
//   console.log(test_obj) ;             //here it sthows that lanme is cahnges as it is refernce type not primitve type 




/***********************day20********************************/



// using higher oand lower order function
// passing lower order function as argument

// const lower_fun=function(str){
//     return(str.toLowerCase());
// }
// const higher=function(lower){
//       let str='VisHwaS';
//       console.log(str);
//       console.log(`to lower case ${lower(str)}`);  //calling lower order function

// };
// higher(lower_fun);  
// // returning function in argument function
// const greet=(subject)=>{
//     return (marks)=>{
//         console.log(`${subject}:${marks} congrats`);
//     };
// };
// const result=greet('maths');                    // creating variable to acess the returned function
// result(36);                                     // calling the returned function
// greet('science')('90');                         // without creating variable directly creating  directly argument 


// // using call,apply and bind
  
// const sports_billing={
//     item:'cricket bat',
//     cost:'3000 rs',
//     item_array:[],
//     buying:function(fname){
//         console.log(`${fname} purchased ${this.item} for ${this.cost}`);
//         this.item_array.push({customer:fname,goods:this.item,total:this.cost});

//      }
// };
// sports_billing.buying('vishwas');// natural this will point to sports_billing object


// vegetable_billing={
//     item:'ladies finger',
//     cost:'50rs',
//     item_array:[]
// }

// const buying=sports_billing.buying;
// const buyer_name=['lucia'];
// //setting this to vegetable_billing using apply and call
// buying.apply(vegetable_billing,buyer_name);
// buying.call(vegetable_billing,'vishwas'); 
// // setting this to vegetable_billing as well as sports_billing object this will not call the function this is used to whe we are using it on evet listener
// const binding_vegies=buying.bind(vegetable_billing);
// const binding_sports=buying.bind(sports_billing);
// binding_vegies('jonny');
// binding_sports('andreson');

// console.log(vegetable_billing.item_array);
// console.log(sports_billing.item_array);


// // using bind for generic function  and setting default parameter  and making separate function
 
// const rr_calculator=function(over,runs){
//     let runrate;
//     runrate=runs/over;
//     return(runrate);
//  };
//  // using bind operator to set over 50 for one day match and create function
//  const odi=rr_calculator.bind(null,50);
//  console.log(odi(300));
//  const t20=rr_calculator.bind(null,20);
//  console.log(t20(200));


/* closure examples  and also uisnf iife*/ 
 
// (function(){
//     const header=document.querySelector('h1')
//     header.style.color='red';
//     document.querySelector('body').addEventListener('click',function  () {
//             header.style.color='blue';                       // even though if  the global execution contest gets popped out we were still able to acess the variable header becalue it states in closure  
//     });
        
    
// })();



/***********************day21********************************/


// more on arrays
/* let demo1=[10,45,90,100,89];
let demo2=[100,300,350,750];
let demo_slice=demo1.slice(1,4);
console.log(demo_slice)
let demo1_splice=demo1.splice(-1);
console.log(demo1_splice);     // returns the element that is removed from original array
console.log(demo1);           // shows that demo1 is mutated

demo2.reverse();
console.log(demo2);          // original array gets mutated

let demo_concated=demo1.concat(demo2);
console.log(demo_concated);   // original array is not affected

let demo_join=demo1.join('-');
console.log(demo_join);       // converts to string

let last=demo1.at(-1);        // using negative indexing

console.log(last);      

// loop for each loop on arrays
demo1.forEach(function(dem,index,arr){
    console.log(`${dem}*${index}=${dem*index}`);
    if(index==demo1.length-1){
          console.log(arr);
    }


      
});
// for each on map
let demo_map=new Map([
    ['fname','vishwas'],
    ['hobby','cricket'],
    ['proession','developer'],
    ['favrouitelanguage','javascript'],

]);
demo_map.forEach(function(value,key,map){
    console.log(`${key}: ${value}`);
    if(key==='favrouitelanguage'){
        console.log(map);
    }
});
let demo_set=new Set([1,3,4,5,6,8,9,0,0]);
demo_set.forEach(function(vlaue,key,map){
    console.log(vlaue);
    console.log(key);
  ;
}) */

/***********************day22********************************/
// const before_begin=`<div>using before begin results in content coming over here</div>`;
// const after_begin=`<div>using after begin results in content coming over here</div>`;
// const before_end=`<div>using before end results in content coming over here</div>`
// const ater_end=`<div>using after end results in content coming over here</div>`
// const demo=document.querySelector('.adjacent');
// console.log(demo);
// demo.insertAdjacentHTML('beforebegin',before_begin);
// demo.insertAdjacentHTML('afterbegin',after_begin);
// demo.insertAdjacentHTML(`beforeend`,before_end);
// demo.insertAdjacentHTML(`afterend`,before_begin);

// // using map() 
// const names=['vishwas','parashar'];

// // let initials1=names.map(function(name){
// //     return name[0];
// // }).join('').toUpperCase();
// let initials1=names.map(name=>name[0]).join('').toUpperCase();

// console.log(initials1);
// // using filter
// const sentence='hello there i am tired Why am I doing all the fucking work?';
// let words=sentence.split(' ');
// const filtered=words.filter(function(word,ind,ar){
     
//     return word!='fucking';
    
// }).join(' ');
// console.log(filtered);

// using reduce also using accumulator 
// const largest_word=words.reduce(function(acc,word,idex,arr){
//   if(acc>word.length){
//       return acc;
//   }else{
//       return word.length;
//   }
// },0);
// console.log(largest_word);
    
/***********************day23********************************/
// const student_marks=[12,30,45,67,98,100,46,55]
// // method chaining using  on arays
// const highest_pass=student_marks.map((mark)=>(mark)/100*100).filter(mark=>mark>35).reduce((acc,mark)=>{
//   if(mark>acc){
//     acc=mark;
//     return acc;
//   }
//   return acc;
// },0)
// console.log(highest_pass);
// //find () method
// const first_student_to_pass=student_marks.find(mark=>mark>35);
// console.log(first_student_to_pass);
// //findIndex() method used here
// const idex_of_highest=student_marks.findIndex(mark=>mark===100);
// console.log(idex_of_highest)
// // using some() returns checks true or false
// const some_pass=student_marks.some(mark=>mark>35);
// console.log(some_pass);
// // using every() returns true if all the element satisfy the condition
// const all_pass=student_marks.every(mark=>mark>35);
// console.log(all_pass);
// // flat method with default level is 1
// const level1_nested=[[1,2,3],6,5,[9,10]];
// const level1_flat=level1_nested.flat();
// console.log(level1_flat);
// // flat argumet as 2 which checks 2 levels
// const level2_nested=[[1,2,3,[6,7]],9,10];
// const level2_flat=level2_nested.flat(2);

// const arr=[1,2,5,7,9];
// // flat map() combination of flat and map()
// const flat_map=arr.flatMap(x=>[x,x*2]);
// console.log(flat_map);


/***********************day24********************************/

//sorting string using just sort
// const eng=['abraham','zebre','cat','abc','next'];
// const eng_sort=eng.sort();
// console.log(eng_sort);
// // sorting single digit lnumber using jsust sort
// const single_dig=[1,3,2,9,5];
// const single_sort=single_dig.sort();
// console.log(single_sort);
// // sorting douhble digits and integer using one call back
// const double_diginteger=[-22,-45,-56,0,500,3,6,9];
// const double_sort=double_diginteger.sort((a,b)=>a-b);
// console.log(double_sort);
// //using array constructor  to create arrey
// const arr_demo1=new Array(7,8,9,10,80);
// console.log(arr_demo1);
// // using fill() method to populate
// const arr_demo2=new Array(7);
// arr_demo2.fill(5,0,5);
// console.log(arr_demo2);
// //using .from to create an array with a condition mentioned in call back
// const arr_demo3=Array.from({length:5},(_,i)=>i+3);
// console.log(arr_demo3);



// //nodelist is returned when we use queryselectorAll() we need to convert that to array 

// const demos=document.querySelectorAll('.demo');

// //converting  nodelist ot arrays using Array.from

// const arr_demos=Array.from(demos);   //here node list is turned arrays
// console.log(arr_demos);
// console.log(arr_demos.map(demo=>demo.textContent));
