function soal1(param)
{
    var word = "";
    
    for(var i = 0; i < param.length; i++) {
        word += param[param.length - 1 - i] + "\n";
    }

    return word;
}

console.log(soal1("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/