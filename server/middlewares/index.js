/**
 * Created by Sam on 07/09/2016.
 */
var cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.use(cookieParser());

    require('./isUserRegistred')(app);
};