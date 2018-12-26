function soal3(param)
{
    var result = {};
    var tempResult = [];
    var paramSort = param;

    // Sort the array in ascending order
    for(var a = 0; a < paramSort.length; a++) {

        for(var b = a + 1; b < paramSort.length; b++) {
            if(paramSort[a] > paramSort[b]) {
                var paramTempValue = paramSort[b];
                paramSort[b] = paramSort[a];
                paramSort[a] = paramTempValue;
            }
        }

    }

    // Code for output
    for(var i = 0; i < paramSort.length; i++) {
        
        var word = paramSort[i];
        var wordNext = ' ';

        if(paramSort[i + 1] !== undefined) {
            wordNext = paramSort[i + 1];
        }

        tempResult.push(word);

        if(word[0] !== wordNext[0]) {
            switch(word[0]) {
                case 'A':
                    result.A = tempResult;
                    break;
                case 'B':
                    result.B = tempResult;
                    break;
                case 'C':
                    result.C = tempResult;
                    break;
                case 'D':
                    result.D = tempResult;
                    break;
                case 'E':
                    result.E = tempResult;
                    break;
                case 'F':
                    result.F = tempResult;
                    break;
                case 'G':
                    result.G = tempResult;
                    break;
                case 'H':
                    result.H = tempResult;
                    break;
                case 'I':
                    result.I = tempResult;
                    break;
                case 'J':
                    result.J = tempResult;
                    break;
                case 'K':
                    result.K = tempResult;
                    break;
                case 'L':
                    result.L = tempResult;
                    break;
                case 'M':
                    result.M = tempResult;
                    break;
                case 'N':
                    result.N = tempResult;
                    break;
                case 'O':
                    result.O = tempResult;
                    break;
                case 'P':
                    result.P = tempResult;
                    break;
                case 'Q':
                    result.Q = tempResult;
                    break;
                case 'R':
                    result.R = tempResult;
                    break;
                case 'S':
                    result.S = tempResult;
                    break;
                case 'T':
                    result.T = tempResult;
                    break;
                case 'U':
                    result.U = tempResult;
                    break;
                case 'V':
                    result.V = tempResult;
                    break;
                case 'W':
                    result.W = tempResult;
                    break;
                case 'X':
                    result.X = tempResult;
                    break;
                case 'Y':
                    result.Y = tempResult;
                    break;
                case 'Z':
                    result.Z = tempResult;
                    break;
            }
            tempResult = [];
        }
    }

    return result;
}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']));

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/