"use strict";


   var makePerson = function(persArr) {
   
   var result = {};

   
    var personObj = {};
    personObj.minAge = persArr[1].age;
    personObj.maxAge = persArr[2].age;
    personObj.averageAge = Math.round((persArr[0].age+persArr[1].age+persArr[2].age) / 3);
    
    //Loopar genom arrayen
    var names = persArr.map(function(person){ return person.name; });
    //names.sort();
    
    personObj.names = names.sort(function (a, b) { return a.localeCompare(b)}).join(", ");
    //personObj.names = names.sort();
    
    //names.sort(function (a, b) { return a.localeCompare(b)});
    
    //personObj.names = persArr[1].name +","+ persArr[0].name + ","+ persArr[2].name;
    //personObj.names.toString();
    //personObj.names = persArr[2].name;
    //personObj.names = persArr[0].name;
    
    return personObj;
};
    //names.sort(function (a, b) { return a.localeCompare(b)});
    
    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

    data.sort(function (a, b) { return a.localeCompare(b)});
    var result = makePerson(data);
    
    
    


//var personAges = persArr.map();