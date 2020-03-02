const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http');

    const productRoute = require('./routes/product.route');
  
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    //app.use('/products', productRoute);
    app.use('/api', productRoute);
    let port = process.env.PORT || 4000;
    app.set('port', port);

    /*const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });*/
    const server = http.createServer(app);
    server.listen(port, () => console.log(`API running on localhost:${port}`));
    