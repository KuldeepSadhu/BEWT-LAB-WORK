//Q-1
// const child_process = require("child_process")
// // console.log(child_process)

// child_process.exec("node -v",(err,data)=>{
//     if(err){
//         console.log("error : ",(err))
//         return;
//     }
//     console.log("data : ",data)
// })

//Q-5

const url = require('url');
// console.log(url)
const myUrl1 = "https://example.com:8090"

// const urlParsed = url.parse(myUrl,true)
// // console.log(urlParsed)
// console.log("host : ",urlParsed.host)
// console.log("protocol : ",urlParsed.protocol)
// console.log("port : ",urlParsed.port)
// console.log("pathname : ",urlParsed.pathname)
// console.log("query : ",urlParsed.query)

const myUrl = new URL(myUrl1)
myUrl.pathname='/path/user/profile';
myUrl.searchParams.append('id','2');
myUrl.searchParams.append('name','name');
console.log(myUrl)
console.log("serialized URL:",myUrl.toString());