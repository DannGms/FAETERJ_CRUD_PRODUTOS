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

async function findProdutoByIdController(request, response) {
    const {id} = request.params;

    try {
        const produto = await produtoService.findProdutoByIdService(id);
        response.status(200).send({produto});
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

async function updateProdutoController(request, response) {

    const { id } = request.params;
    const produtoAtualizado = request.body;

    try {
       const produto = await produtoService.updateProdutoService(id,
        produtoAtualizado);
    response.status(200).send ({produto}); 
    } catch (error) {
    response.status(400).send(error.message);    
     }
    
}

async function  deleteProdutoController(request, response) {
    const { id } = request.params;

    try {
     const produto = await produtoService.deleteProdutoService(id);
        response.status(200).send (retorno); 
    } catch (error) {
        response.status(400).send(error.message);    
     }
}

export default {
    findAllProdutoController,
    findProdutoByIdController,
    createProdutoController,
    updateProdutoController,
    deleteProdutoControllerS
}