import express from 'express';
import 'express-async-errors';
import routes from './routes';

import './config/data/dbconection';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
      
    this.server.use(express.json());

    //CORS
    this.server.use("/api",function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // * Access to any origin
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // Access to methods
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Access to headers
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;