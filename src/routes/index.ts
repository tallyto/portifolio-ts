import {Router} from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.get('/', (req, res)=>{
  res.render('pages/main')
})

router.get('/about', (req, res)=>{
  res.render('pages/about')
})

router.post('/user', UserController.createUser)

router.get('*', (req, res)=> {
  res.send('<h1>Página não encontrada :(</h1>')
} )

export default router