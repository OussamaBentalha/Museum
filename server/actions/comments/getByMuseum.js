/**
 * Created by Sam on 08/09/2016.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Museum.findById(req.params.id, function(err, instance){
            if (err)
                return res.status(500).send(instance);

            var commentsId = instance.commentsId;

            var promise = app.models.Comment.find({ _id: { $in: commentsId }}).exec();
            promise.then(function(array) {
                res.send(array)
            });
        })
    }
};