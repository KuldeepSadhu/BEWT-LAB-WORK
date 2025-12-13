const EventEmitter = require("events");
const myemitter = new EventEmitter()
myemitter.on('greet',()=>{
    console.log('Hello')
})
myemitter.emit('greet')

let count = 0
setInterval(()=>{
myemitter.emit('tick')

},10)


myemitter.on('tick',()=>{
    console.log( `hello ${count++} times`)

})