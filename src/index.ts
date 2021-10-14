import Express from 'express'
import Router from './routes'
import Cors from 'cors'
import expressHandlebars from 'express-handlebars';
import { join } from 'path';
class App {
  public server: Express.Application
  constructor( ){
    this.server = Express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void{
    this.server.use(Express.json())
    this.server.use(Cors({
      origin: '*',
      methods: ['GET'],     
    }))
    this.server.engine('.hbs', expressHandlebars({extname: '.hbs'}));
    this.server.set('view engine', '.hbs');
    this.server.use('/public',Express.static('public'))

  }

  private routes(): void{
    this.server.use(Router)
  }

}

export default new App().server