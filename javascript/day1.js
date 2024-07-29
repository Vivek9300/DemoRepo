
 //let a = new String("vivek");
//  let a = "vivek is a computer science student"
//     let check = a.charAt(9)
//     console.log(check)



// concat
// let str1 = "Hello"
// let str2 = "Vivek"

// console.log(str1.concat(' ', str2));


// match 
// let str = "Hello good morning , What is the task";
// let regex = /[A-Z]/g;
// let same = str.match(regex);

// console.log(same);

// match  all
// let str = "how are you "
// let regex = 

//repeat

// let mood = 'happy!';
// console.log(`I feel ${mood.repeat(5)}today`);

//Replaceall

// let  str = "I think Ruth's dog is cuter than your dog!";
// console.log(str.replaceAll('dog' , 'cat'));

//Substr

// const str = 'Mozilla';

// console.log(str.substr(0));

// console.log(str.substr(2));


// Substring

// let passage = "This is my frist job";
// console.log(passage.toUpperCase());


// Value of

// let greeting = new String('vivek');
// console.log(greeting.valueOf());



// let greeting = 'Vivek';
// console.log(greeting.valueOf());


// let time  = prompt("Enter the time .. ");
// let time = 15 ;
// time = Number(time);

// if (time < 12 && time > 0 ){
//     console.log("Good Morning");
// }

// else if (time == 12) {
//     console.log("Good noon");
// }

// else if (time > 12 && time <= 17) {
//     console.log("Good Afternoon");
// }

// else if (time > 17 && time < 21) {
//     console.log("Good Evening");
// }

// else if (time > 21 && time < 24) {
//     console.log("Good Night");
// }

// else {
//     console.log("Enter correct time");
// }


// let str = "this is my petpet and another is your pet kkshhs pet"
// let indexNumber = str.indexOf('pet');
// console.log(indexNumber)
// let nextOccu = str.indexOf('pet',indexNumber+1);
// console.log(nextOccu);
// let secondOccu = str.indexOf('pet',nextOccu + 1);
// console.log(secondOccu)


// let str = "this is my frist job and this  is your sec job"

// let fristoac = str.indexOf(" is" )
// console.log(str.indexOf(" is" , fristoac + 1));


// const str = 'The quick brown fox jumps over the lazy dog.';
// let indexstart = str.indexOf('fox');
// let indexend = str.indexOf('over');
// console.log(indexstart);
// console.log(indexend);
// let word  = str.slice(16,20);
// console.log(str.slice(10,19));

// console.log(str.slice(indexstart,indexend));

// const str = 'The quick brown fox jumps over the lazy dog.';
// let strArray = str.split("");
// console.log(strArray);
// var b;
// b = 80;
// console.log(b)
// let a = 10 ;
// console.log(a);

// const j = "hello"
// console.log(j);



// const str = "that is my dog it is by from dog shop";
// const fristoac = str.indexOf('is');
// console.log(fristoac);
// console.log(str.indexOf('is', fristoac+1));


// const str = "that is my dog it is by from dog shop";
// const newarray = str.split('i');
// console.log(newarray);


// const str = 'The quick brown fox jumps over the lazy dog.';
// let indexstart = str.indexOf('fox');
// let indexend = str.indexOf('over');
// console.log(indexstart);
// console.log(indexend);
// let word  = str.slice(16,20);
// console.log(str.slice(10,19));


// let str = "VIVEK"
// let c = str.toLowerCase();
// console.log(c);//vivek


// let upper = c.toUpperCase();
// console.log(upper);

// let firstname = "vivek" ;
// let secondname = "bhasme";
// let middleName = "Onkar"
// let fullname = firstname.concat(" ",middleName," ",secondname);
// // console.log(firstname + " "+middleName + " "+secondname);
// console.log(fullname);


// let str = "THIS IS FRIST JOB ";
// let newstr  = str.toLowerCase();
// console.log(newstr)

// let firstname = "pavan";
// let lastname = "pawar";
// console.log(firstname+ " "+lastname);


// let str = "ruchitaisroa mingssssingarden";
// let word = "roaming";
// console.log(word.length);

// console.log(str.includes(word));

// let str = "VIVEK IS A  boy";
// let newstr = str.toLowerCase();
// let word = "boy";
// let word2 = "BOY" ;
// console.log(newstr.includes(word , word2));


// let str = "VIVEK IS A  BOY";

// if (str.includes("boy")) {
//     console.log(true);
// }

// else if (str.includes("BOY")) {
//     console.log(true);
// }

// else {
//     console.log(false);

// }


// let str = "THIS IS MY FRIST JOb";
// let newstr = str.toLocaleLowerCase();

// console.log(newstr);



// let str = "VivekOnkarBhasme";

// // let newStr = str.substring(5,-11);
// let sliceStr = str.slice(2,11)
// // console.log("newStr "+newStr);
// console.log("sliceStr "+sliceStr);

//  let arr = [5,4,6,3,2];

// let sliceArr = arr.slice(1,3)
// console.log(sliceArr);
// let deleted = arr.splice(1,1);

// let str = [10,20,30,40,50];
// str.splice(4,0,-8);
// console.log(str);

// console.log(arr);
// console.log(deleted);
// arr.push(15);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(67);
// console.log(arr);
// arr.shift();
// console.log(arr)


// let arr = [10,20,30,40,50];
// arr.reverse();
// console.log(arr);


// let str = ["vivek"];
// let newname = str[0].split("");
//  let update = newname.reverse()
// console.log(newname.join(""));


// let str = [10,20,30,40];

// console.log(str.toString());
// console.log(newstr);



//function
//---------------------
// let a = 20;
// let b = 40;
// sum(a=9,b)//argument
// function sum(a=5,b){//parameterized function
// let sum = a + b;
// console.log(sum)
// }




// -----------------------


// arrow functions

// let vivek = (x,y)=>{
//     let sum  = x + y
//     console.log("Hello Mr vivek.....",sum);

// }
// vivek(3,4)





// let demo = ()=>{

// }
//---------------

//lexical scoping

// function outerFun(){
//     console.log("in outer function");
//     let c = 20;
//     function innerFun(){
//         let d = "1000"
//         console.log(" in  inner Function");
//         console.log(c);
//     }
//     // console.log(d);
// innerFun();
// }
// outerFun();




// -----------------------------------

//closure

// function animals(){
//     console.log("This is cat..");
//     let a = 30;
//     function cat (){    
//         console.log("cat is running...");
//         console.log(a);

//     }
//     return cat
// }

// let c = animals();
// // console.log(c);

// c()
//--------------------------

// statements
// if else statement  and switch case statements

// let a = prompt("enter the value in string")

// if(a==="vivek"){
// //true
// console.log("Hello vivek")
// }
// else{
// //false
// console.log("better luck next time")

// }
// loops
// for loop--js
//map--array
// filter--array
// reduce--array
//while-js
//do while-js

// for(let i = 0;i<12;i++){
//     console.log("Hello  "+i);
//     if (i == 8) {
//         console.log("in if block");
//     }
// }
// console.log("out");



// let arr = [1,8,4,6,7];
// let newarr = [];
// for (i=0; i<5; i++) {
//     let multi = (arr[i] * 2);
//     if (multi > 12) {
//         // console.log(multi);
//         newarr.push(multi);
//     }
// }
// console.log(newarr);



//example------------------------

// let arr = [10,20,30,40,50];
// let revarr = arr.reverse();
// let newarr = [];
// for (i=0; i < revarr.length; i++) {
//     if (revarr [i] % 3 == 0) {
//         newarr.push(revarr[i]);
//     }
// }
// console.log(newarr);
//------------------------------------

//Map-------------------------------------------------------------------------------------

// let arr = [10,20,30,40,50];
// let modifiedArray = arr.map((element,index,arr)=>{
//     return element*2;
// });

// console.log(modifiedArray);



//  let arr = [10,20,33,40,55];

// let modifiedArray = arr.filter((element, index, arr)=> {
//     return element % 2 === 0 ;
// });
// console.log(modifiedArray);

// let arr = [10,20,30,40,50];
// let modifiedArray = arr.map((element, index, arr)=>{
//     return element * 2;
// });

// console.log(modifiedArray);

// let arr = [10,20,33,47,52,60,77,86,99,100];
// let newarr = [];
// let modifiedArray = arr.filter((element, index, arr)=>{
//     return element % 2 == 0;

// });

// newarr.push(modifiedArray);
// console.log("Even number   " +newarr);



// setTimeout...............>  web api feature
// setTimeout(()=>{
// console.log("Hello vivek")
// },3000)

// setTimeout(()=>{},3000)



// setTimeout(() => {
//-------------------------------------------
//     console.log("Good morning");
//     setTimeout(() => {
//         console.log("1");
//         setTimeout(() => {
//             console.log("2");
//             setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                     console.log("4");
//                     setTimeout(() => {
//                         console.log("5");
//                         setTimeout(() => {
//                             console.log("6");
//                             setTimeout(() => {
//                                 console.log("7");
//                                 setTimeout(() => {
//                                     console.log("8");
//                                     setTimeout(() => {
//                                         console.log("9");
//                                         setTimeout(() => {
//                                             console.log("10");
//                                         }, 1000)
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     },1000)
// },1000)



//Example of settimeout---------------

// for(let i=1; i<=10; i++) {
//     setTimeout(()=>{
//             console.log(i);  
//     },i *1000)
// }
//----------------------------------



// let str = "VIVEK , vivek";
// let lowercase = "";
// let uppercase = "";
// for (let i=0; i<str.length; i++) {
//         let code = str.charCodeAt(i);
//     if (code >= 65 && code <= 90) {
//         code += 32;
//         let concode = String.fromCharCode(code);
//         lowercase += concode;//lowercase = lowercase + concode
//     }
//     else if (code >= 97 && code <= 122) {
//         code -= 32;
//         let concode = String.fromCharCode(code);
//         uppercase += concode;
//     } 
// }
// console.log("lowercase..."+lowercase);
// console.log("uppercase..."+uppercase);


// let strk = "vivek";
// let uppercase = "";
// for (let i=0; i<str.length; i++) {
//         let code = strk.charCodeAt(i);
//     if (code >= 97 && code <= 122) {
//         code -= 32;
//         let concode = String.fromCharCode(code);
//         uppercase += concode;
//     }
// }
// console.log("uppercase..."+uppercase);

// let promisesObj = new Promise(function(resolve,reject){

//     let x = 3;
//     if(x==2){
//         resolve("success");
//     }
//     else{
//         reject("failed");
//     }
    
// })

// promisesObj.then((success)=>{
// console.log("hello the message is ",success);
// }).catch((err)=>{
//     console.log(err);
// })


// let number = new Promise(function(resolve,reject) {
//     let a = 100;
//     if (a == 100){
//         resolve("A is greter than " + a)
//     }
//     else {
//         reject("reject");
//     }
// })

// number.then((yes)=>{
//     console.log( yes );
// }).catch((no)=>{
//     console.log(no);
// })


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

//------------------------------------------------------------
// function myPromise(yes){
//     console.log(yes)
// }

// let myresolve = new Promise(function(resolve,reject){
//     let x = 1 ;
//     if (x == 0) {
//         resolve ("okk");
//     }
//     else {
//         reject ("error");
//     }
// })

// myresolve.then((yes)=>{
//     // console.log(yes);
//     myPromise(yes)

// }).catch((no)=>{
//     // console.log(no);
//     myPromise(no)
// })



//-----------------------------------------------------------------
// let prom = new Promise(function(resolve,reject) {
//     let a = 10 ;
//     let b = 20 ;
//     let sum = a + b ;
//     if (sum > 50) {
//         resolve("sum is greter...")
//     }
//     else {
//         reject("sum is smaller...");
//     }
// })

// prom.then((yes)=>{
//     console.log(yes);
// }).catch((no)=>{
//     console.log(no);
// })



// function success(yes){
//     console.log(yes)
// }

// function failed(no){
//     console.log(no)
// }

// let prom = new Promise(function(resolve,reject) {
//     let a = 100 ;
//     let b = 20 ;
//     let sum = a + b ;
//     if (sum > 50) {
//         resolve("sum is greter...")
//     }
//     else {
//         reject("sum is smaller...");
//     }
// })

// prom.then((yes)=>{
//     success(yes)
// }).catch((no)=>{
//     failed(no)
// })


// let time = new Promise(function(resolve,reject){
    
//     setTimeout(()=>{
//         let a = 10;
//         let b = 20;
//         if (a > b){
//             resolve("Hello good morning...")
//         }
//         else{
//             reject("Whoops...");
//         }
        
//     },1000)
// })

// time.then((yes)=>{
//     console.log(yes)
// }).catch((no)=>{
//      console.log(no)
//  })



// async function apiFetch(){
// let response =await fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);
// let data = await response.json();
// console.log(data)
// }

// apiFetch();



// async function finaldata() {
//     let datafetch = await fetch("https://dummyapi.online/api/movies");
//     console.log(datafetch);
//     let fetchdata = await datafetch.json();
//     console.log(fetchdata);
// }

// finaldata();

// async function data (){
// let data = await fetch("https://dummyapi.online/api/movies");
// let fetchdata = await data.json();
// console.log(fetchdata);
// }

// data(); 





// function onClickHandler(){
//     document.getElementById("someText").innerHTML = "Hello mr vivek"
// }




// let a = prompt("Enter the frist  no.")
// let b = prompt("Enter the sec.no")

// let fristno = Number(a);
// let sec = Number(b);

// function add(){
//     let add = fristno + sec;
//     document.getElementById("operation").innerHTML = add;
// }

// function sub(){
//     let sub = fristno - sec;
//     document.getElementById("operation").innerHTML = sub;
// }

// function mul(){
//     let mul = fristno * sec;
//     document.getElementById("operation").innerHTML = mul;
// }

// function div(){
//     let div = fristno % sec;
//     document.getElementById("operation").innerHTML = div;
// }





// let arr = [1,8,1,88,3,4]
// let newArr = arr.sort((a-b) => return a,b)
// console.log(newArr)


//---------------------------------------------


//(New Batch Example)//


// var b = 20;
// console.log(a)
// var a = 10;
// console.log(b)

// console.log(abc);
// var abc = 3;
// console.log(abc) 


let str1 = 'Vivek'
console.log(str1)

let str2 = "Bhasme"
console.log(str1 +" "+ str2 +" are best friend")

let str3 = `Pune`
console.log(str3)    

console.log(`${str1} & ${str2} are best friends` )


let player = "Virat kohli"
let a = player.substring(-4,6);
console.log(a)