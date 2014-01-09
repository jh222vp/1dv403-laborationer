"use strict";

//objekt
var desktop = {
        count: 0,
    
    //Skapar popup function
    popUpWindow: function(){
        this.count++;
        var that = this;
        var body = document.getElementById("body");
        var popUp = document.createElement("div");
        var header = document.createElement("header");
        var cancelButton = document.createElement("button");
        var cancelButtonText = document.createTextNode("Close Window");
        
        popUp.className="popUpWindow";
        cancelButton.className = "cancelButton";
        
        cancelButton.setAttribute("click");
        //Knuffar in till sidan
        //popupen ligger på bodyn
        //cancelbuttonen ligger på popupen
        
        body.appendChild(popUp);
        popUp.appendChild(cancelButton);
        popUp.appendChild(header);
        cancelButton.appendChild(cancelButtonText);
        body.insertBefore(body.firstChild);
        
        //Tar bort popup fönstret
        cancelButton.onclick = function() {
            popUp.parentNode.removeChild(popUp);
            that.count = 0;
        };
    },
    
    Button: function() {
            var that = this;
            var galleryIcon = document.getElementById("galleryIcon");
            
            galleryIcon.addEventListener("click", function() {
                if(that.count === 1){
                    return;
                    }
                    else{
                    
                    that.popUpWindow();
                    }
                    
                    console.log("click");

            },false)
        },
};

window.onload = function(){
    //objektet och sen funktionen
    desktop.Button();
};