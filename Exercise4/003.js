// hanya boleh menggunakan rekursif

function soal3(param1, param2)
{
    var result = 1;

    for(var i = 0; i < param2; i++) {
        result *= param1
    }

    return result;
}

console.log(soal3(2,5))
/*
    2 * 2 * 2 * 2 * 2 
    32
*/

console.log(soal3(3,3))
/*
    27
*/