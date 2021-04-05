import Express from 'express'
import Router from './routes'
import mongoose from 'mongoose'
import {join} from 'path'
var expressLayouts = require('express-ejs-layouts');
class App {
  public server: Express.Application
  constructor( ){
    this.server = Express()
    this.middlewares()
    this.routes()
    this.database()
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

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
  }
}

export default new App().server