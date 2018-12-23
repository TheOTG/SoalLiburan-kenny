function soal2(param)
{
    var result = [];
    var temp = {};

    for(var i = 0; i < param.length; i++) {
        temp.firstName = param[i][0];
        temp.lastName = param[i][1];
        temp.hobbies = param[i][2];
        temp.profession = param[i][3];
        result.push(temp);
    }
    
    return result;
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));