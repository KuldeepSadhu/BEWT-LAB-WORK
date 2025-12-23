const { error, log } = require('console')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")


const simpleMiddleware = (req,res,next)=>{
    console.log("Middle Ware Called");
    next();
}
const authentication = (req,res,next)=>{
    const {name,pass} = req.query
    if(name ==='Sadhu' && pass === '123'){
        console.log(`Welcome ${name}`);
        next();
    }
    else{
        console.log("Not Allowed");
      
    }
}
// q-1
// app.get('/',simpleMiddleware,(req, res)=>{
//     res.send("Hello");
// });
// q-2
// app.use(simpleMiddleware)

// app.get('/',(req, res)=>{
    //     res.send("Hello");
    // });
    
    //q-3
// app.use(authentication)

// app.get('/',(req, res)=>{
//     const {name,pass} = req.query
//     res.send(`${name} Welcome`)
// });

//q-4
app.use(express.static(__dirname))

app.get("/",(req,res)=>{
    res.send("Acess Done")
})


app.listen(port, () => {    
  console.log(`Example app listening on port ${port}`)
})  