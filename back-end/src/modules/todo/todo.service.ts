import Todo from "./todo.dto.js";
import TodoRepository from "./Todo.repository.js";

export default class TodoService {
    static async pegarTodos() {
        return await TodoRepository.pegarTodos()
    }

    static async pegarTodoPorId(id: string) {
        return await TodoRepository.pegarTodoPorId(id)
    }

    static async criarTodo(todo: Todo) {
        return await TodoRepository.criarTodo(todo)
    }

    static async atualizarTodo(id: string, todo: Todo) {
        return await TodoRepository.atualizarTodo(id, todo)
    }

    static async deletarTodo(id: string) {
        return await TodoRepository.deletarTodo(id)
    }
}