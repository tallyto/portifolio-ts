import {Router} from 'express'

const router = Router()

router.get('/', (req, res)=>{
  console.log(req)
  res.send("<h1>Seja Bem Vindo ao Meu Site!</h1>")
})

export default router