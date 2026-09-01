import Tema from "./tema.dto.js";
import TemaRepository from "./Tema.repository.js";

export default class TemaService {
    static async pegarTemas() {
        return await TemaRepository.pegarTemas()
    }

    static async pegarTemaPorId(id: string) {
        try {
            if (!id) throw new Error("Id do tema não fornecido")
            const tema = await TemaRepository.pegarTemaPorId(id)

            if (!tema) throw new Error("Tema não foi localizado. tente novamente")

            return tema

        } catch (error) {
            throw error
        }
    }

    static async criarTema(tema: Tema) {
        return await TemaRepository.criarTema(tema)
    }

    static async atualizarTema(id: string, tema: Tema) {
        return await TemaRepository.atualizarTema(id, tema)
    }

    static async deletarTema(id: string) {
        return await TemaRepository.deletarTema(id)
    }
}