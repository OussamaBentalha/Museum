/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return {
        add: require('./add')(app),
        list: require('./list')(app),
        update: require('./update')(app),
        show: require('./show')(app),
        stations: require('./stations')(app)
    };
};