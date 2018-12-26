function soal2(param)
{
    var result = [];
    var temp = [];

    if(param % 2 === 0) {
        return 'invalid input';
    }

    for(var i = 0; i < Math.floor(param / 2) + 1; i++) {

        for(var j = 0; j < param; j++) {
            if(j === Math.floor(param / 2)) {
                temp.push('*');
            } else {
                temp.push('');
            }
        }

        for(var k = 1; k < i + 1; k++) {
            temp[Math.floor(param / 2) + k] = '*';
            temp[Math.floor(param / 2) - k] = '*';
        }
        result.push(temp);
        temp = [];
    }

    return result;
}

console.log(soal2(5))
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

