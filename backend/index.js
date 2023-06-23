const express = require('express');
const http = require('http');
const mainRoutes = require("./routes/mainRoute");
const projectRoutes = require("./routes/projectRoutes");
const bodyParser = require('body-parser');

const runServer = async () => {
    const app = express();

   //trial
    //CORS Middleware
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Pin");
        next();
    });
   

    // for json Post request
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


    //Routes

    app.use('/',mainRoutes);
    app.use('/projects',projectRoutes);

    const server = http.createServer(app);
    server.listen(3000), function () {
        const host = server.address().address;
        const port = server.address().port;
        console.log("app listening at http://%s:%s", host, port);
    }
}
//test
runServer();