const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const porta =  process.env.PORT | 3000

server.use(middlewares)
server.use('/api', router)
server.listen(porta, () => {
  console.log('API no funcionamento na Porta' + porta)
})