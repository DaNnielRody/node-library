import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv; // quando precisamos capturar algum comando inserido no terminal

async function imprimeLista(valida, resultado, identificador = '') {

    if (valida) {
    console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        await listaValidada(resultado));
    } else {
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identificador),
        resultado);
    }

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho); // lsStat pega as informações do link que está sendo passado
    } catch (erro) {
        if (erro.code === 'ENOENT') { //code é a propriedade do erro de código
            console.log(chalk.red('arquivo ou diretório não encontrado'));
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);
    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho)