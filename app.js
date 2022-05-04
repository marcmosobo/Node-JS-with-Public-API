
const express = require('express')
const app = express()
const port = 2424
 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
 
app.set('views', './src/views')
app.set('view engine', 'ejs')
 
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)
 
// Listen on port 2424
app.listen(port, () => console.log(`Listening on port ${port}`))