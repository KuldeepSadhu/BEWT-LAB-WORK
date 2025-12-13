const express = require('express')
const app = express() 
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/sadhu',(req,res)=>{
    res.send("Hello Sadhu")
})

app.listen(port,()=>{
    console.log(`server started at port :${port}`);
    
}
)