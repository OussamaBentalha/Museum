/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){

    return function(req, res, next){

        var museum = new app.models.Museum({
            name: req.body.name,
            address: req.body.address,
            postalcode: req.body.postalcode,
            city: req.body.city,
            website: req.body.website,
            closure: req.body.closure,
            opening: req.body.opening,
            x: req.body.x,
            y: req.body.y,
            note: req.body.note,
            price: req.body.price,
            stationsId: req.body.stationsId

        });

        museum.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};