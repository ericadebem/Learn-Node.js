const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não ha arquivo no caminho'));
}
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
}
pegaArquivo('./arquivos/');

//Outras formas:

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
 // fs.promisses
//  .readFile(caminhoDoArquivo, encoding) 
//  .then((texto) => chalk.green(console.log(texto)))
//  .catch((erro) =>trataErro(erro))
//}

//ou

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//    if (erro) {
//      trataErro(erro);
//    }
//    console.log(chalk.yellow(texto));
//  })
//}

