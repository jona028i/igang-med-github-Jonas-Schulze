var betingB = false;
var ubetingB = false;
var fangselB = false;
var bodeB = false;
var dageifang = 20;
var info = '';
var frakend = 0;
var bode = 0;
function sprit(pro, lon){
    if (pro >= 0.51 && pro < 1.2){
        bode = lon * pro;
        betingB = true;
    } else if (pro >= 1.2000001 && pro <= 2.0){
        bode = lon * pro;
        ubetingB = true;
        frakend = 3;
    } else if (pro > 2) {
        bode = lon;
        ubetingB = true;
        fangselB = true;
        frakend = 3;
        dageifang = 20;
    }
    if (ubetingB == true){
        info += ' ubetinget frakendelse af kørerkort,';
    }
    if (betingB == true){
        info += ' betinget frakendelse af kørerkort,';
    }
    if (fangselB == true){
        info += ' betinget fængsel i ' + dageifang + ' dage,';
    }
    console.log('Din promille er ' + pro + ' din dom lyder: ' + info + ' + en bøde på ' + bode + 'kr.');


}

sprit(2.1, 8000)