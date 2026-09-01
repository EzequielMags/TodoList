import Todo from "../todo/todo.dto.js";

export default interface Tema {
    id: string,
    nome: string,
    icone?: string,
    cor: string,
    todos: Todo[]
}