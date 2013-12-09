"use strict";

//Statiskt object
var Memory = {
    
    imageArray: [],
    init : function(){
        //Deklarerar variabler
        
        //Dessa två variabler håller i hur många memorybrickor det är i höjd och sidled.
        var cols = 4;
        var rows = 4;
        
        //Slumpar fram siffrorna med hjälp av random.js
        Memory.imageArray = RandomGenerator.getPictureArray(cols, rows);
        
        /*for (var i = 0; i < Memory.imageArray.length; i++) {
			Memory.imageArray[i] = "img/" + Memory.imageArray[i] + ".png";
			renderBoard(i); //Skapa en LI tagg för varje bild.
        }*/
        console.log(Memory.imageArray);
    }
};
window.onload = Memory.init; 