import 'dotenv/config'
import express from "express";
import cors from "cors";
import usuarioController from "./controller/usuarioController.js"
import profissionalController from "./controller/profissionalController.js"
import servicoController from "./controller/servicoController.js"
import admController from "./controller/admController.js"

const server = express();
server.use(cors());
server.use(express.json());

server.use("/storage/FotosProfissional", express.static("storage/FotosProfissional"))
server.use("/storage/FotosCliente", express.static("storage/FotosCliente"))

server.use(usuarioController);
server.use(servicoController);
server.use(admController);
server.use(profissionalController);

server.listen(process.env.PORT, () => console.log(`Api conectada na porta: ${process.env.PORT}`));