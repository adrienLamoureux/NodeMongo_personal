import {Router, Request, Response, NextFunction} from 'express';
import {join} from 'path';
const config = require('./../config/config.js');

export class ApiRouter {
  router: Router

  /**
   * Initialize the router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Get OK
   */
  public defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    res.sendStatus(200);  
  }

  public routeCORS(req: Request, res: Response, next: NextFunction){
    if(config.allowCORS){
        res.setHeader("Access-Control-Allow-Origin", "http://"+config.url+":"+config.authorizedCORS);
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        if ('OPTIONS' == req.method) {
          return res.send(200);
        }
      }
      next();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.defaultRoute);
    this.router.all('*', this.routeCORS);
  }

}