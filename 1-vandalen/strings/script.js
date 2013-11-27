"use strict";

window.onload = function(){

    var convertString = function(str){
    //out får värdet "" så att det gamla värdet ska bytas ut.
    if(str === ""){
        return "Skitsaker";
    }
    
    var out = "";
    for (var i = 0;i < str.length; i++){
    // Om aktuell bokstav är lika med aktuell bokstav uppercase.
    if (str.charAt(i) == str.charAt(i).toUpperCase())
    {
    // då blir bokstaven lowercase
    out += str.charAt(i).toLowerCase();
    }
    else
    {
    // aktuell bokstav är annars lowercase, och ska bli uppercase
    out += str.charAt(i).toUpperCase();
    }
    }
    //Ersättar alla stora och små aA med ett #. 
    var pattern = /a/gi;
    out = out.replace(pattern, "#");
    
    return out;
	
	};
	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});
};