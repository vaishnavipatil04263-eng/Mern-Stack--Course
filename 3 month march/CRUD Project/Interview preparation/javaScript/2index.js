// 1. set Timeout

//console.log(1)
//console.log(11)
//setTimeout(() =>{
  //  console.log(2)
//},1000)

//console.log(3)

// 1. call backs - Asynchronous
const getData = (callBackFunction) => {
    console.log("Hello Get Data")
    callBackFunction()
}

// const callBackFunction =() => {
  //  console.log("Call Back Function called")
// }

//getData(callBackFunction)

getData(() => console.log(121212))

// 2. Promises - Asynchronous
//  resolve / pending /reject

const myPromise =new Promise(
    (resolve,reject) => {
    const error =false
    if (error ==true){
        resolve("Promise Rejected")
    } else {
        reject("Promise Resolved")
    }
}
)
const testPromise =new Promise((resolve , reject) =>{

})
console.log(testPromise)

myPromise.then((res)=> console.log(res)).catch((error)=> console.log(error))

// 3.async/await - Asynchronous
const myFunction = async () =>{
    //API integretion
    //DB call -add delete update get from DB -await
} 
