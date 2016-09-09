/**
 * Created by Sam on 08/09/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){

    router.post('/:id',
        bodyparser,
        app.actions.comments.add
    );

    //getByMuseumId
    router.get('/gbm/:id',
        app.actions.comments.getByMuseum
    );

    return router;
};