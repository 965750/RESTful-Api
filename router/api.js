const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjasfrom the db
router.get('/ninjas', function(req, res){
    res.send({type:'GET'});
});


// add
router.post('/ninjas', function(req, res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja); 
    });
});


// update
router.put('/ninjas/:id', function(req, res){
    res.send({type:'PUT'});
});


// delete
router.delete('/ninjas/:id', function(req, res){
    res.send({type:'DELETE'});
});

module.exports = router;