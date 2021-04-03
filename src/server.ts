import App from './index'

const PORT = process.env.PORT || 3001

App.listen(PORT, ()=>{
  console.log(`servidor rodando em http://localhost:${PORT}`)
})