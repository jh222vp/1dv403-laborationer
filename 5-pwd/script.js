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
        
        //Ajax Koden nedan:
         var xhr = new XMLHttpRequest();
         
         //onreadystatechange == vad som ska hända när vi får svar från funktionen
         //finns 4 olika koder. 4an betyder att allt är färdigt och "OK"
         xhr.onreadystatechange = function(){
             if(xhr.readyState === 4) {
                 if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    //alert(xhr.responseText);
                    var imgWidth = 0;
                    var imgHeight = 0;
                    var jsonImageReciver = JSON.parse(xhr.responseText);
                    //console.log(xhr.responseText);
                  
                    for (var i = 0; i < jsonImageReciver.length; i++) {
                        
                        //IF satserna kontrollerar så att ramen runt bilderna alltid är maxstora
                        if (jsonImageReciver[i].thumbWidth > imgWidth){
                            imgWidth = Math.max(jsonImageReciver[i].thumbWidth);
                        }
                        if (jsonImageReciver[i].thumbHeight > imgHeight){
                            imgWidth = Math.max(jsonImageReciver[i].thumbHeight);
                        }

                        var thumbImgContainer = jsonImageReciver[i].thumbURL;
                        console.log(thumbImgContainer);
                    }
                   
                   //Array med alla bilder, HD och thumbs
                    var jsonArray = new Array(jsonImageReciver);
                    console.log(jsonArray);
                    
                    //popUp.appendchild();
                    
                 }
                 //Else satsen skriver ut vad som inte gick rätt (allt utom 4)
                 else{
                     console.log("Läsfel, status:"+xhr.status);
                 }
             }
         };
         
         //Länken där man hämtar bilderna
         xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
        
        
        
        
        
        
        
        
        
        
        
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

            },false);
        },
};

window.onload = function(){
    //objektet och sen funktionen
    desktop.Button();
};