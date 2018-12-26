/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

function generateBar(p,t) {
    var temp = "";
    
    if(p < t) {
        console.log("panjang harus lebih besar daripada tinggi");
    } else {
        
        for(var i = 0; i < t; i++) {
            
            for(var j = 0; j < p; j++) {
                if(i === 0 || i === t - 1) {
                    temp += "o";
                } else if(j === 0 || j === p -1) {
                    temp += "o";
                } else {
                    temp += " ";
                }
            }

            console.log(temp);
            temp = "";
        }
    }

    return "";
}

generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 