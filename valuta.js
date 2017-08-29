function valuta(kr){
    var dollar = kr / 6.300100;
    var euro = kr / 7.437900;
    var pund = kr / 8.084700;
    var svensk = kr / 0.782000;

    console.log('Din danske valuta '+ Math.round(kr) +'kr. er ' + Math.round(dollar) + ' $, ' + Math.round(euro) + ' €, ' + Math.round(pund) + ' £, og ' + Math.round(svensk) + ' Skr.')
}

valuta(580);