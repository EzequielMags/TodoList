
import { prisma } from "../../lib/prisma.js";
import Tema from "./tema.dto.js";



export default class TemaRepository {
    static async pegarTemas() {
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