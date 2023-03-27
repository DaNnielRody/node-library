import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; // o regex tem que ser passado sobre // e fechando com gm
    const capturas = [...texto.matchAll(regex)]; // texto.match(regex), regex.exec(texto)
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] })) // quando precisa capturar um valor e usar este como chave, precisa englobar entre [], e para verificar que as [] não são de função, mas de objeto, precisamos englobar os () dentro deles.

    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

// os parâmetros sendo passados para que ao pegar o erro, mostre o código e dê a mensagem especificando o que houve

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo;