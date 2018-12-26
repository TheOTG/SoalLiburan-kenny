function rocket(param)
{
    var result = [];
    var temp = [];

    for(var i = 0; i < param; i++) {
        for(var j = 0; j < param; j++) {
            if(param % 2 === 0) {
                if((j === (param / 2) || j === (param / 2) - 1) && (i === (param / 2) || i === (param / 2 - 1))) {
                    temp.push('*');
                } else {
                    temp.push('');
                }
            } else {
                if(j === Math.floor(param / 2) && i === Math.floor(param / 2)) {
                    temp.push('*');
                } else {
                    temp.push('');
                }
            }
        }
        result.push(temp);
        temp = [];
    }

    return result;
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/