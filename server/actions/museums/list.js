/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.Museum.find(function(err, museums){
            if(err)
                return res.status(500).send(err);

            res.send(museums);
        });

    }
};