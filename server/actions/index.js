/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    app.actions = {};
    app.actions.users = require('./users')(app);
    app.actions.museums = require('./museums')(app);
};