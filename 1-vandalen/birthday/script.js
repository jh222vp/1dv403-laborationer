"use strict";

window.onload = function(){

	var birthday = function(date){
	
    //matchar arguementet med date, skiljer det sig kastas felmed.
    if (!date.match(/(\d{4})\(\d{2})\-(\d{2})/)) {
        throw {message: "wrong format: YYYY-MMM-DD"};
    }

    var CurrentTime = new Date();
    //delar arayens element mellan -
    var array = date.split('-');
    
    //skapar ett date med det rätta formatet
    var birthdayArray = new Date(CurrentTime.getFullYear(), array[1] - 1, array[2]);
    if(birthdayArray.getTime() < CurrentTime.getTime() && birthdayArray.getDate() !== CurrentTime.getDate())
    {
        birthdayArray.setFullYear(birthdayArray.getFullYear() + 1);
    }
    //konverterar allt till dagar och subtraherar millisekuderna
    var days = ((birthdayArray.getTime() - CurrentTime.getTime())/(1000*60*60*24));
    //ceil avrundar alla decimaler till övre heltalet
    var remainingDays = Math.ceil(days);
    //man kan inte ange tidigare datum
   
    return remainingDays;

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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};