const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');
    http = require('http');

    const productRoute = require('./routes/product.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use('/products', productRoute);
    let port = process.env.PORT || 4000;
    app.set('port', port);

    /*const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });*/
    const server = http.createServer(app);
    server.listen(port, () => console.log(`API running on localhost:${port}`));
    