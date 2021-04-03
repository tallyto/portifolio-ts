import Express from 'express'
import Router from './routes'
class App {
  public server: Express.Application
  constructor( ){
    this.server = Express()
    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.server.use(Express.json())
  }

  routes(){
    this.server.use(Router)
  }
}

export default new App().server