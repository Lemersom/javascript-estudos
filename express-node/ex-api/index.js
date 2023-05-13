const express = require('express')
const app = express()

app.use(express.json())

const animalRoutes = require('./router/animal')
app.use('/api/animal', animalRoutes)

/*
app.get("/", (req, res) => {
    let resp = {
        status: true,
        message: "Hello World!"
    }
    res.json(resp)
})
*/

app.listen(3000, () => console.log("Working on 3000"))