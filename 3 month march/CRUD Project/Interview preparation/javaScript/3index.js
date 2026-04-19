//spread & Rest Operators
//We Can use for arrays and objects => [] ,{}
//expands elements (array/objects)-we can add new elements to the array or object

const array1 =[1, 2, 3]
const array2 =[4, 5, 6]

//[1, 2, 3, 4, 5, 6]
const finalArray=[...array1 , ...array2]
console.log(finalArray)

 
//Rest oprater
//(...)
function sum(...numbers) {
    console.log(numbers);//[1, 2, 3]
    return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 45, 52, 85));

//closures
//nested functions
function mainFunction (){
    let name ="Hoc 1"
    function nestedfunction (){
        let age = "10000"
        console.log(name) //HOC
        console.log(age)//undefind
    
    }
  
    return nestedfunction();
}

const closureFunction = mainFunction()//mainfunction will return nestedFunction
console.log(mainFunction())

//Immediately Invoked Function Expressions(IIFE)
;(function (){
    console.log("I am a self-invoked function Expressions (IIFE")

})();

//Self-Incoking Function
;(function (){
    console.log("I am a self-invoking function")

})();



//Higher-Order Component (HOC)

//Higher-Order Functions
//Takes another as argument OR returns a function.
//Used for resuable and cleaner code.
const myfunction =(name) => {
    const a = 5
    console.log(a)

    return "hello" + name
    var b=5
    console.log(b)

}
const processedFunction = (fun) =>{
    console.log("Processing function..." , fun("HOC"))
} 




//Destructuring - object ,Aeeay
//Extract values  easily  from arrays/object
//Maks code shorter amd cleaner.
//object Destructuring
const data = {
    name:"vaishnavi patil",
    email:"vaishnavipatil646210@gmail.com",
    age: 21
}
console.log (data, "==> full object")
const{name , email} =data

console.log(name) //vaishnavipatil 

console.log(email)//vaishnavipatil^46210@gamil.com

//Array Destructuring
        //       0        1        2          3         4
const array =["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"]

const[a ,b, c] = array

console.log(a)//test1
console.log(b)//test2
console.log(c)//test3