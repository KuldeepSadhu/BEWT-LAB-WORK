//Q-6

const os = require('os')
// console.log(os)
// console.log("Os Name :",os.type())
// console.log("Release Version : ",os.release())
// console.log("Platform Name : ", os.platform())
// console.log("Architecture Name : ", os.arch())

//Q-7
console.log("total memory :",(os.totalmem()/(1024*1024*1024)).toFixed(2),"GB")
console.log("free memory :",(os.freemem()/(1024*1024*1024)).toFixed(2),"GB")
//Q-8
// console.log(os.userInfo())
//Q-9
// console.log("up time : ",(os.uptime()/(3600)).toFixed(2),"h")
//Q-10
const cpus = os.cpus()
console.log("Total cores : ",cpus.length)
cpus.forEach((cores,index) => {
    console.log(`${index + 1} core with ${cores.model}`)
});

console.log(os.networkInterfaces())
