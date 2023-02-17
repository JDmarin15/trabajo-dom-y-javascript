console.log ("Entramos ");

var items = document.getElementsByClassName("item");

var cantidad=items.length;
console.log(cantidad);
var div= document.createElement("div");

div;

div.innerText="aprendiendo javascript";

var divUno= document.getElementById("uno");

divUno.appendChild(div);

var lista= document.getElementById("lista");

var hijo= document.createElement("li");
hijo.innerText="li nuevo";
lista.appendChild(hijo);


document.getElementById('tres').style.color = 'red';

document.getElementById('lista').style.color= 'green';












