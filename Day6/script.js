let arr = [1, 2, 2, 3, 33, 45, 66];

//map method example of multiply by 2
let newArr = arr.map(x => x*2);
// console.log("newArr: ",newArr);

//filter method example of find even elements
let evenArr = arr.filter(x => x % 2 == 0);
// console.log("evenArr",evenArr); 


//multiply by 3 of every even elements
let result = arr.filter(x => x % 2 == 0).map(x => x *3);
// console.log("result: ",result);

//reduce method example of sum
let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log("sum: ",sum);


const student = [
    {"name": "Alice", "score": 60},
    {"name": "Bob", "score": 64},
    {"name": "Charlie", "score": 80},
    {"name": "David", "score": 45}
]

//find the total score of students who scored more than 60 after multiplying their score by 2
let totalScore = student.filter(x => x.score > 60)
                        .map(x => x.score * 2)
                        .reduce((acc, curr) => acc + curr, 0);

// console.log("Total score of students who scored more than 60 after multiplying 2: ", totalScore); 


//setTimeout
// // console.log("start")
// setTimeout(() => {
//     // console.log("First task completed");
//     setTimeout(() => {
//         // console.log("Second task completed");
//         setTimeout(() => {
//             // console.log("Third task completed");
//         },3000)
//     },2000)
// },1000)
// // console.log("end")




//Promises
// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//    if (success){
//     resolve("data sent successfully");
//    }
//    else{
//     reject("Failed to send data");
//    }
// });

// myPromise.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });



// promise
// function task(message, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            console.log(message);
//            resolve();
//         }, delay);
//     });
// }

// task("First task completed",1000)
//     .then(() => task("second task completed",2000))
//     .then(() => task("Third task completed",3000));




//resolve promise with stident data
const newPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve(student);
    }
    else{
        reject("Failed to fetch data");
    }
});

newPromise.then(data => {
    console.log("data received: ",data);
}).catch(err => {
    console.log(err);
});