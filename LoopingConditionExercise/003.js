/*
    =========
    Triangel
    =========
    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya 
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid
    
    [EXAMPLE]
    triangel(5)
    output:
        *    
       ***
      *****
     *******
    *********
    triangel(3)
    output:
        *    
       ***
      *****
*/

function triangel(t) {

    if(t < 2) {
        console.log("t is invalid");
        return "t is invalid";
    }

    var result = "";

    for(var i = 0; i < t; i++) {
        for(var j = 0; j < t * 2 - 1; j++) {
            if(j >= Math.floor((t * 2 - 1) / 2) - i && j <= Math.floor((t * 2 - 1) / 2) + i) {
                result += "*";
            } else {
                result += " ";
            }
        }
        result += "\n";
    }

    console.log(result);
    return result;
}

triangel(3)
/*
      *    
     ***
    *****
*/

triangel(5)
/*
        *    
       ***
      *****
     *******
    *********
*/

triangel(1) // t is invalid