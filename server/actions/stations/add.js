/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){

    return function(req, res, next){
        var station = new app.models.Station({
            _id: app.mongoose.Schema.ObjectId(req.body.id),
            name: req.body.name,
            line: req.body.line,
            x: req.body.x,
            y: req.body.y,
            avpp: req.body.avpp,
            aspp: req.body.aspp,
            avsp: req.body.avsp,
            assp: req.body.assp,
            ufr: req.body.ufr
        });

        station.save(function(err, instance){
            if (err){
                Console.log("Station ADD - Error : " + err);
                return res.status(500).send(err);
            }



            res.send(instance);
        });
    }
};