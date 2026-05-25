import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

async function createProdutoService(novoProduto) {
    const produto = await produtoRepository.createProdutoRepository
    (novoProduto);
    
    if (!produto) {
        throw new Error("Erro ao criar novo produto!");
    }

    return produto;
} 

export default {
    findAllProdutoService,
    createProdutoService
}