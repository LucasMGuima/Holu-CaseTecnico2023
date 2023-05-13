var area = function(qtdPaineis, medidasPainel, casasDecimais){
    let areaUnitaria = medidasPainel[0] * medidasPainel[1];
    let areaTotal = areaUnitaria * qtdPaineis;

    areaTotal = areaTotal.toFixed(casasDecimais);
    return parseFloat(areaTotal);
}

module.exports = area;