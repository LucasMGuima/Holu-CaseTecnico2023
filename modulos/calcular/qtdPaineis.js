var qtdPaineis = function(potenciaAlvo, potenciaPainel){
    let qtdPaineis = Math.ceil(potenciaAlvo/potenciaPainel);
    return qtdPaineis;
}

module.exports = qtdPaineis;