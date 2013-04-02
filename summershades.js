var mark = 0;
var text = "";
var red = 0;
var green = 0;
var blue = 0;
var colorcode = "";

function builddiv(color){
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "150px";
    div.style.background = color;
    div.style.display = "inline-block";

    shadebox.appendChild(div);
}

function summermagic(letterindex){
    val = letterindex * 10 + Math.floor(letterindex/5);
    hex = val.toString(16);

    if (hex.length < 2) hex = "0" + hex;

    return hex;
}

function magician(e){
    if (!e) var e = window.event; //For IE

    mark = ++mark % 3;
    text = text + String.fromCharCode(e.charCode)
    var hex = "";

    if (e.which >= 65 && e.which <= 90){
        hex = summermagic((e.which + 32) % 97);
    }
    else if(e.which >= 97 && e.which <= 122){
        hex = summermagic(e.which % 97);
    }

    if (mark == 1) {
        red = hex;
    }
    else if (mark == 2) {
        green = hex;
    }
    else if (mark == 0){
        blue = hex;
        colorcode = "#" + red + green + blue;
        builddiv(colorcode);
        text = "";
    }
}

function load(){
    var input = document.getElementById("nameBox");
    input.addEventListener("keypress", magician, false);
}

document.addEventListener("DOMContentLoaded", load, false);
