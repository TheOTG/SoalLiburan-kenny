// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    var result = [];
    var temp = [];
    var loopCount = 0;

    if(param.length % 2 === 0) {
        loopCount = param.length / 2;
    } else {
        loopCount = Math.floor(param.length / 2) + 1;
    }
    
    for(var i =  0; i < loopCount; i++) {
        if(param.length % 2 === 1 && i === loopCount - 1) {
            temp.push(param[i]);
            temp.push('Instruktur')
        } else {
            temp.push(param[i]);
            temp.push(param[param.length - i - 1]);
        }
        result.push(temp);
        temp = [];
    }
    return result;
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]