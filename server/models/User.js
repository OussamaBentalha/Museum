/**
 * Created by Sam on 06/09/2016.
 */
module.exports = function(app){
    var UserSchema = app.mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    UserSchema.pre('save', function(next) {
        var user = this;

        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);

            // hash the password along with our new salt
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);

                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
    });

    UserSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    };

    UserSchema.plugin(require('mongoose-timestamp'));

    var User = app.mongoose.model('User', UserSchema);
    return User;
};