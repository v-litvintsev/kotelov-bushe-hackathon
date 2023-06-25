'use strict';

const port        = process.env.PORT || 8090;

const express     = require('express');
const app         = express();
const cors        = require('cors');
const bodyParser  = require('body-parser');
// const {Server}    = require("socket.io");


const router       = require('./routing/index');
// const {config}      = require("./database/index");
// const {user, cars} = require("./app/Controllers/_index");

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));


app.use(bodyParser.json({limit: '10000mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10000mb'}));
// app.use(timeout('10000s'));

app.use(router);

const server = app.listen(port, '127.0.0.1', () => {
    console.log(`server working on host:${port}`);
});

// const io          = new Server(server, {
//     maxHttpBufferSize: 1e10,
//     cors: {
//         origin: '*',
//         credentials: true,
//         methods: ['*'],
//     },
//     maxPayload: 100000,
//     pingTimeout: 60000,
//     pingInterval: 10000,
//     upgradeTimeout: 1000,
// });
//
// const onConnect = (socket) => {
//     socket.on('connection', onConnect);
// };

