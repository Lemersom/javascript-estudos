const express = require('express')
const app = express()

app.use(express.json())

const pokemonRoutes = require('./router/pokemon')
app.use('/api/pokemon', pokemonRoutes)



app.listen(3000, () => console.log("Working on 3000"))