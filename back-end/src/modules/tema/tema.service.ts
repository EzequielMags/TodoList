import Tema from "./tema.dto.js";
import TemaRepository from "./Tema.repository.js";

export default class TemaService {
    static async pegarTemas() {
        return await TemaRepository.pegarTemas()
    }

    static async pegarTemaPorId(id: string) {
        return await TemaRepository.pegarTemaPorId(id)
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