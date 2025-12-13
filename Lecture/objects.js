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

const myObj = {}

myObj.name = "vishal"
myObj.hostel = "paradise"
myObj.salary =999999
myObj.newObj = {
    lname : "solanki",
    location: "khambhaliya",
    innerFunction: function(){
        console.log("new innner Function");
        
    }
}
myObj.newMethod = function(){
    console.log("print the objes function");
}

console.log(myObj)
console.log(myObj.newMethod())
console.log(myObj.newObj);

console.log(myObj.newObj.innerFunction())