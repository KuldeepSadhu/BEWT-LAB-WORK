//Q-1
const child_process = require("child_process")
// console.log(child_process)

child_process.exec("node -v",(err,data)=>{
    if(err){
        console.log("error : ",(err))
        return;
    }
    console.log("data : ",data)
})
