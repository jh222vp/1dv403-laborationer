"use strict";

    var MessageBoard = { //Statiskt objekt.
    
        messages: [], //Array som ska innehålla alla meddelanden.
        
        init : function() {
           var send = document.getElementById("submit"); 
           var textArea = document.getElementById("text");
           var that = this;
           send.addEventListener("click", function(e) {
                e.preventDefault(); //talar om att det finns ett default beteende på detta 

                var mess = new Message(textArea.value, new Date());
                MessageBoard.messages.push(mess);
                MessageBoard.renderMessages();
                //Rensar textarean
                textArea.value = "";
                
           });
            
           textArea.addEventListener("keypress",function(e) {

                    if (e.keyCode === 13 && !e.shiftKey) 
                        {
                        e.preventDefault(); 
                        var mess = new Message(textArea.value, new Date());
                        MessageBoard.messages.push(mess);
                        MessageBoard.renderMessages();
                        textArea.value = "";
                        return that.message.replace(/[\n\r]/g, "<br />");
                                
                        } 
                    }, 
                    false); 
        },
    
    
            renderMessages : function() {
            // Raderar alla meddelanden, annars blir de dubbelt nästa tillfälle det skickas ett meddelande.
            document.getElementById("outMessage").innerHTML= "";
            
           //Loopar samtliga meddelanden, utan denna loop så syns inga meddelanden på sidan.
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                MessageBoard.renderMessage(i);
            }
            
            //Räknar och skriver ut antal inlägg på sidan
            var messageCounter = document.getElementById("messageCounter");
            var length = (MessageBoard.messages.length);
            messageCounter.innerHTML = length;
        },
            //Pekar på "outMessage" som ska nås
            //Skapar en P-taggar,
            renderMessage : function(messageID) {
            var div = document.getElementById("outMessage"); 
            var date = document.createElement("p");
            var messageText = document.createElement("p");
            date.innerHTML = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
            messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            messageText.appendChild(date);
            div.appendChild(messageText);
            
            //Skapar en knapp på bilden clock.png för att se hela datumet samt tid.
            //Sätter bl.a storlek och vilken fil som ska användas som bild.
            //Klickar man på bilden så visas datumet i form av en alert.
            var time = document.createElement("a");
            var imgTime = document.createElement("img");
            imgTime.className = "imgTime";
            imgTime.setAttribute("src", "clock.png");
            imgTime.width = "20";
            imgTime.height = "20";
            date.appendChild(time);
            time.appendChild(imgTime);
            
            //Innehållet i utskriften för datum och tid
            imgTime.onclick = function() {
                alert ("Meddelandet skrevs " + MessageBoard.messages[messageID].getDate().toLocaleDateString() +
                " klockan " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
            };
            
            //Skapar en knapp på bilden delete.png för att ta bort inlägg.
            //Sätter bl.a storlek och vilken fil som ska användas som bild.
            var a = document.createElement("a");
            var deleteIMG = document.createElement("img");
            deleteIMG.className = "deleteIMG";
            deleteIMG.setAttribute("src", "delete.png");
            deleteIMG.width = "20";
            deleteIMG.height = "20";
            date.appendChild(a);
            a.appendChild(deleteIMG);
            
            //Alertar och frågar om meddelandet verkligen skall tas bort. Om true så hoppar scriptet in i removeMessage nedan
            //och tar bort meddelandet.
            deleteIMG.onclick = function() {
            var eraseMessage = window.confirm("Är du säker på att du vill radera meddelandet?");
            if(eraseMessage == true){
                MessageBoard.removeMessage(messageID);
            }
            else
            {
                alert("Meddelandet togs inte bort");
            }
    };
},          //Denna funktion tar bort ett meddelande om if-satsen ovan returnerar true.
            removeMessage: function(deleteMess) {
            MessageBoard.messages.splice(deleteMess, 1); //1an står där för att det är antalet meddelanden som tas bort
            MessageBoard.renderMessages();
    },
    
};
window.onload = MessageBoard.init;