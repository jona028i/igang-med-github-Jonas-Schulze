function fart(fartG, hastighed, veja){
    fartbode = false;
    klipikort = false;
    var bode = 0;
    var vejarbejd = '';
    var frakendelse = '';
    if (hastighed > fartG + 3){
        fartbode = true;        
        var x = (((hastighed / fartG) * 100) - 100);
        if (x >= 2 && x < 28){
            bode = 1000;
            frakendelse = '';
        } else if (x >= 28 && x < 29.999){
            bode = 1500;
            frakendelse = '';
        } else if (x == 30){
            bode = 2500;
            frakendelse = '';
        } else if (x >= 32 && x < 38.1){
            bode = 2500;
            frakendelse = '+ klip i kortet';
        } else if (x >= 38.1 && x < 58.1){
            bode = 3000;
            frakendelse = '+ klip i kortet';
        } else if (x == 58.1){
            bode = 3500;
            frakendelse = '+ klip i kortet';
        } else if (x >= 58.2 && x < 68.1){
            bode = 3500;
            frakendelse = '+ betinget frakendelse';
        } else if (x >= 68.1 && x < 78.1){
            bode = 4000;
            frakendelse = '+ betinget frakendelse';
        } else if (x >= 78.1 && x < 88.1){
            bode = 4500;
            frakendelse = '+ betinget frakendelse';
        } else if (x >= 88.2 && x < 99.9){
            bode = 5500;
            frakendelse = '+ betinget frakendelse';
        } else if ( x == 100){
            bode = 6000;
            frakendelse = '+ betinget frakendelse';
        } else if (x >= 101){
            bode = 6000;
            frakendelse = '+ ubetinget frakendelse';
        }
        if (veja){
            bode *= 2;
            vejarbejd = 'Din bøde er forhøjet grundet vejarbejde i zone '
        }
        // x = Math.round(x);
        console.log('Du har kørt ' + Math.round(x) + '% for hurtigt, du får ' + bode + 'kr. i bøde. ' + vejarbejd  + frakendelse);
    }
}

fart(120, 154,false);