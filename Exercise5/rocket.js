function rocket(param)
{
    var result = [];
    var tempA = [];
    var tempB = [];

    for(var i = 0; i < param; i++) {

        for(var j = 0; j < param; j++) {
            tempB.push(i);
            tempB.push(j);
            tempA.push(tempB);
            tempB = [];
        }
        
        result.push(tempA);
        tempA = [];
    }

    return result;
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/