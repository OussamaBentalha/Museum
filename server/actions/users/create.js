/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var user = new app.models.User({
            name: req.body.name,
            firstname: req.body.firstname,
            mail: req.body.mail,
            password: req.body.password
        });

        user.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};