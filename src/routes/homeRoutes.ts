import {Router, Request, Response, NextFunction} from 'express';
import homeClient from './../models/client/homeClient';

export class HomeRouter {
  router: Router

  /**
   * Initialize the router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Get init data
   */
  public defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(homeClient.initData);
  }

  /**
   * Reset data
   */
  public resetDB(req: Request, res: Response, next: NextFunction){
    res.setHeader('Content-Type', 'application/json');
    //userService.resetUserList().then((data) => res.status(200).send(data));
    res.sendStatus(200);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/init', this.defaultRoute);
    this.router.post('/init', this.resetDB);
  }

}