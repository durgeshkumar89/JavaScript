// JavaScript object -------------------------------------------------------JavaScript Language(object)-------------------------------------

/* const laptop = {
    model : "xyz",
    color : "black"
}
console.log(laptop.color);

const laptop = {
    model : "xyz",
    color : "black"
}
console.log(laptop);
*/

//javascript variables----------------------------------------------------------------------------------------
//----------------------------------------------------------let, var, const (variables)---------------------------------------------------------------------// 

/* let language = "javascript";
console.log(language); */

//block scope -----+++++++++++++++++++

// const secondInMinutes = 60;
 
// secondInMinutes = 30;

// function scope -----+++++++++++++++outside curly correct use in function scope
// var language = "javascript";
/* if (true) {
    var age = 25;
    
} 
console.log(age); */

//block scope -----+++++++++++++++++++inside curly correct use in block scope
/* if (true) {
    let age = 25;
    console.log(age);
} */
 
//block scope -----+++++++++++++++++++outside curly NotCorrect use in block scope
/* if (true) {
    let age = 25;
    console.log(age);
} 
console.log(age); */

//-----------------------------------------Hoisting-------------------------------------//

// console.log(greeting);

// var greeting = "hello";

//undefined

//------------var, let, const ??????-------------//

//const num = 40;

//console.log(num);---------const case-> values fixed not changed in values--------------//

// let num = 40;

// num = 30;

// console,log(num); ----------let case-> value changed ----------------------//

//-------------------------------------------------Data Types----------------------------------------------------//
/* let age = 25;

age = 'TwentyFive';

console.log(age); */

//------------------Primitive data types------------------------------//
// 1. Number------------+++++++++++++++

//let age = 25;
//let temp = -25;
//let price = 50.50;

// 2. String-------------++++++++++++++
//let name = "Durgesh";

// 3. Boolean---------------+++++++++++
// true / false
// let isLoggedIn = true;
// let hasPermission = false;

// 4. Undefined---------------+++++++++++
//let age;
//console.log(age);

// 5. BigInt-------------------++++++++++++++++++
// 2 ** 53 - 1 
// < 9007199254740991

// 6. Symbol -------------------++++++++++++++++++
// Unique 

//--------------------------------Structural types----------------------------------------//
// 1. Object---------------++++++++++++++++++++
       // 1.1 Function 
       // Non-data structure
       // callable

       // 1.2 Arrays
          // Collection of values
         // const numbers = [2,3,4, 'javascript', 'Python', { name: "Durgesh"}];

      // 1.3 Maps
      // 1.4 Set 
      // 1.5 Date
      
//---------------------------------Structual root----------------------------------------//
// null (object)

//----------------------Operators---------------------------------//
/*
1. Assignment operators
2. Comparison operators
3. Arithmetic operators
4. Bitwise operators
5. Logical operators
6. String operators
7. Conditional (ternary) operators
8. Comma operators
9. Unary operators
10. Relational operators
*/

// Assignment operator(=)---------------++++++++++++++
//let x = 10;
//let y;
//y = x;
//console.log(y);

// Compound operator------------------++++++++++++
// let x = 10;
// let y = 20;

// x += y; // x = x + y;
// x -= y; // x = x - y;
// x /= y; // x = x / y;
// x *= y; // x = x * y;

// console.log(x);

// Arithmetic operators-------------------+++++++++++++(+, -, /, *, **)
/* let x = 10;
x = x + 1; // x += 1; // x++; increment
console.log(x);

let x = 10;
x = x - 1; // x -= 1; // x--; Decrement
console.log(x); */

// let x = 10;
// console.log(x ** 2);

// Logical operators----------------+++++++++++++++++(imp, Left to Right Perform)
// 1. Logical AND && ---------------------++++++++++++++
/* let happy = true && true;
console.log(happy);  // result is true

let happy = true && false;
console.log(happy);  // result is false */

/* const isLoggedIn = true;  // user logging hai.
 const hasPermission = true; // user logging bhi hai Or user ke pass permission bhi hai.
 
 if (isLoggedIn && hasPermission) {
    // Delete an item
    console.log('Item deleted successfully');
 }
*/

// 2. Logical OR || -------------------------------+++++++++++++++++++++++++
// const happy = true || false;

/* const isLoggedIn = true;
const hasPermission = false;

if (isLoggedIn || hasPermission) ={
    console.log('Item deleted successfully');
} */

// 3. Logical NOT ! -----------------------------------+++++++++++++++++++++++++++++
/* const happy = true;
console.log(happy);

const happy = true;
console.log(!happy); // Result is false.

const isLoggedIn = false;

if (!isLoggedIn){
    console.log('Redirect to login page');
}
*/

// Conditional operators (Ternary operator)-------------------------------------
/* const userRole = 'admin';

if (userRole === 'admin'){
    console.log('You are an Admin');
} else {
    console.log('You are not an Admin');
} */

 
// condition ? '' : '';  (Syntax)

/* const userRole = 'admin';

userRole === 'admin' ? console.log('You are an Admin') : console.log('You are not an Admin');    //(Ternary operator)
*/

// Comparison operators-----------------------+++++++++++++++++++++++++++

// Equal (==)
// Not equal (!=)
// Strict equal (===)
// Strict not equal (!==)
// Greater than (>)
// Greater than or equal (>=)
// Less than (<)
// Less than or equal (<=)

// console.log(4 == 4); Result is true.
// console.log(4 == 5); Result is false.

// console.log(4 != 5); Result is true.

// console.log(4 === '4'); Result is false.
// coercion
// console.log(4 > 5); false
// console.log(4 < 5);  true
// console.log(6 >= 5); true
// console.log(5 <= 8); true

// console.log(3 + 10 * 2);  Result 23
// console.log((3 + 10) * 2);   Result 26

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence (imp Table)

// console.log(3 > 2 && 2 > 1);  true

// console.log(3 > 2 > 1); false


//-------------------------------------------------Arrays and Loops-------------------------------------------//

// const language = [ 'JavaScripr', 'React', 'C'];

//console.log(language.length); -----> length
//console.log(language[1]); --->  index NO

// language.push('HTML');
// console.log(language);  ---> push method (last me item insert kerta hai)

// language.unshift('Java');
// console.log(language); ---> unshift method (start me item insert kerta hai)

// language.pop();
// console.log(language); ---> pop method (last item array se nikaal deta hai)
// console.log(language.pop());

// language.shift(); ---> shift method (first item array se nikaal deta hai)
// console.log(language);

// loops------------------++++++++++++++++
/* for(let i = 0; i < 10; i++) {
    console.log('*');
} */

/* const actors = [
    {
        name: 'Actor 1',
        payment: 500
    },
    {
        name: 'Actor 2',
        payment: 200
    },
    {
        name: 'Actor 3',
        payment: 150
    }
] */

/* for(let i = 0; i < actors.length; i++) {     ----> For loop
    actors[i].payment = actors[i].payment - 10; 
    
}  
console.log(actors);
*/

// ForEach-----------------------------------
/* actors.forEach((actor) => {
    actor.payment = actor.payment - 10;
   
})

console.log(actors); */

// ForOf---------------------------------------
/* for (let actor of actors) {
    actor.payment = actor.payment - 10;
}

console.log(actors); */

// Filter----------------------+++++++++++++++++++++++++++
/* const students = [
    {
        name: 'Student1',
        marks: 60
    },
    {
        name: 'Student2',
        marks: 45
    },
    {
        name: 'Student3',
        marks: 35
    }
 ]

 const failed = students.filter((student) => {
    if (student.marks < 45) {
       return true;
    } else {
        return false;
    }
})
console.log(failed); */

// Map ----------------------------------+++++++++++++++++++++++

/* const users = [
    {
        fname: 'John',
        lname: 'Doe'
    },

    {
        fname: 'Dkupadhyay',
        lname: 'Doe'
    }
];

const finalUser = users.map((user) => {
   return {
    fullname: `${user.fname}  ${user.lname}`
   }
});

console.log(finalUser); */

// Reduce ----------------------------+++++++++++++++++++++++++++++
/* const movies = [
    {
        name: "Social",
        budget: 100
    },
    {
        name: "Matrix",
        budget: 150
    },
    {
        name: "Bhola",
        budget: 300
    }
];

/* let total = 0;

movies.forEach((movie)=> {
   total = total + movie.budget;
});


console.log(total); 

const total = movies.reduce((acc, movie) => {
  acc = acc + movie.budget;
  return acc;
}, 0);

console.log(total); */

// Indexof--------------------------------+++++++++++++++++++
/* const admins = [2, 1, 5];

const user = {
    name: 'xyz',
    id: 6
}


const isAdmin = admins.indexOf(user.id) > -1;
console.log(isAdmin); */

/* const admins = [2, 1, 5];

const user = {
    name: 'xyz',
    id: 6
}

console.log(admins.includes(user.id)); */

// Find----------------------------------++++++++++++
/* const users = [
    {
        name: 'xyz',
        id: 1
    },
    {
        name: 'abc',
        id: 2
    },
    {
        name: 'pqr',
        id: 3
    }
];

const myUser = users.find((user) => {
    return user.id === 2;
       
})
console.log(myUser); */

// sort ------------------------------+++++++++++++++++++

/* const names = [ 'John', 'Ram', 'Durgesh', 'Aman' ];

names.sort();

console.log(names); */

// splice ----------------------+++++++++++++ (delete array name)
/* const names = [ 'John', 'Ram', 'Durgesh', 'Aman' ];
names.splice(2, 1);  ------> 2 ka matlab index number | 1 ka matlab item shankhya (mtlb kitna item delete kerna hai).

console.log(names) */

//+++++++++++++++++++++++++++++++++++++++++++++++++Javascript Functions+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/* function login(username, password) {



    console.log(`${username},Logged in successfully`);
}

login('Durgesh');  // function ko call kiya gya hai login(); */

/* function uppercase(str) {
    return str.toUpperCase();
}

const result = uppercase('durgesh');

console.log(result); */

/* function calculateArea(width, height) {
    const area = width * height;
    return area;
}

const area = calculateArea(30, 40);

console.log(area); */

// Defalut parameters-------------------

/* function calculateArea(width, height = 1) {
    const area = width * height; 
    return area;
}

const area = calculateArea(30);

console.log(area); */

//Variable scope-------------
// function download() {
//     const fileName = 'xyz.pdf'; //Baher ke variable ko bhi function ke ander access ker sakte hain.
//     console.log(fileName)
// }

// download();

// Function declaration and functio expression

//Declaration
// function login() {

// }


//Expression (anonymous functio)
// const login = function () {
//     console.log('Logged in');
// }

// login();

// callback++++++++++++++++++++++++++++++++++++++++++++++++++

// function formatText(text, formatCv) {
//     return typeof formatCv === 'function' ? formatCv(text) : text.toUpperCase();
// }

// const result = formatText('hello', function(text){
//     return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);


// IIFE (Immediately invoked function expression)
// (function setup() {
//     console.log('setup done!');
// }());


// Arrow functions===================================================
// const login = function () {
//     console.log('Logged in')
// }
// login();

// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// const result = sum(5,5);

// console.log(result);


//==============Good practice==================//

// 1.Naming
// show, get, calc

// 2. One function one action
// 3. function name should be descriptive

// Asynchronous JavaScript ===============================================
// console.log('hello')

// setTimeout(function() {
//  console.log('I am from setTimeout');
// },3000);

// console.log('durgesh')

// console.log("Start")

// function waitforSevenSeconds() {
//     let ms = 7000 + new Date().getTime();
//     while(new Date() < ms) {}
// }

// setTimeout(() => {
//     console.log('I am Asynchronous')
// },2000)

// waitforSevenSeconds();

// callbacks========++++++++++

//Scenario
/** 
 * 1. Register
 * 2. Send welcome email
 * 3. Login
 * 4. Get user data
 * 5. Display user data
*/

// function waitforSevenSeconds() {        // Synchronous Code line by line ==================
//         let ms = 7000 + new Date().getTime();
//         while(new Date() < ms) {}
//      }

// function register(){
//     waitforSevenSeconds();
//     console.log('Register end')
// }
// function sendEmail(){
//     waitforSevenSeconds();
//     console.log('Email end')
// }
// function login(){
//     waitforSevenSeconds();
//     console.log('login end')
// }
// function getUserData(){
//     waitforSevenSeconds();
//     console.log('Get user data')
// }
// function displayUserData(){
//     console.log('Display user data')
// }

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log('Other application work!')

// function register(callback){  // Asynchronous function==================
//     setTimeout(() => {
//         console.log('Register end')
//         callback();
//     }, 1000)
    
// }
// function sendEmail(callback){
//     setTimeout(() => {
//         console.log('Email end')
//         callback();
//     }, 5000)
    
// }
// function login(callback){
//     setTimeout(() => {
//         console.log('login end')
//         callback();
//     }, 3000)
    
// }
// function getUserData(callback){
//     setTimeout(() => {
//         console.log('Get user data')
//         callback();
//     }, 4000)
    
// }
// function displayUserData(){
//     setTimeout(() => {
//         console.log('Display user data')
//     }, 1000)
    
// }

// //callback hell------
// register(function(){ // callback function
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
            
//         });
      
//     });
    
// });


// console.log('Other application work!')

//------------------------------------------------------Promises----------------------------------------------------//
// function register(){  

//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             console.log('Register end')
//             resolve();
//         }, 1000)
        
//     })
   
// }
// function sendEmail(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Email end')
//             //reject('Error sending email');
//             resolve();
//         }, 5000)
//     })
   
    
// }
// function login(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('login end')
//            resolve();
//         }, 3000)
//     })
    
    
// }
// function getUserData(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Get user data')
//            resolve();
//         }, 4000)
//     })
    
    
// }
// function displayUserData(){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Display user data')
//             resolve();
//         }, 1000)
        
//     })
    
// }

//callback hell------
// register(function(){ // callback function
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
            
//         });
      
//     });
    
// });

// register()  // promises
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch((err) => {
//    console.log('Error:', err);
// });


// async function authenticate() {
// try{
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
//    }catch(err){
//     console.log(err);
//     throw new Error();
//    }
// }

// authenticate().then(() => {
//     console.log('All set!')
// }).catch((err) => {
//     console.log(err)
// });


// console.log('Other application work!')

//============================================================DOM Manipulation=========================================================//
// 1. getElementById

// const heading = document.getElementById('heading');
// console.log(heading);

// 2. getElementByTagName

// const heading = document.getElementsByTagName('h1')
// console.log(heading);

// 3. getElementByClassName

// const heading = document.getElementsByClassName('heading')
// console.log(heading);

// 4. querySelector

// const heading = document.querySelector('#id');
// console.log(heading);

// 5. querySelectorAll

// const heading = document.querySelectorAll('.heading');
// console.log(heading);


//Traverse -DOM
// 1. ParentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);


// 2. ChildrenNode

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 4. nextElementSibling

// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling)

// 5. previousElementSibling

// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling)

// Manipulation==========+++++++++++++

// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is awesome!';
// heading.style.color = 'red';

// heading.style.fontSize = '100px';

// heading.classList.add('title');
// heading.classList.remove('heading');

// Create elements

// const  heading = document.createElement('h1');
// heading.classList.add('title');
// heading.innerHTML = 'I am Durgesh upadhyay!';
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);

// const subHeading = document.createElement('h3');
// subHeading.classList.add('title');
// subHeading.innerHTML = 'javascript is a awesome';
// heading.insertAdjacentElement('beforebegin',subHeading);

// console.log(heading);

// link(insertAdjacentElement) https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

//DOM events -------------------------
// const button = document.querySelector('#btn')
// const heading = document.querySelector('#heading')

// button.addEventListener('click', function(event) {
//     heading.style.fontSize = '60px';
//     heading.style.color = 'royalblue';
//     console.log('Button clicked', event);
// })

//===========================let's try some projects=========================//
// const btn = document.querySelector('#btn');
// const blub = document.querySelector('#blub');

// btn.addEventListener('click', function() {
//     console.log(blub.src);

//     if(blub.src.match('off')){
//         blub.src = './on.jpg';
//         btn.innerHTML = 'Turn OFF';
//     }else{
//         blub.src = './off.jpg';
//         btn.innerHTML = 'Turn ON';
//     }
   
// })

//*==================================================ES6 AKA Ecmascript 2015===========================================================*//
                                                     //var /let,const
// let const   ==> (let,const jo hota hai yeh block scope hota hai.)
// var age = 18;

// if (age >= 18) {
//     var driving = true;
//     console.log(driving);
// }



//var productName = 'Laptop';    // ==>(var--> var jo hota hai yeh function scope hota hai.)

// code polute

// var age = 18;

// if (age >= 18) {
//     var driving = true;
// }

// console.log(driving);


// var product = 'Laptop';
// console.log(product)

// const age = {    // correct 
//     years: 19,
// };

// age.years = 20;

// console.log(age);

// const age = {    // Incorrect 
//     years: 19,
// };

// age = 20;

// console.log(age);

// (https://caniuse.com/?search=const) can i use link ==> cheack on supported browsers.

// Arrow functions=================

// function greet() {
//     console.log('Good Morning')
// }

// const addition = (a, b) => {
//     console.log(a + b)
// }

// addition(5, 5);

// const shop = {
//     purchage: () => {
//         console.log(this);

//     },
// };

// shop.purchage();

//=================================================================================================================//

// const myBtn = document.querySelector('#myBtn');   

// const shop = {

//     price: 100,
//     buy: function(){

//         myBtn.addEventListener('click', () => {
//             console.log('I spent ' + this.price);
//         });
//     },
// };

// shop.buy();