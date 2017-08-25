
var bool = true;
var hej = 1 + 'hej';
var b1 = hej;
var boolean = ['hej', 2, '68', b1];
for (var i = 0; i < boolean.length; i++) {
    if (bool){
        console.log('hej verden');
        bool = false;
    } else if (bool == false && boolean[3] == '1hej'){
        console.log('nej mars');
        bool = true;
    }
}
var number = Math.floor((Math.random() * 100) + 1);
if (number > 50){
    console.log('tallet er størrer end 50. tallet er ' + number);
} else {
    console.log('tallet er mindre end 50. tallet er ' + number);
}

var age = 17;
age > 18 ? (
    console.log('OK, you can go.')
) : (
    console.log('Sorry, you are much too young!')
);


var h = true;
var o = 3 - 1;
var warter = [h, o];
if (h && o == 3 - 1) {    
    warter = 'H' + o + 'O';
}
var beverage = ['ColaCola', 'pepsi', 'beer', warter];
console.log(beverage[3]);

var drik = 'vand';
    switch (drik){
        case 'kaffe':
            console.log('something went wrong');
        break;
        
        case 'vand':
            console.log('something went right');
        break;

        default:
            console.log('please do this again');
    }


    var tal1 = Math.floor((Math.random() * 100) + 1);
    var tal2 = Math.floor((Math.random() * 100) + 1);
    console.log(tal1 + tal2);
    console.log(tal1 - tal2);
    console.log(tal1 * tal2);
    console.log(tal1 / tal2);
    console.log(tal1 % tal2);
    console.log(tal1++);
    console.log(tal2--);

    console.log('ny');

    var tal3 = Math.floor((Math.random() * 100) + 1);
    var tal4 = Math.floor((Math.random() * 100) + 1);

    console.log(tal3 += tal4);
    console.log(tal4 /= tal3);
    console.log(tal3 %= tal4);
    console.log(tal4 *= tal3);
    console.log(tal3 -= tal4);

    var n1 = 1;
    var n2 = 2;
    if (n1 == n2 && n2 == n1){
        console.log('What the fuck went wrong?');
    } else {
        console.log('seems okay?');
    }