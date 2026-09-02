import TemaController from "./tema.controller.js";


export default async function temaRoutes(app: any) {
    app.get("/tema", TemaController.pegarTemas)
    app.get("/tema/:id", TemaController.pegarTemaPorId)
    app.post("/tema", TemaController.criarTema)
    app.put("/tema/:id", TemaController.atualizarTema)
    app.delete("/tema/:id", TemaController.deletarTema)
}

