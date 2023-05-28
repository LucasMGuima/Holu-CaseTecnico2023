var qtdConversores = function(qtdPaineis){
    let qtdConversorSuporta = 4;
    let qtdConversores = Math.ceil(qtdPaineis/qtdConversorSuporta);
    return qtdConversores;
}

module.exports = qtdConversores;