import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as methodOverride from "method-override";
import * as mongoose from "mongoose"; //import mongoose
import { DefaultRouter } from './routes/default';
import { ApiRouter } from './routes/api';
import { HomeRouter } from './routes/homeRoutes';
import { UserRouter } from './routes/userRoutes';
import { TypeRouter } from './routes/typeRoutes';
import { ItemRouter } from './routes/itemRoutes';
import { IUserModel } from "./models/dao/interface/user";
import { IModel } from "./models/dao/interface/model";

const config = require('./config/config.js');

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;

  public static dbConnection;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    const MONGODB_CONNECTION: string = 'mongodb://'+config.mongoUrl+':'+config.mongoPort+'/'+config.mongoDB;

    //add static paths
    this.app.use(express.static(path.join(__dirname, '..' , '..', 'dist')));
    this.app.use(express.static(path.join(__dirname, '..' , '..', 'ui')));
    this.app.use(express.static(path.join(__dirname, '..' , '..', 'ui/dist')));

    //mount logger
    this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));

    this.app.disable('etag');

    //mount override
    this.app.use(methodOverride());

    //connect to mongoose
    Server.dbConnection = mongoose.createConnection(MONGODB_CONNECTION);

    //create models

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  public api(){
    this.app.use(config.api.default, (new ApiRouter()).router);
    this.app.use(config.api.home, (new HomeRouter()).router);
    this.app.use(config.api.user, (new UserRouter()).router); 
    this.app.use(config.api.type, (new TypeRouter()).router);
    this.app.use(config.api.item, (new ItemRouter()).router); 
  }

  public routes(){
      this.app.use('/', (new DefaultRouter()).router);
  }
}