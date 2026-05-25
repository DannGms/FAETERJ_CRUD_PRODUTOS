import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS produto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        valor TEXT NOT NULL,
        tipo TEXT NOT NULL
    )    
`);

function findAllProdutoRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM produto`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
} 

function createProdutoRepository(novoProduto) {
    const {
        nome, 
        valor,
        tipo
    } = novoProduto;

    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO produto(nome, valor, tipo)
                VALUES (?,?,?)`,
                [nome, valor, tipo],
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({
                            id: this.lastID
                        });
                    }
            }
        );
    });
}
        
            



export default {
    findAllProdutoRepository,
    createProdutoRepository
}

