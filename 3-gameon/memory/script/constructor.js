"use strict";

function Const(card, memory) {
    
    var td = document.createElement("td");
    var a = document.createElement("a");
    var img = document.createElement("img");
    //a.href används för att kunna tabba och använda enter på bilderna. Blir länkar
    a.href = "#";
    var that = this;
    //För att bilderna ska synas från början
    img.src = "pics/0.png";
    a.appendChild(img);
    td.appendChild(a);
    
    //bygger struktur med
    this.getTd = function(){
        return td;
    };
    
    this.getID = function(){
        return card;
    };
    a.onclick = function() {
        memory.flipCard(that);
    };
    
    
    this.getImg = function(){
    a.onclick = function() {
        memory.flipCard(that);
    };
         img.src ="pics/0.png";
    };
    
    
    this.flip = function(){
    a.onclick = null;
       return img.src = "pics/" + card + ".png";
    };
}