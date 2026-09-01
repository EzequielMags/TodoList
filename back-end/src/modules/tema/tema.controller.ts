import { FastifyReply, FastifyRequest } from "fastify";
import TemaService from "./tema.service.js";
import Tema from "./tema.dto.js";

export default class TemaController {
    static async pegarTemas(request: FastifyRequest, reply: FastifyReply) {
        const temas = await TemaService.pegarTemas()
        reply.send(temas)
    }

    static async pegarTemaPorId(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            const tema = await TemaService.pegarTemaPorId(id)
            reply.status(200).send({ message: "Temas: ", tema })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao pegar Tema", error }) /// Será necessario automatizar o status de erro 
        }
    }

    static async criarTema(request: FastifyRequest, reply: FastifyReply) {

        try {
            const novoTema = request.body as Tema
            const temaCriado = await TemaService.criarTema(novoTema)

            reply.status(201).send({ message: "Tema criado com sucesso!", tema: temaCriado })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao criar Tema", error }) /// Será necessario automatizar o status de erro 
        }
    }

    static async atualizarTema(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            const temaParaAtualizar = request.body as Tema

            const temaAtualizado = await TemaService.atualizarTema(id, temaParaAtualizar)

            reply.status(200).send({ message: "Tema atualizado com sucesso", tema: temaAtualizado })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao atualizar Tema", error }) /// Será necessario automatizar o status de erro 
        }
    }

    static async deletarTema(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = request.params as { id: string }
            await TemaService.deletarTema(id)
            reply.status(200).send({ message: "Tema deletado com sucesso" })
        } catch (error) {
            reply.status(400).send({ message: "Erro ao deletar Tema", error }) /// Será necessario automatizar o status de erro 
        }
    }
}