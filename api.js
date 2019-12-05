const express = require( 'express' )
const router = express.Router()
// const _ = require('underscore')
const request = require('request')
// const dataBase = require('./utils/data')
// const path = require('path')

router.get('/sanity', function(req,res){
    res.send('OK')
})

// get route to /recipes that recieves ingredient param with request to the api https://recipes-goodness.herokuapp.com/
router.get('/recipes/:ingredient', function(req,res){
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err,response){
        let results = JSON.parse(response.body).results
        let modifiedResults = results.map( r => new Object({
            title: r.title, 
            ingredients: r.ingredients, 
            thumbnail: r.thumbnail, 
            href: r.href
        }))
        res.send(modifiedResults)
    })
})



module.exports = router