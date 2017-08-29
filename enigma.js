var pro = prompt('Code or Decode?');
function start(){
    pro = pro.toLowerCase();
    if (pro == 'code'){
        code();
    } else if (pro == 'decode'){
        decode();
    }
    return false;

}

function code(){
    crypOne = (Math.random() * 26) + 1;
    crypTwo = (Math.random() * 26) + 1;
    pro = prompt('What to cryptate?');
    pro = pro.split("");
    alert(pro);
    for (var i = 0; i < pro.length; i ++){
        

    }

}

function decode(){

}