const chalk = require('chalk');
const fs = require('fs');

function extraiLinks (texto) {
  const regex = /\[([ˆ\]]*)\]\((https?:\/\/[ˆ$#\s].[ˆ\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(temp)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  
 // const linksExtraidos = regex.exec(texto);
  return arrayResultados.length === 0 ? 'não há links': arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch(erro) {
    trataErro(erro);
//  } finally {
//    console.log(chalk.yellow('operação concluída'));
  }
}
//pegaArquivo('./arquivos/texto1.md');
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

module.exports = pegaArquivo;