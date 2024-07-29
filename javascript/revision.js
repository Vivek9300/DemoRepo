
//Array
//---------------------------------
// let str = "vivekbhasme";
// let slicestr = str.slice(1);
// console.log(slicestr);


// let str = [10,20,30,40,50]
// str.splice(3,4,-8)
// console.log(str);


// let str = [10,20,30,40,50]
// str.push(100)
// console.log(str)


// let str = [10,20,30,40,50]
// str.pop()
// console.log(str)


// let str = [10,20,30,40,50]
// str.shift()
// console.log(str)


// let str = [10,20,30,40,50]
// str.unshift(500)
// console.log(str)


// let str = [10,20,30,40,50]
// console.log(str.includes(10))


// let str = [10,20,30,40,50]
// console.log(str.indexOf(50))


// let str = [10,20,30,40,50]
// console.log(str.reverse())


// let str = [20,80,9,650,70,65]
// let newarr = str.sort((a,b)=>{
//     let w = a-b
//     return w;
// });
// console.log(newarr);


// let str = [10,20,30,40,50]
// console.log(str.toString)
//-------------------------------------------------------------------------

//function

// function vivek(){
//     console.log("This is my frist function")
// }
// vivek()

// let a = 20;
// let b = 30;
// function addition(){
//     let sum = a+b;
//     console.log(sum)
// }
// addition()

//  let myNewPromise = new Promise((resolve,reject)=>{
//     let b = 85;
//     if(b==45){
//         resolve("ahe");
//     }
//     else{
//         reject("nhi")
//     }
//  })


//  myNewPromise.then((message)=>{
// console.log("nakki re baba",message)
//  }).catch((err)=>{
//     console.log(err,"shevati nhi ala")
//  })


//  let mypromise = new Promise((resolve,reject)=>{
//     let a = 50;
//     if(a == 40){
//         resolve("Correct")
//     }
//     else{
//         reject("Not Correct");
//     }
//  })

//  mypromise.then((massage)=>{
//     console.log("It is ",massage)
//  }).catch((error)=>{
//     console.log("It is ",error)
//  })






//  let mypromise = new Promise((resolve,reject)=>{
//     let h = 100;
//     if(h == 100){
//         resolve("It is correct")
//     }
//     else{
//         reject("It  is not correct")
//     }
//  })

//  mypromise.then((massage)=>{
//     console.log(massage)
//  }).catch((error)=>{
//     console.log(error)
//  })


// async function finaldata(){
//     let fetchdata = await fetch("https://dummyapi.online/api/movies")
//     console.log(fetchdata)
//     let datafetch = await fetchdata.json()
//     console.log(datafetch)
// }

// finaldata();




// let mypromise = new Promise((resolve,reject)=>{
//     let a = 100;
//     if(a = 100){
//         resolve("This is correct")
//     }
//     else{
//         console.log("This is not correct")
//     }
// })

// mypromise.then((massage)=>{
//     console.log(massage)
// }).catch((error)=>{
//     console.log(error)
// })




// async function finaldata(){
//     let fetchdata = await fetch("https://dummyapi.online/api/movies")
//     console.log(fetchdata)
//     let datafetch = await fetchdata.json()
//     console.log(datafetch)
// }

// finaldata()




// let a = prompt("Enter the frist no.")
// let b = prompt("Enter the second no.")

// let fristno = Number(a);
// let sec = Number(b);

// function add(){
//     let add = fristno + sec ;
//     document.getElementById("operation").innerHTML = add;
// }

// function sub(){
//     let sub = fristno - sec ;
//     document.getElementById("operation").innerHTML = sub;
// }

// function mul(){
//     let mul = fristno * sec ;
//     document.getElementById("operation").innerHTML = mul;
// }

// function div(){
//     let div = fristno % sec ;
//     document.getElementById("operation").innerHTML = div;
// }




// let a = prompt("Enter the frist no.")
// let b = prompt("Enter the Second no.")

// let fristno = Number(a)
// let Secondno = Number(b)

// function add(){
//     let add = fristno + Secondno;
//     document.getElementById("operation").innerHTML = add;
// }

// function sub(){
//     let sub = fristno - Secondno;
//     document.getElementById("operation").innerHTML = sub;
// }

// function mul(){
//     let mul = fristno * Secondno;
//     document.getElementById("operation").innerHTML = mul;
// }

// function div(){
//     let div = fristno / Secondno;
//     document.getElementById("operation").innerHTML = div;
// }
// function onClickHandler(){
//     document.getElementById("operation").innerHTML =  "Hello mr vivek "
// }


// function vivek(){
//     document.getElementById("enter").innerHTML ="oop__"
// }



let str = [20,80,9,650,70,65]
let newarr = str.sort((a,b)=>{ return a - b
    // let w = a-b
    // return w;
    
});

let largest = newarr[newarr.length -1]
let secondLargest = newarr[newarr.length -2]

console.log("This is largest number :- " ,largest)
console.log("This is second largest :-" ,secondLargest)
console.log(newarr)

// let arr = [20,80,9,650,70,65]
// let greter = -1;
// for(let i=0; i<=arr.length; i++){
//     if(arr[i] < greter){
//         console.log(greter)
//     }
// }