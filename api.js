const express = require( 'express' )
const router = express.Router()
const request = require('request')

router.get('/sanity', function(req,res){
    res.send('OK')
})


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
        results.length == 0 ? res.send(`No Resutls for ${ingredient}`) : res.send(modifiedResults)
    })
})

module.exports = router