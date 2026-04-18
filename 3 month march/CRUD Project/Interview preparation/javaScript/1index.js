console.log("hello")


//veriables
const name ="vaishnavi"   //fix value we can not chenge 
var surname="patil"        //Golbal we can change anywhere in file
let middkename="amma" 


//functons
//*normal function
function getMyName(){
    console.log("function 1")
}

getMyName()

//arrow function
const getYourName =() =>{
    console.log("function 2")
}
getYourName()

//parameter -default parameter
const getMyFullName =(data ="No Name") =>{
    console.log("My Full Name", data)
}
const myName ="vaishnavi patil"
getMyFullName(myName)

const test ="vaishnavi patil"
getMyFullName(test)

getMyFullName()


//array -index    0        1          2        3
const items =["test 1", "test 2", "test 3", "test 4"]
console.log(items , "Full Item Print")
console.log(items[0],"-print only index0-(first vaule)")
console.log(items[2])

//object -key vaule paire
const studentDetails ={
    //key -value
    name : "vaishanvi patil",
    city : "karad"
} 
console.log (studentDetails ,  "studentDetails full object")
console.log(studentDetails.name, "=>studentDetails name only")
