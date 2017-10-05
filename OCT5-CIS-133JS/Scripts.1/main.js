// Simple Function to test our setup
function test() {
    alert("hello world");
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