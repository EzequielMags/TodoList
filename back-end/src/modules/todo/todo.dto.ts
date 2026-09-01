export enum StatusTodo {
    PENDENTE = "PENDENTE",
    EM_ANDAMENTO = "EM_ANDAMENTO",
    CONCLUIDO = "CONCLUIDO"
}

export default interface Todo {
    titulo: string,
    descricao?: string,
    temaId?: string,
    status: StatusTodo,
    dataVencimento?: Date
}