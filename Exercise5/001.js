function soal1(objList,id,action)
{
    if(action === "view") {
        return objList[id];
    }

    if(action === "delete") {
        objList[id] = objList[id + 1]
        delete objList[id + 1];
        return objList;
    }
}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/