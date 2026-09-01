import { Todo } from "../../../generated/prisma/client.js";
import { prisma } from "../../lib/prisma.js";

interface Tema {
    id: string,
    nome: string,
    icone?: string,
    cor: string,
    todos: Todo[]
}

export default class TemaRepository {
    static async pegarTema() {
        return await prisma.tema.findMany()
    }

    static async pegarTemaPorId(id: string) {
        return await prisma.tema.findUnique({
            where: {
                id: id
            }
        })
    }

    static async criarTema(tema: Tema) {
        return await prisma.tema.create({
            data: {
                nome: tema.nome,
                cor: tema.cor,
                icone: tema.icone,
                todos: {
                    create: tema.todos
                }
            }
        })
    }

    static async atualizarTema(id: string, tema: Tema) {
        return await prisma.tema.update({
            where: {
                id: id
            },
            data: {
                nome: tema.nome,
                cor: tema.cor,
                icone: tema.icone,
                todos: {
                    create: tema.todos
                }
            }
        })
    }

    static async deletarTema(id: string) {
        return await prisma.tema.delete({
            where: {
                id: id
            }
        })
    }
}