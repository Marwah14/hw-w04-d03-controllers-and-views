var express = require('express');
var router = express.Router()

var angryBirds = require('../modules/angry_birds');


router.get('/', function(request, response){
    var mustacheVerible = {
        angryBirdsList: angryBirds.birds
    }
    response.render('./angry', mustacheVerible);
})

router.get('/:id', function(request, response){
    var birds = request.params.id;
    var mustacheVerible = {
        angryBirdsList: angryBirds.birds[birds]
    }
    response.render('./show', mustacheVerible);
})




module.exports = router;