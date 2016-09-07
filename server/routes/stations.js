/**
 * Created by Sam on 07/09/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.stations.add
    );

    router.get('/',
        app.actions.stations.list
    );

    return router;
};