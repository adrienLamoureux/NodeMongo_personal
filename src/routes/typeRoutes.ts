import {Router, Request, Response, NextFunction} from 'express';
import { ITypeService } from '../services/interface/typeService';
import { ServiceFactory } from '../config/factory/serviceFactory';

export class TypeRouter {
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
    ServiceFactory.Instance.getTypeService().getTypeList().then((data) => res.status(200).send(data));
  }

  public getOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getTypeService().getTypeById(req.params.id).then((data) => res.status(200).send(data));
  }

  public getOneByAppId(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getTypeService().getTypeByAppId(req.params.appId).then((data) => res.status(200).send(data));
  }

  public newOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getTypeService().addType(req.body).then((data) => res.status(200).send(data));
  }

  public deleteOne(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getTypeService().deleteTypeById(req.params.id).then((data) => res.status(200).send(data));
  } 

  public reset(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Content-Type', 'application/json');
    ServiceFactory.Instance.getTypeService().resetTypeList().then((data) => res.status(200).send(data));
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/list', this.getList);
    this.router.get('/:id', this.getOne);
    this.router.put('/:appId', this.getOneByAppId);
    this.router.post('/new', this.newOne);
    this.router.delete('/:id', this.deleteOne);
    this.router.post('/init', this.reset);
  }

}