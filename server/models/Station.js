/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    var StationSchema = app.mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        line: {
            type: Number,
            required: false
        },
        x: {
            type: Number,
            required: false
        },
        y: {
            type: Number,
            required: false
        },
        avpp: {
            type: Number,
            required: false
        },
        aspp: {
            type: Number,
            required: false
        },
        avsp: {
            type: Number,
            required: false
        },
        assp: {
            type: Number,
            required: false
        },
        ufr: {
            type: Number,
            required: false
        }


    });

    StationSchema.plugin(require('mongoose-timestamp'));

    var Station = app.mongoose.model('Station', StationSchema);
    return Station;
};