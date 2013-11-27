"use strict";
    var makePerson = function(persArr) {
    var i = 0;
    var totalAge = 0;
    var ages = [];
    var name = [];
    
    for (i; i < persArr.length; i++) 
    {
        totalAge += persArr[i].age;
        ages.push(persArr[i].age);
        name.push(persArr[i].name);
    }
    
    ages.sort();
    var personObj = {
        minAge:ages[0],
        maxAge:ages[ages.length -1],
        averageAge:Math.round(totalAge / ages.length)
    };
    //Sorterar namnen ur arrayen och skrever ut dem som en string med hjälp av .join
    personObj.names = name.sort(function (a, b) { return a.localeCompare(b)}).join(", ");
    
    return personObj;
};
    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    makePerson(data);