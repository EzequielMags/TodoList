import fastify from 'fastify'
import cors from '@fastify/cors'
import temaRoutes from './modules/tema/tema.routes.js'
import todoRoutes from './modules/todo/todo.routes.js'

const server = fastify()

server.register(cors, {
    origin: true
})

server.register(temaRoutes)
server.register(todoRoutes)

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log("Server esta rodando", address)
})