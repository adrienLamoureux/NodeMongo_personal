import {Router, Request, Response, NextFunction} from 'express';
import { IItemService } from '../services/interface/itemService';
import { ServiceFactory } from '../config/factory/serviceFactory';

export class ItemRouter {
  router: Router

  /**
   * Initialize the router
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public getList(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().getItemList().then((data) => res.status(200).send(data));
  }

  public getOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().getItemById(req.params.id).then((data) => res.status(200).send(data));
  }

  public updateOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().updateItem(req.params.id, req.body).then((data) => res.status(200).send(data));
  }

  public newOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().addItem(req.body).then((data) => res.status(200).send(data));
  }

  public deleteOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().deleteItemById(req.params.id).then((data) => res.status(200).send(data));
  } 

  public reset(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getItemService().resetItemList().then((data) => res.status(200).send(data));
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/list', this.getList);
    this.router.get('/:id', this.getOne);
    this.router.put('/:id', this.updateOne);
    this.router.post('/new', this.newOne);
    this.router.delete('/:id', this.deleteOne);
    this.router.post('/init', this.reset);
  }

}