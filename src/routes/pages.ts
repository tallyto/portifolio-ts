import {Router} from 'express'

const pages = Router()

pages.get('/', (req, res) => {
  res.render('profile',)
})

export default pages