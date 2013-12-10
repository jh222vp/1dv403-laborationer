"use strict";

//Statiskt object
var Memory = {
    
    imageArray: [],
    init : function(rows, cols){
        
        //Slumpar fram siffrorna med hjälp av random.js och fyller på arrayen imageArray
        var random = RandomGenerator.getPictureArray(rows, cols);
        
        //Tar mig till vanilj-funktionen nedan
        this.displayMemory(rows, cols, random);
        
        
    },
    displayMemory : function(rows, cols, random) {
        var MemoryDiv = document.getElementById('MemoryDiv');
        var table = document.createElement("table");
        
        var count = 0;
        
        for (var i = 0; i < rows; i++) {
			//Memory.imageArray[i] = "pics/" + Memory.imageArray[i] + ".png";
            var tr = document.createElement("tr");
            
            for (var e = 0; e < cols; e++) {
                //Memory.imageArray[i] = "pics/" + Memory.imageArray[i] + ".png";
                var card = new Const(random[count]);
                random.push(card);

                tr.appendChild(card.getTd());
                count++;
            }
            table.appendChild(tr);
        }
        MemoryDiv.appendChild(table);
        
        console.log(Memory.imageArray);
},
};
//Kör detta allra först när sidan laddas i
window.onload = function (){
    Memory.init(4,4);
};