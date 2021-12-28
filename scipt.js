var foto;
window.onload = function () {
    foto = new Foto();
}

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () {
            document.getElementById("showingpopup").classList.add("hidden");
        }, 600);
    }
}




function closeNav() {
    document.getElementById("showmenu").style.width = "0px";
}


function selectImage() {
    document.getElementById("foto-file").click();
}

function makeGrayScale() {
    foto.grayscale();
    showpopup("GrayScale");
}

function makeBright() {
    foto.makeBright();
    showpopup("Brightness");
}

function makeDark() {
    foto.makeDark();
    showpopup("Darkness");
}

function makeBlur() {
    foto.applyBlurFilter();
    showpopup("Blur");
}

function makeEmboss() {
    foto.applyEmbossFilter();
    showpopup("Emboss");
}

function makeSharp() {
    foto.applySharpFilter();
    showpopup("Sharpness");
}

function download() {
    foto.export();
    showpopup("Downloaded");
}

function openColorPicker() {
    document.getElementById("color-picker").click();
}

function makeColorize(elem) {
    var color = elem.value;
    foto.colorize(color);
}

function openColorizeColorPicker() {
    document.getElementById("colorize-color-picker").click();
}

function applyColorFilter(elem) {
    var color = elem.value;
    foto.colorize(color);
}

function makeTransparent() {
    foto.makeTransparent();
}

function crop() {
    foto.cropSelected();
}

function flipVertically() {
    foto.flipVertically();
}

function rotate(elem) {
    foto.rotate(elem.value);
}



function showpopup(action) {
    document.getElementById("showingpopup").classList.remove("hidden");
    document.getElementById("message").innerHTML = action + " Added";
}




// voice recogniastion starts here
var message1212 = document.querySelector('#message1212');
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammar = '#JSGF V1.0;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;


recognition.onresult = function (event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    var lowercommand;
    message1212.textContent = 'Voice Input: ' + command + '.';
    console.log(command);
    lowercommand = command.toLowerCase();
    console.log(lowercommand);
    if (lowercommand.includes("black and white") || lowercommand.includes("grayscale")) {
        console.log("hai bhai isme");
        makeGrayScale();
    } else if (lowercommand.includes("bright") || lowercommand.includes("light")) {
        console.log("hai bhai isme");
        makeBright();
    }
    else if (lowercommand.includes("dark") || lowercommand.includes("black")) {
        console.log("hai bhai isme");
        makeDark();
    }
    else if (lowercommand.includes("blur") || lowercommand.includes("opacity")) {
        console.log("hai bhai isme");
        makeBlur();
    }
    else if (lowercommand.includes("emboss") || lowercommand.includes("sketch")) {
        console.log("hai bhai isme");
        makeEmboss();
    }
    else if (lowercommand.includes("sharp") || lowercommand.includes("better")) {
        console.log("hai bhai isme");
        makeSharp();
    }
    else if (lowercommand.includes("export") || lowercommand.includes("download")) {
        console.log("hai bhai isme");
        download();
    }
    else{
        console.log("do nothing");
    }
    
};

recognition.onspeechend = function () {
    recognition.stop();
};

recognition.onerror = function (event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}

document.querySelector('#btnGiveCommand').addEventListener('click', function () {
    recognition.start();

});
