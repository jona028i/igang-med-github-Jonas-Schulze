var tal1 = 1;
var tal2 = 1;
var tempTal = 0;
var resultat = 0;

for(var i = 0; i < 100; i++){
    resultat += tal1 + ', ';
    tempTal = tal2;
    tal2 = tal1 + tal2;
    tal1 = tempTal;
}

console.log(resultat);