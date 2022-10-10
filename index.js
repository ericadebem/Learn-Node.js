const chalk = require('chalk');
const fs = require('fs');

function extraiLinks (texto) {
  const regex = /\[([ˆ\]]*)\]\((https?:\/\/[ˆ$#\s].[ˆ\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(temp)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  
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
 }
}

module.exports = pegaArquivo;