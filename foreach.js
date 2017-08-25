var data = ['hej', 2, 'med'];
var taeller = 0;

function hello(){
    console.log(data[taeller]);
    taeller ++;
}

data.forEach(hello);

