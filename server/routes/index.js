/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    app.use('/api/users', require('./users')(app));
    app.use('/api/museums', require('./museums')(app));
    app.use('/api/stations', require('./stations')(app));
};