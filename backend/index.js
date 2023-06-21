const express = require('express');
const http = require('http')

const runServer = async () => {
    const app = express();

   //trial

    // for json Post request
   // app.use(bodyParser.urlencoded({ extended: true }));
   // app.use(bodyParser.json());

    const server = http.createServer(app);
    server.listen(3001), function () {
        const host = server.address().address;
        const port = server.address().port;
        console.log("app listening at http://%s:%s", host, port);
    }
}

runServer();