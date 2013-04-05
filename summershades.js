var elems = [];

function element(text, hex) {
    this.text = text;
    this.hex = hex;
    this.colorcode = "#" + hex;
}

function builddiv(color, divcount){
    //Builds a div with color and width (calculated using total div count)
    // and appends it to the main div
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
    //This function accepts a letter index (position of a letter in English alphabet
    // starting from zero), applies the algorithm to get the hex value.
    val = letterindex * 10 + Math.floor(letterindex/5);
    hex = val.toString(16);

    if (hex.length < 2) hex = "0" + hex;

    return hex;
}

function dothemagic() {
    var string = document.getElementById("nameBox").value;

    var text = "";
    var hex = "";
    var j = 0;
    // Ierate through the charachters of the string user entered
    for( var i=0; i < string.length; i++ ) {
        charCode = string.charCodeAt(i);
        //I'm only interested in english letters
        if (charCode >= 65 && charCode <= 90) {
            charCode = charCode + 32; // capital letter codes -> simple letter codes  
        }

        if (charCode >= 97 && charCode <= 122) {
            text = text + string.charAt(i-1);
            hex = hex + summermagic(charCode%97); // Pass letter index to get
                                                  // hex string for color and
                                                  // build color code
            j = ++j % 3; //Marker to help work on every three chars
        }

        if ( j == 0 ) {
            //We are at a third charatcer, which means we have a complete 
            //color code. Create an object with color info and store it in a 
            //global array. Then cleanup hex, text vars for next colorcode.
            var elem = new element(text, hex);
            elems.push(elem);
            hex = text = "";
        }
    }

    for( var z=0; z<elems.length; z++ ) {
        //Use color objects from the global array and paint the box with them.
        console.log(elems.length);
        builddiv(elems[z].colorcode, elems.length);
    }
    elems = []; // Cleans up the global array
}

function load(){
    var button = document.getElementById("colorme");
    button.onclick = dothemagic;

    var input  = document.getElementById("nameBox");
    //Bring up the colors when user presses enter
    input.addEventListener("keydown", function(event) {
        e = event || window.event;
        if ( e.keyCode == 13 ) {
            document.getElementById("shadebox").innerHTML = "";
            button.click();
        }
    });
    
    //Clean up text box and colors on input box focus
    input.addEventListener("focus", function(){
        document.getElementById("nameBox").value = "";
        document.getElementById("shadebox").innerHTML = "";
    });
}

document.addEventListener("DOMContentLoaded", load, false);
