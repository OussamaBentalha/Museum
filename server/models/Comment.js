/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    var CommentSchema = app.mongoose.Schema({
        description: {
            type: String,
            required: false
        },
        date: {
            type: String,
            required: false
        },
        note: {
            type: Number,
            required: false
        },
        userId: {
            type: String,
            required: false
        }
    });

    CommentSchema.plugin(require('mongoose-timestamp'));

    var Comment = app.mongoose.model('Comment', CommentSchema);
    return Comment;
};