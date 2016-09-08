/**
 * Created by Sam on 06/09/2016.
 */
require('./global');
var express = require('express');
var api = express();

(function init(){
    api.use(express.static('storage'));
    api.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    require('./settings')(api);
    require('./models')(api);
    require('./middlewares')(api);
    require('./actions')(api);
    require('./routes')(api);
}());

(function start() {
    api.listen(api.settings.port, '0.0.0.0');
    console.log('Server listening on port :port'.replace(':port',  api.settings.port));
}());