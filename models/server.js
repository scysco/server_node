const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathUsers = '/api/users';

        this.middlewares();
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //parse & lecture body
        this.app.use(express.json());
        //public directory
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.pathUsers, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}

module.exports = Server;