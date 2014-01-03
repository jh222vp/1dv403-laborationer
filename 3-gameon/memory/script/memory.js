"use strict";

//Statiskt object
var Memory = {
    AmountOfTries : 0,
    currentCard : null,
    previousCard : null,
    clicks : 0,
    
    init : function(rows, cols){
        
        //Slumpar fram siffrorna med hjälp av random.js och fyller på arrayen imageArray
        var random = RandomGenerator.getPictureArray(rows, cols);
        //Tar mig till displayMemory-funktionen nedan, utan denna syns inte spelet.
        this.displayMemory(rows, cols, random);
        
    },
    //Funktion som generar rader och kolummer, tar också variabeln random
    displayMemory : function(rows, cols, random) {

        var count = 0;
        var that = this;
        
        //Hämtar elementet "MemoryDiv", skapar en table
        var MemoryDiv = document.getElementById('MemoryDiv');
        var table = document.createElement("table");
        

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            
            for (var e = 0; e < cols; e++) {
                
                var card = new Const(random[count],that);
                random.push(card);

                tr.appendChild(card.getTd());
                count++;
            }
            table.appendChild(tr);
        }
        MemoryDiv.appendChild(table);
        
},
    flipCard : function(card) {
        //Hindrar fler än två kort att vändas.
        if(this.currentCard !== null && this.previousCard !== null){
            return;
        }
        //Ökar clicks med 1
        this.clicks++;
        var that = this;
        if (this.clicks === 1) {
            //sparar undan första kortet från card.
            this.currentCard = card;
            card.flip();
            return;
        }
        if (this.clicks === 2){
            //sparar undan andra kortet från card.
            this.previousCard = card;
            card.flip();

            if (this.currentCard.getID() === this.previousCard.getID()) {
                that.clicks = 0;
                
                //Nollstället currentcard och previousCard
                that.currentCard = null;
                that.previousCard = null;
            }
            else{
                setTimeout(function() {
                that.currentCard.getImg();
                that.previousCard.getImg();
                //
                that.currentCard = null;
                that.previousCard = null;
            }, 1000);
            
        }
        that.clicks = 0;
        that.score(that.AmountOfTries++);
        }
        
    },
    score : function(AmountOfTries){
        document.getElementById('amountOfTries').innerHTML = 'Antal försök: ' + this.AmountOfTries;
    }

};
//Kör detta allra först när sidan laddas i
window.onload = function (){
    Memory.init(4,4);
};