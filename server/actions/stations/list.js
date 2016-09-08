/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.Station.find(function(err, stations){
            if(err)
                return res.status(500).send(err);

            res.send(stations);
        });

    }
};