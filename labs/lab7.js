const http = require('http')
const PORT = 3000
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Home Page")
            res.end()
    }
    if (req.url === '/about') {
        res.write("about Page")
            res.end()

    }
    if (req.url === '/contact') {
        res.write("contact Page")
            res.end()

    }
    if (req.url === '/profile') {
        res.write("profile Page")
            res.end()

    }
    if (req.url === '/edits') {

        fs.writeFile("first.txt", 'HelloWorld', (error) => {
            if (error) {
                res.write("error")
            }
            else {
                res.write("done")
            }
            fs.readFile("first.txt", (err, data) => {
                if (err) {
                    res.write("error")
                }
                else {
                    res.write(data)
                    res.end()
                }
            })

        })
    }
})

server.listen(PORT, () => {
    console.log(`Server listen at ${PORT}`);
})