function element(text, hex) {
    this.text = text;
    this.hex = hex;
    this.colorcode = "#" + hex;
}

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

function dothemagic() {
    var input = document.getElementById("nameBox");
    console.log(input.value);

    var string = input.value;

    var text = "";
    var hex = "";
    var j = 0;
    for( var i=0; i < string.length; i++ ) {
        charSimple = string.charAt(i).toLowerCase();
        charCode = String.charCodeAt(charSimple);
        console.log(charCode);

        if (charCode >= 97 && charCode <= 122) {
            text = text + string.charAt(i-1);
            hex = hex + summermagic(charCode%97);
            j = ++j % 3;
        }

        if ( j == 0 ) {
            var elem = new element(text, hex);
            builddiv("#"+hex);
            hex = text = "";
        }
    }
}

function load(){
    var button = document.getElementById("colorme");
    button.onclick = dothemagic;
}

document.addEventListener("DOMContentLoaded", load, false);
