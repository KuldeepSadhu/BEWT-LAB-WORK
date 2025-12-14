// object litral
// myObj = {
//     name : "Sadhu",
//     college : "Darshan University",
//     lastLogin : "yesterday",
//     isLogin : false,
//     hostelName: "paradise"
// }
// console.log(myObj);

// myObj.myOne = function(){
//     console.log(this.name);
// }
// console.log(myObj.myOne());

//object sinle ton
//  myObj = new Object()

//object not single ton but same as object method

// const myObj = {}

// myObj.name = "vishal"
// myObj.hostel = "paradise"
// myObj.salary =999999
// myObj.newObj = {
//     lname : "solanki",
//     location: "khambhaliya",
//     innerFunction: function(){
//         console.log(" innner obj Function");
        
//     }
// }
// myObj.newMethod = function(){
//     console.log("prints main object function");
// }

// console.log(myObj)
// console.log(myObj.newMethod())
// console.log(myObj.newObj);

// console.log(myObj.newObj.innerFunction())


// const myObj1 = {
//     name:"sadhu",
//     age : 18,
//     a : "b"
// }
// const myObj2 = {
//     name:"kuldeep",
//     age : 18,
//     a : "b"
// }
// const myObj3 = {
//     name:"vishal",
//     age : 18,
//     a : "b"
// }


// const myObj4 = {myObj1,myObj2,myObj3}
//it will gonna make your objects key-values overights if they are same values
// console.log(myObj4);

// const myObj1 = {
//     name:"sadhu",
//     age : 18,
//     a : "b"
// }
// const myObj2 = {
//     name2:"kuldeep",
//     age2 : 18,
//     a : "b"
// }
// const myObj3 = {
//     name3:"vishal",
//     age3 : 18,
//     a : "last one"
// }

// const myObj4 = Object.assign({},myObj1,myObj2,myObj3)
// console.log(myObj4);

//now the spread opt

const myObj1 = {
    name:"sadhu",
    age : 18,
    a : "b"
}
const myObj2 = {
    name2:"kuldeep",
    age2 : 18,
    a : "b"
}
const myObj3 = {
    name3:"vishal",
    age3 : 18,
    a : "last one"
}


// const myObj4 = {...myObj1,...myObj2,...myObj3}

// console.log(myObj4);

//object destructuring IMP

const {name:n} = myObj1
console.log(n);

//