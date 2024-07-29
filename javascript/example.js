//1) Write a fun. to add two no

// function addition (){
//     let a = 20 ;
//     let b = 10 ;
//     sum = a + b ;
//     console.log(sum);
// }
// addition()
//--------------------------------------------


//2)Create a fun to find the largest of three number

// function largest() {
//     let a = 200 ; 
//     let b = 505 ;
//     let c = 90 ;
//     if (a > b){
//         console.log("A is greter..." +a);
//     }
//     else if (b > c) {
//         console.log("B is greter..." +b);
//     }
//     else {
//         console.log("C is greter..." +c);
//     }
// }
// largest()
//-------------------------------------------------------

//3) Write a fun to check if no. is even or odd

// function oddeven() {
//     let a = prompt("Enter the number...");
//     if (a % 2 == 0){
//         console.log("No. is even..." +a);
//     }
//     else {
//         console.log("No. is odd..." +a);
//     }
// }
// oddeven()
//---------------------------------------------------------

//4) Create a fun to reverse the  string

// function revstr() {
//     let str = ["Vivek"];
//     let newstr = str[0].split("");
//     let newname = newstr.reverse()
//     console.log(newstr.join(""));
// }
// revstr()
//----------------------------------------------------------

//5) Write a function to check if a string is a palindroma

// let arr = ["madam"];
// let str = arr[0];
// //let newarr = str.split('').reverse().join('');
// let newarr = str.split('');
// let rev = newarr.reverse();
// let joined = rev.join('');
// console.log(newarr);
// console.log(rev);
// console.log(joined);
// if (arr == joined) {
//     console.log("It is palindrome...");
// }
// else{
//     console.log("It is not palindrome...");
// }

//-------------------------------------------------------


//6) Create a fun to find the factorial of a number  

// function factorial(){
//     let n = 5;
//     let fact = 1;
//     for(let i=1;i<n;i++){
//      fact += (fact*i);
// }
// console.log(fact);
// }
// factorial()
//---------------------------------------------------

//7) Write a function to find the Fibonacci series up to a certain number of terms

// function fiboseries(){
//     let n = 10;
//     let fibo = [0,1];
//     for (let i=2; i<=n; i++) {
//         fibo.push(fibo[i - 1] + fibo[i - 2]);
//     }
//     console.log(fibo);
// }
// fiboseries()
//----------------------------------------------------

//8) Write a fun to check given number is leap year or not

// function leapyear(){
//     let year = prompt("Enter any number...");
//     if (year % 4 ==  0) {
//         console.log("Leap year...");
//     }
//     else {
//         console.log("It is not leap year...");
//     }
// }
// leapyear()
//-----------------------------------------------

//9) Write a function to find the sum of digits of a number

//--------------------------------------------------

//10) Create a function to convert Celsius to Fahrenheit and vice versa

// function tofahrenheit(){
//     // let Celsius = 25 ;
//     let Celsius = prompt("Enter value..."); 
//     let Fahrenheit = (1.8 * Celsius) + 32 ;
//     console.log("The fahrenheit..." +Fahrenheit);
// }
// tofahrenheit()

//-------------------------------------------------

//11) Write a function to find the longest word in a sentence.

// let str = "This is my frist job and i completed my graduction in engineering";
//-------------------------------------

//12) Create a function to sort an array of numbers in ascending order

function ascending() {
    let arr = [20,55,88,3,3,54,70];
    let newarr = arr.sort((a,b)=>{
        let w = a-b
        return w;
    });
    console.log(newarr);
}
ascending()
//-------------------------------------------


//13) Create a function to check if a given number is prime

// function primno(){
//     let a = 6 ;
//     if ((a % a == 0) && (a % 1 == 0) && (a % 2 != 0)) {
//     console.log("This is prime number..." +a);
//     }
//    else {
//        console.log("Not a prime number..." +a);
//     }
// }
// primno()
//-------------------------------------

//14) Create a function to reverse the order of words in a sentence.

// function reversestr(){
// let str = "This is my frist job and i completed my graduction in engineering";
// let newstr = str.split(" ");
// // console.log(newstr);
// let update = newstr.reverse();
// console.log(update.join());
// }
// reversestr()
//------------------------------------------

//15) Create a function to find the second largest number in an array

// let arr = [200,75,40,70,50];
// let newarr = arr.sort((a,b)=>{
// return a-b
// });
// console.log(newarr[arr.length-2]);

// let  max = [0];
// for(let i=0; i<arr.length; i++){
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);





// let arr = ["madam"];
// let str = arr[0]; // Get the string from the array
// let reversedStr = str.split('').reverse().join(''); // Reverse the string

// if (reversedStr === str) {
//     console.log("It is a palindrome...");
// } else {
//     console.log("It is not a palindrome...");
// }






