// const chalk = require('chalk'); antiga forma de import

// console.log(chalk.blue('olá mundo'));

// console.log('olá mundo');

// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch((erro)=> trataErro(erro)) mesma coisa que o código abaixo
//         .catch(trataErro)
// }

// utilizar o _ como primeiro parâmetro é como dizer ao javascript não estamos utilizando nenhum parâmetro no momento, e que é para pulá-lo.

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8'              //erro, retorno
//     fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }