import Express from 'express'
import Router from './routes'
import {join} from 'path'
var expressLayouts = require('express-ejs-layouts');
class App {
  public server: Express.Application
  constructor( ){
    this.server = Express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void{
    this.server.use(Express.json())
    this.server.set('view engine', 'ejs')
    this.server.set('views',join(__dirname,'views'))
    this.server.use(expressLayouts)
  }

  private routes(): void{
    this.server.use(Router)
  }
}

export default new App().server