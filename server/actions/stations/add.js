/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var station = new app.models.Station({
            name: req.body.name,
            x: req.body.x,
            y: req.body.y,
            avpp: req.body.avpp,
            aspp: req.body.aspp,
            avsp: req.body.avsp,
            assp: req.body.assp,
            ufr: req.body.ufr
        });

        station.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};