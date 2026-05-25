import produtoService from "../services/produto.service.js";
import { response } from "express";

async function findAllProdutoController(request, response) {
    try {
        const produtos = await produtoService.findAllProdutoService();  
        response.status(200).send({produtos});
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function createProdutoController(request, response) {
    const novoProduto = request.body;
    
    try {
        const produto = await produtoService.createProdutoService(novoProduto);  
        response.status(201).send(produto);
    } catch (error) {
        response.status(404).send(error.message);
    }
}


export default {
    findAllProdutoController,
    createProdutoController
}