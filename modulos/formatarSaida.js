var saida = function(potenciaAlvo, potenciaPainel, qtdPaineis, qtdConversores, areaTotal, comprimentoTotal){
    let mensagem = `
    <meta charset="UTF-8">
    <p>Para um sistema de ${potenciaAlvo} kW, utilizando painéis de ${potenciaPainel*1000} W precisaremos de:</p>
    <ul>
        <li>${qtdPaineis} painéis solare(s);</li>
        <li>${qtdConversores} conversor(es);</li>
    </ul>
    <p>Que ocupara uma área de ${areaTotal}m² e </br> o comprimento de estrutura necessária será de ${comprimentoTotal}m.</p>
    `;
    return mensagem;
}

module.exports = saida;