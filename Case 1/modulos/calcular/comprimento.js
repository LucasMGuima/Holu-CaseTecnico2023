//Acha o comprimento se os Paines forem colocados de comprido, um ao lado do outro
var comprimento = function(qtdPaineis, medidasPainel){
    let comprimentoPainel = medidasPainel[0];
    let comprimentoTotal = comprimentoPainel * qtdPaineis;
    return comprimentoTotal;
}

module.exports = comprimento;