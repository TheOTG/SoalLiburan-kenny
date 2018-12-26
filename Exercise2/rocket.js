/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
    if(param % 2 === 0 || param <= 3) {
        return "invalid input";
    }

    for(var i = 0; i < param; i++) {
        var temp = "'";
        for(var j = 0; j < param; j++) {
            if(j === i || j === param - i - 1) {
                temp += "*";
            } else {
                temp += " ";
            }
        }
        temp += "'";
        console.log(temp);
    }

    return "";
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/