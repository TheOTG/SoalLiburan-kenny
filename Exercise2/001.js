/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 

    CREATE function soal1 with 1 parameter
    CREATE AND ASSIGN "result" as empty ARRAY
    CREATE AND ASSIGN "count" as 1

    IF parameter is 0
        DISPLAY "invalid input"

    for (var i = 0; i < parameter; i = i + 1)
        if "count" is 1
            ADD to result = "!"
            count = count + 1
        else if "count" is 2
            ADD to result = "@"
            count = count + 1
        else
            ADD to result = "#"
            count = 1
    
    DISPLAY result



*/
function soal1(param)
{
    var result = [];
    var count = 1;

    if(param === 0) {
        return "invalid input";
    }

    for(var i = 0; i < param; i++) {
        if(count === 1) {
            result.push("!");
            count++;
        } else if(count === 2) {
            result.push("@");
            count++;
        } else {
            result.push("#");
            count = 1;
        }
    }

    return result;
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input