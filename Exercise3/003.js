function soal3(param)
{
    var result = {};
    var tempUnder20 = [];
    var tempOver20 = [];

    for(var i = 0; i < param.length; i++) {
        if(param[i][1] < 20) {
            tempUnder20.push(param[i][0]);
        } else {
            tempOver20.push(param[i][0]);
        }
    }

    result.under20 = tempUnder20;
    result.over20 = tempOver20;

    return result;
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/