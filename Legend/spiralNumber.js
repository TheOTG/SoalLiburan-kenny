function spiralNumber(param)
{
    var matrix = [];
    var row = 0;
    var col = 0;
    var wall = param - 1;
    var step = param - 1;
    var flag = 1;
    var direction = "right";

    for(var a = 0; a < param; a++) {
        matrix[a] = [];
        for(var b = 0; b < param; b++) {
            matrix[a][b] = undefined;
        }
    }

    for(var i = 1; i <= param * param; i++) {
        
        matrix[row][col] = i;

        // go to next index
        switch(direction) {
            case "right":
                col++;
                break;
            case "left":
                col--;
                break;
            case "up":
                row--;
                break;
            case "down":
                row++;
                break;
        }

        // about to hit a wall?
        if(i == wall) {
            wall += step;
            if(flag !== 2) {
                flag = 2;
            } else {
                flag = 1;
                step--;
            }

            // rotate
            switch(direction) {
                case "right":
                    direction = "down";
                    break;
                case "down":
                    direction = "left";
                    break;
                case "left":
                    direction = "up";
                    break;
                case "up":
                    direction = "right";
                    break;
            }
        }
    }

    return matrix;
}

console.log(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.log(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/