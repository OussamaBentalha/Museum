/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.User.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            res.send(instance);
        })
    }
};