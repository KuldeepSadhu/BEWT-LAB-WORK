
const { log, error } = require('console')
const fs = require('fs')

//Q-1   
// fs.writeFile("first.txt",'HelloWorld',(error)=>{
//     if(error){
//         console.log("error")
//     }
//     else{
//         console.log("done")
//     }
// })
//Q-2
// fs.readFile("first.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
        
//     }
// })

//Q-3

// fs.appendFile("first.txt","\n new file",(error)=>{
//     if (error) {
//         console.log("error");
        
//     }
//     else{
//         console.log("done");
//     }
// })


// fs.readFile("first.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
        
//     }
// })
//Q-4

// fs.unlink("first.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("DONE");
        
//     }
// })

//--------------------------FOLDER
//Q-1
// fs.mkdir("FOLDER1",(err)=>{
//     if(err){
//         console.log("err");
        
//     }
//     else{
//         console.log("created folder")
//     }
    
// }
// )


// Q-2

// fs.readdir("FOLDER1",(error,files)=>{
//     if(error){
//         console.log("err");
//         return
//     }

//     files.forEach(file => {
//         console.log(file)
//     });
// })

// fs.copyFile("new1.txt","new2.txt",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log("file copied succes");
        
//     }
// })

// if(fs.existsSync("new1.txt")){
//     console.log("it exist");
   
// }
//  else{
//         console.log("it doesnt exist");
        
//     }


fs.watchFile("new1.txt",(curr,prev)=>{
    console.log("File changed");
    
})

