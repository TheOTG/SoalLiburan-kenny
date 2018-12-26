/*
    ===========
    Bar X dan O
    ===========

    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X

    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 

    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 

    [EXAMPLE]

    generateBarXO(4,3)
    output: 
    xoox
    ooxo
    oxoo
    xoox

    generateBarXO(6,4)
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo

*/

function generateBarXO(p,t) {
    var temp = "";
    var count = 1;

    for(var i = 0; i < t; i++) {

        for(var j = 0; j < p; j++) {
            if(count === 1) {
                temp += "x";
                count++;
            } else if(count === 2) {
                temp += "o";
                count++;
            } else {
                temp += "o";
                count = 1;
            }
        }

        console.log(temp);
        temp = "";
    }

    return "";
}

generateBarXO(4,3)
/* 
xoox
ooxo
oxoo
xoox
*/

generateBarXO(6,4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/