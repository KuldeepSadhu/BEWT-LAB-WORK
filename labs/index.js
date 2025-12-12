const path = require('path')

const main = "Folder/hello/everyone/darshan.txt"
//Q-1
const dirname = path.dirname("./hello/hi/jk.txt")
const basename = path.basename("./hello/hi/jk.txt")
const extname = path.extname("./hello/hi/jk.txt")
console.log(dirname)
console.log(basename)
console.log(extname)

//Q-2
const joinpath = path.join("Folder","Subfolder","darshan.txt")
console.log(joinpath)

//Q-3
const normalize = path.normalize("Folder/hello//everyone//darshan.txt")
console.log(normalize)

//Q-4
const absoluteP = path.resolve("Folder","Subfolder","darshan.txt")
console.log(absoluteP+"\n")
//Q-5
const arelativeP = path.relative("Folder","Subfolder","darshan.txt")
console.log(arelativeP)