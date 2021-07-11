import {Router} from 'express'
// import UserController from '../controllers/UserController'

const router = Router()

router.get('/', (req, res)=>{
  res.render('pages/main',{title: 'inicio'})
})

router.get('/projetos', (req, res)=>{
  res.render('pages/projetos', {title: 'projetos'})
})

// router.post('/user', UserController.createUser)

router.get('*', (req, res)=> {
  res.render('pages/404',{title: 'not found'})
} )

export default router