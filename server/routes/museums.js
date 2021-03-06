/**
 * Created by Sam on 07/09/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.museums.add
    );

    router.get('/',
        app.actions.museums.list
    );

    //Recherche par id
    router.get('/:id',
        app.actions.museums.show
    );

    router.put('/:id',
        bodyparser,
        app.actions.museums.update
    );

    return router;
};