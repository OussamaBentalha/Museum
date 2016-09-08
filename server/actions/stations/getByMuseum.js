/**
 * Created by Sam on 08/09/2016.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Museum.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            console.log(instance);
            var stationsId = instance.stationsId;



            var promise = app.models.Station.find({ _id: { $in: stationsId }}).exec();
            promise.then(function(array) {
                res.send(array)
            });


        })
    }
};