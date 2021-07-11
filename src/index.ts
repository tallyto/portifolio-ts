import Express from 'express'
import Router from './routes'
// import mongoose from 'mongoose'
import Cors from 'cors'
import {join} from 'path'
var expressLayouts = require('express-ejs-layouts');
class App {
  public server: Express.Application
  constructor( ){
    this.server = Express()
    this.middlewares()
    this.routes()
    // this.database()
  }

  private middlewares(): void{
    this.server.use(Express.json())
    this.server.use(Cors())
    this.server.use(Express.static('public'))
    this.server.set('views',join(__dirname,'views'))
    this.server.set('layout', join(__dirname,'views', 'pages', 'layout.ejs'))
    this.server.set('view engine', 'ejs')

  }

  private routes(): void{
    this.server.use(Router)
  }

  // private database(): void {
  //   mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
  // }
}

export default new App().server