import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRouter = Router();

produtoRouter.get("/produtos", produtoController.findAllProdutoController);
produtoRouter.get("/produtos/:id", produtoController.findProdutoByIdController);
produtoRouter.post("/produtos", produtoController.createProdutoController);
produtoRouter.put("/produtos/:id", produtoController.updateProdutoController);
produtoRouter.delete("/produtos/:id", produtoController.deleteProdutoController);

export default produtoRouter;