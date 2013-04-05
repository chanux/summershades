var elems = [];

function element(text, hex) {
    this.text = text;
    this.hex = hex;
    this.colorcode = "#" + hex;
}

function builddiv(color, divcount){
    var divwidth = 100 / divcount;
    var widthentry = divwidth + "%";
    var div = document.createElement("div");
    div.style.width = widthentry;
    div.style.height = "100%";
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

function dothemagic() {
    var input = document.getElementById("nameBox");

    var string = input.value;

    var text = "";
    var hex = "";
    var j = 0;
    for( var i=0; i < string.length; i++ ) {
        charCode = string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = charCode + 32;
        }

        if (charCode >= 97 && charCode <= 122) {
            text = text + string.charAt(i-1);
            hex = hex + summermagic(charCode%97);
            j = ++j % 3;
        }

        if ( j == 0 ) {
            var elem = new element(text, hex);
            elems.push(elem);
            hex = text = "";
        }
    }

    for( var z=0; z<elems.length; z++ ) {
        console.log(elems.length);
        builddiv(elems[z].colorcode, elems.length);
    }
    elems = [];
}

function load(){
    var button = document.getElementById("colorme");
    button.onclick = dothemagic;

    var input  = document.getElementById("nameBox");
    input.addEventListener("keydown", function(event) {
        e = event || window.event;
        if ( e.keyCode == 13 ) {
            var colorbox = document.getElementById("shadebox");
            colorbox.innerHTML = '';
            button.click();
        }
    });

    input.addEventListener("focus", function(){
        var txtbox = document.getElementById("nameBox");
        txtbox.focus();
        txtbox.value ="";
        var colorbox = document.getElementById("shadebox");
        colorbox.innerHTML = '';
    });
}

document.addEventListener("DOMContentLoaded", load, false);
