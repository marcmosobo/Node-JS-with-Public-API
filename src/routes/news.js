const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
 
newsRouter.get('', async(req, res) => {
    try {
        // fetch data from API
        const newsAPI = await axios.get(`https://api.publicapis.org/entries`)
        console.log(newsAPI.data)  // debugging
 
        // transfer response to the news.ejs
        res.render('news', { entries : newsAPI.data.entries });  // first data is reponse next one is the articles in the response (array)
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
})
 
module.exports = newsRouter