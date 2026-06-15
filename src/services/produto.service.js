import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

async function findProdutoByIdService(id) {
    const produto = await produtoRepository.findProdutoByIdRepository(id);

    if (!produto) {
        throw new Error("Produto não encontrado!");
    }

    return produto;
}

async function createProdutoService(novoProduto) {
    const produto = await produtoRepository.createProdutoRepository(novoProduto);

    if (!produto) {
        throw new Error("Erro ao criar novo produto!");
    }

    return produto;
}

async function updateProdutoService(id, produtoAtualizado) {
    const produto = await produtoRepository.findProdutoByIdRepository(id);

    if (!produto) {
        throw new Error("Produto não encontrado!");
    }

    const produtoRetorno = await produtoRepository.updateProdutoRepository(id, produtoAtualizado);
    
    if (!produtoRetorno) {
        throw new Error("Erro ao atualizar o produto!");
    }

    return produtoRetorno;
}

async function deleteProdutoService(id) {
    const produto = await produtoRepository.findProdutoByIdRepository(id);

    if (!produto) {
        throw new Error("Produto não encontrado!");
    }

    const mensagemRetorno = await produtoRepository.deleteProdutoRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar produto!");
    }
}

return mensagemRetorno


export default {
    findAllProdutoService,
    findProdutoByIdService,
    createProdutoService,
    updateProdutoService,
    deleteProdutoService
}