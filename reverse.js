function rev(n){
    var res = n.replace(/\s/g, '');
    var res = res.toLowerCase();
    var test = res;
    var s = res.split("");
    var r = s.reverse();
    var j = r.join("");
    if (test == j){
        console.log('Dit input ER et palindrom ' + test + ' & ' + j);
    } else {
        console.log('Dit input er IKKE et palindrom ' + test + ' & ' + j);
    }
    
}
rev('Anna');




