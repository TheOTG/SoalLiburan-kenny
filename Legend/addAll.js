/*

    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/


function addAll(num)
{
    if(num[0] === 1 || num[num.length - 1] === 1) {
        if(num[0] < num[num.length - 1]) {
            return (num[num.length - 1] * (num[num.length - 1] + 1)) / 2;
        } else {
            return (num[0] * (num[0] + 1)) / 2;
        }
    } else if(num[0] < num[num.length - 1]) {
        return ((num[num.length - 1] * (num[num.length - 1] + 1)) / 2) - ((num[0] - 1) * num[0] / 2);
    } else {
        return ((num[0] * (num[0] + 1)) / 2) - ((num[num.length - 1] - 1) * num[num.length - 1] / 2);
    }
}

console.log(addAll([1,2,3,4,5]));
// 15

console.log(addAll([5,6,7,8,9,10]));
// 45

console.log(addAll([2,3,4,5,6]));
// 20

console.log(addAll([8,7,6,5,4,3,2]));
// 35