const express = require('express')
const app = express()
const port = 3001

// respond with "hello world" when a GET request is made to the homepage

app.get('/', (req:any, res:any) => {
    console.log('suck my bubble please')
    res.send('hello привет suck !!')
})

app.listen(port, () => {
    console.log(`запущен сервер на ${port}`)
})
