// Question 1

// let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable

// Question 2
//for in  loop asses array and object  array from index number and object from the key

<p id="demo"></p>
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

//Question 3

//scope Chain 
// the scope chain is used to resolve the value of variable names in javascript.


//local scope function inside declare the variable and assess inside the funnction
//not outside function declare and assse


// scope chain in javascript is lexical defined which means that we can see that the scope chain will be by looking at the code.

 // at the top of the scope chain is the globle scope , which is the window object in the browser.


 //Lexical scoping  a function  that is lexically within another function get access to the scope of the outer function .(inner function can get access to theire parent function variables But the vice-versa is not true.) 


 var a = 'hello gyus '; // global scope
 function first (){
  var b = 'how are you ?'// local scope 
   second ();

   function second() {
      var c = ' my self vinayak patil';
      console.log(a+b+c);
    
   }


 }
 first();

 //question 4
 //difference between null and undefined 
//Null value in JavaScript. Null represents no value and variables can be assigned with the Null keyword to represent them...

//Undefined value in JavaScript. A variable that has been declared but whose value has not been assigned is referred to as...


//question 5 map and fiter array 

//map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]


//filter
const number = [1, 2, 3, 4];
const evens = number.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]


//Quuestion 5
 //symbol is new primitive type 

 const a = symbol();
  console.log(typeof a);

//Question 6 
  //passed by value. primitive data type 
  // passed by references. non primitive  data type
//primitive data type string{""}, number[3.14], boolean value{true, false},null, undefined.
  let  a = 10
  let b = a

  b = a+5;
  console.log(b);// 15 
  console.log(a);// 10

  //non primitive  data type //object, array 
 let a  = {
  name : "vinayak",
  age : 23,
 }
 let obj = a;
 obj.age = 25;
 console.log(obj);


// Question 7
 //IIFE
 (function (){
  // code here

 })();




