import TodoController from "./todo.controller.js";


export default async function todoRoutes(app: any) {
    app.get("/todo", TodoController.pegarTodos)
    app.get("/todo/:id", TodoController.pegarTodoPorId)
    app.post("/todo", TodoController.criarTodo)
    app.put("/todo/:id", TodoController.atualizarTodo)
    app.delete("/todo/:id", TodoController.deletarTodo)
}

