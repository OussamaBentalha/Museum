/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){

    return function(req, res, next){
        var comment = new app.models.Comment({
            description: req.body.description,
            date: req.body.date,
            note: req.body.note,
            userId: req.body.userId
        });

        comment.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            var promise = app.models.Museum.update({ _id: req.params.id}, { $addToSet:{commentsId: instance._id }}).exec();
            promise.then(function(instance) {
                res.send(instance)
            });
        });
    }
};