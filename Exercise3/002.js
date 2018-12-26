/*
    wajib pseudocode. 

    Jawaban pseudocode disini 

    CREATE function 'soal2' with 1 parameter 'param'
    CREATE and ASSIGN 'alphabet' as abcdefghijklmnopqrstuvwxyz
    CREATE and ASSIGN 'result' as empty ARRAY
    CREATE and ASSIGN 'temp' as empty ARRAY
    CREATE and ASSIGN 'count' as 0

    if input is 0
        DISPLAY invalid input
    
    for loop (var i = 0; i < 'param'; i = i + 1)

        for loop (var j = 0; j < 'param'; j = j + 1)
            ADD 'alphabet' index 'count' to 'temp'
            IF 'count' is 25
                ASSIGN 'count' as 0
            ELSE
                ADD 1 to 'count'
        
        ADD 'temp' to 'result'
        ASSIGN 'temp' as empty ARRAY
    
    return 'result'
    
*/

function soal2(param)
{
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
    var temp = [];
    var count = 0;

    if(param === 0) {
        return 'invalid input';
    }

    for(var i = 0; i < param; i++) {
        for(var j = 0; j < param; j++) {
            temp.push(alphabet[count]);
            if(count === 25) {
                count = 0;
            } else {
                count++;
            }
        }
        result.push(temp);
        temp = [];
    }

    return result;
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input