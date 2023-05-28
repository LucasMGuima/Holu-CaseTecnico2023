//Variaveis
var potenciaPainel = 0.55; //kW
var casasDecimais = 3; //qnts casas decimais
var medidasPainel = [1.95, 1.1] //comprimento m x largura m

//Modulos
var calcularQtdPaineis = require('./modulos/calcular/qtdPaineis');
var calcularQtdConversores = require('./modulos/calcular/qtdConversores');
var calcularAreaTotal = require('./modulos/calcular/area');
var calcularComprimento = require('./modulos/calcular/comprimento');

var http = require('http');

var formatarSaida = require('./modulos/formatarSaida');

//Entradas
const lerlinha = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//"Subir web"
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var potenciaAlvo = parseFloat(req.url.replace("/",""));
    //Calculos
    var qtdPaineis = calcularQtdPaineis(potenciaAlvo, potenciaPainel);
    var qtdConversores = calcularQtdConversores(qtdPaineis);
    var areaTotal = calcularAreaTotal(qtdPaineis, medidasPainel, casasDecimais);
    var comprimentoTotal = calcularComprimento(qtdPaineis, medidasPainel);

    //Mostrar
    var saida = formatarSaida(potenciaAlvo,potenciaPainel,qtdPaineis,qtdConversores,areaTotal, comprimentoTotal);

    //Finaliza
    res.end(saida);
}).listen(8080);