var Hapi = require("hapi");
var HapiAuthCookie = require('hapi-auth-cookie');
var Mongo = require('mongoose');

if (!global.AA) { global.AA = {}; }
//GET ENVIORMENT
var environment = 'dev';
if (process.argv.env) {
    switch (process.argv.env.toLowerCase()) {
        case 'stage':
            environment = 'stage';
            break;
        case 'prod':
            environment = 'prod';
            break;
        default:
            environment = 'dev';
            break;
    }
}
//Settings
AA.Settings = require('./settings')({env: environment});

//Modules
    //private
var Hapi = require("hapi");
var HapiAuthCookie = require('hapi-auth-cookie');
var Mongo = require('mongoose');
    //public
AA.async = require('async');
AA.Lodash = require('lodash');
AA.Joi = require("joi");

//Data Sets
AA.MongoDB = Mongo.connect(AA.Settings.MONGODB.URL);

// AA.NEO4J.getNode
AA.Controllers = require('./controllers');
AA.Models = require('./models');
AA.Routes = require('./routes');

AA.server = new Hapi.Server(AA.Settings.PORT, AA.Settings.HOST);

AA.server.pack.register(HapiAuthCookie, function (err) {

    AA.server.auth.strategy('session', 'cookie', {
        password: 'secret123',
        cookie: 'sid-api',
        redirectTo: '/login',
        isSecure: false
    });

    AA.server.route([
        AA.Routes.external.site.submitContactForm
    ]);

    AA.server.start(function() {
        console.log("Hapi server started @", AA.server.info.uri);
    });
});