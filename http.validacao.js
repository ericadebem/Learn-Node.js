const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function validaURLS(arrayLinks) {
    return arrayLinks;
}

module.exports = validaURLS;