import { FastifyReply, FastifyRequest } from "fastify";
import TodoService from "./todo.service.js";
import Todo from "./todo.dto.js";


export default class TodoController {
    static async pegarTodos(request: FastifyRequest, reply: FastifyReply) {
        try {
            const todos = await TodoService.pegarTodos()
            reply.status(200).send({ message: "Todos: ", todos })

        } catch (error) {
            reply.status(400).send({ message: "Erro ao pegar Todos", error })
        }
    }

    static async pegarTodoPorId(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            const todo = await TodoService.pegarTodoPorId(id)
            reply.status(200).send({ message: "Todo: ", todo })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao pegar Todo", error })
        }
    }

    static async criarTodo(request: FastifyRequest, reply: FastifyReply) {
        try {
            const novoTodo = request.body as Todo
            const todoCriado = await TodoService.criarTodo(novoTodo)
            reply.status(201).send({ message: "Todo criado com sucesso!", todo: todoCriado })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao criar Todo", error })
        }
    }

    static async atualizarTodo(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            const todoAtualizado = request.body as Todo
            const todo = await TodoService.atualizarTodo(id, todoAtualizado)
            reply.status(200).send({ message: "Todo atualizado com sucesso!", todo: todo })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao atualizar Todo", error })
        }
    }

    static async deletarTodo(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            await TodoService.deletarTodo(id)
            reply.status(200).send({ message: "Todo deletado com sucesso!" })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao deletar Todo", error })
        }
    }
} 