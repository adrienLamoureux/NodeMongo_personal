import {Router, Request, Response, NextFunction} from 'express';
import {join} from 'path';

export class DefaultRouter {
  router: Router

  /**
   * Initialize the router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Get the init data
   */
  public defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.sendFile(join(__dirname, 'dist/index.html'));
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.defaultRoute);
  }

}