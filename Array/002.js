/*
    ======================
    String to Multidimensi
    ======================

    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col

    [EXAMPLE]

    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akat 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]

 */

 function stringToMultidimensi(str) {
    var matrix = [];
    var rowIndex = 0;
    var colIndex = 0;

    if(Math.sqrt(str.length) % 1 !== 0) {
        console.log("char count invalid");
        return "char count invalid"
    }

    for(var a = 0; a < Math.sqrt(str.length); a++) {
        matrix[a] = [];
        for(var b = 0; b < Math.sqrt(str.length); b++) {
            matrix[a][b] = undefined;
        }
    }

    for(var i = 0; i < str.length; i++) {
        matrix[rowIndex][colIndex] = str[i];
        if(colIndex === Math.sqrt(str.length) - 1) {
            colIndex = 0;
            rowIndex++;
        } else {
            colIndex++;
        }
    }
    console.log(matrix);
    return matrix;
 }

 stringToMultidimensi("0120194124213712")
 /*
    [
        [0,1,2,0],
        [1,9,4,1],
        [2,4,2,1],
        [3,7,1,2]
    ]
 */

stringToMultidimensi("01201941242137127")
 /*
    // char count invalid
 */
