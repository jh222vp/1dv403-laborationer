"use strict";

window.onload = function(){

var MessageBoard = {
    messages: [],
    
};

var send = document.getElementById("submit");

send.onclick = function(e){
e.preventDefault();
var area = document.getElementById("txt").value;
document.getElementById("txt").value= "";
var mess = new Message(area, new Date());
MessageBoard.messages.push(mess);

//Deklarerar outPut och tar senaste värdet ur arrayen MessageBoard.messages
var outPut = MessageBoard.messages[MessageBoard.messages.length - 1];
console.log(outPut.toString());

//
var outText = outPut.getText();
var node = document.createElement("p");
var textNode = document.createTextNode(outText);
node.appendChild(textNode);
document.getElementById("outMessage").appendChild(node);



};
 

  
};