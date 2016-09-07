/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app) {
    app.middlewares = app.middlewares || {};
    app.middlewares.isUserRegistred = function(req, res, next) {

        app.models.User.findOne({
            mail: req.body.mail
        }, function(err, user) {
            if (err)
                return res.status(500).send(err);

            if (user){
                return res.status(401).send('email already used');
            }


            next();
        });
    }
};