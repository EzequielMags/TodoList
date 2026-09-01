import { prisma } from "../../lib/prisma.js";
import Todo from "./todo.dto.js";

export default class TodoRepository {
    static async pegarTodos() {
        return await prisma.todo.findMany()
    }

    static async pegarTodoPorId(id: string) {
        return await prisma.todo.findUnique({
            where: {
                id: id
            }
        })
    }

    static async criarTodo(todo: Todo) {
        return await prisma.todo.create({
            data: {
                titulo: todo.titulo,
                descricao: todo.descricao || null,
                status: todo.status,
                temaId: todo.temaId,
                data_vencimento: todo.dataVencimento
            }
        })
    }

    static async atualizarTodo(id: string, todoAtualizado: Partial<Todo>) {
        return await prisma.todo.update({
            where: {
                id: id
            },
            data: todoAtualizado

        })
    }

    static async deletarTodo(id: string) {
        return await prisma.todo.delete({
            where: {
                id: id
            }
        })
    }
}