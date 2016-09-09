/**
 * Created by Sam on 07/09/2016.
 */
module.exports = function(app){
    var MuseumSchema = app.mongoose.Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        postalcode: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        website: {
            type: String,
            required: false
        },
        closure: {
            type: String,
            required: false
        },
        opening: {
            type: String,
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
        note: {
            type: Number,
            required: false
        },
        price: {
            type: Number,
            required: false
        },
        stationsId: [{
            type: String,
            required: false
        }],
        commentsId: [{
            type: String,
            required: false
        }]

    });

    MuseumSchema.plugin(require('mongoose-timestamp'));

    var Museum = app.mongoose.model('Museum', MuseumSchema);
    return Museum;
};