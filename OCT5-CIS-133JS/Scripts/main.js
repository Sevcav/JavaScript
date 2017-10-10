// Simple Function to test our setup
function test() {
    alert("hello world");
}

function copyInputToOutput() {
    let inputText = getElementText("inputText");
    /*
    let inputElement = document.getElementById("inputText");
    let inputText = inputElement.value; two step full method */
    alert(inputText);
    let OutputElement = document.getElementById("outputText");
    OutputElement.value = inputText;
}

// Convienence function to get the HTML element
// Pass in element ID as a string
function getE(id) {
    return document.getElementById(id);
}

// Return the value of a HTML element 
// Pass in the element ID as a string 
function getElementText(id) {
    return getE(id).value;
}

// Simple test to check the Element ID functions 
function test() {
    alert();
}


function readText() {
    //Grab the input element from the document
    let inputItem = document.getElementById("stuff");
    //Grab the text from the input element
    let theText = inputItem.value;
    //Demonstrate the inout/output 
    alert("value is " + theText);
    let theTextUpper = theText.toUpperCase();
    //inputItem.value = theTextUpper;
    //Grab the output element from the document
    let outputItem = document.getElementById("stuff2");
    outputItem.value = theTextUpper;

}