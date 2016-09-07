/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    app.use('/api/users', require('./users')(app));
};