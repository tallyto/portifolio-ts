import {Router} from 'express'

const router = Router()

router.get('/', (req, res)=>{
  res.send("<h1>Seja Bem Vindo ao Meu Site!</h1>")
})

router.get('*', (req, res)=> {
  res.send('<h1>Página não encontrada :(</h1>')
} )

export default router