/**
 * Created by Sam on 06/09/2016.
 */
var mongoose = require('mongoose');

module.exports = function(app){
    app.mongoose = mongoose.connect(app.settings.db);

    app.models = {};
    app.models.User = require('./User')(app);
    app.models.Museum = require('./Museum')(app);
    //app.models.Comment = require('./Comment')(app);
};