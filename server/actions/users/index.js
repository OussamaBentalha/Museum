/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        list: require('./list')(app),
        show: require('./show')(app),
        update: require('./update')(app)
    };
};