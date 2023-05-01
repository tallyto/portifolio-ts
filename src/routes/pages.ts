import {Router} from 'express'

const pages = Router()

pages.get('/', (req, res) => {
  res.render('profile',)
})

pages.all("*", (req, res )=> {
  res.send("<h1>Página não encontrada</h1>")
})

export default pages