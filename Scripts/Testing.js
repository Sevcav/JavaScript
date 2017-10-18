/*
    Ken Chapman
    v 0.001
    
    NOTE: Exploratory Testing of lessons in class
*/

// Write some code to retrieve values from a webpage textarea

function readText (){
    let readTextBox01 = document.getElementById("textbox01");
    let readTextValue01 = readTextBox01.value;
    alert("Value in Textbox 01 is " + readTextValue01);
    let readTextBox02 = document.getElementById("textbox02");
    let readTextValue02 = readTextBox02.value;
    alert("Value in Textbox 02 is " + readTextValue02);
}


function swapValues() {
    let textObject1 = document.getElementById("textbox01");
    let textValue1 = textObject1.value;
    let textObject2 = document.getElementById("textbox02");
    let textValue2 = textObject2.value;

    // alert(textValue1);
    // alert(textValue2);

    // Swap text Area Values
    let tmp = textValue1;
    textObject1.value = textValue2 + '\n';
    textObject2.value = tmp;

}

function createNumberString(startNumber, howMany, separator = '\n') {
    //if (!separator) { // default to \n
        //separator = '\n';    
    
    let result = "";
    let loopCounter = startNumber;
    let maxNumber = startNumber + howMany;

    while (loopCounter < maxNumber) {
        result = result + string(loopCounter) + separator;
        ++loopCounter;   // add one to loopCounter                            
    }

    return result;
}

// Create a list of numbers
// Input: How many numbers
//        Where to start the number string
//        What separates the values
// Output: A string of the numbers separated
//         by line breaks '\n'
function createNumberString(startNumber, howMany, separator) {
    if (!separator){  // default to \n
        separator = '\n';    
    }
    let result = "";
    let loopCounter = startNumber;
    let maxNumber = startNumber + howMany;

    while (loopCounter < maxNumber) {
        result = result + String(loopCounter) + separator;
        ++loopCounter;   // add one to loopCounter                            
    }

    return result;
}

// Print the numbers from 0..howmany to a text area
// Input: How many numbers to print
// Output: none
function outputNumbers(howMany) {
    let textBox1 = document.getElementById("textarea01");
    textBox1.value = ""; // clear the text box

    // for looping structure...
    //  initialize    test      increment
    /*
    for (let i = 0; i < howMany; i += 1) {
        textBox1.value = textBox1.value + i + '\n';
    }
    */
    textBox1.value = createNumberString(1, howMany);
}

// Call the outputNumbers() function
// Input: none
// Output: none
function textAreaExample() {
    outputNumbers(10);
}

//Clear textarea "texarea01"
function clrTxt(id){
    if (id === undefined || id === null){
        id = "textarea01"
    }
    let text
    let textarea = getEID(id);
    textarea.value = '';
};

// Print (....)
// Print the argument to the textarea "textarea01"
// NO LINE Break
function print(str, id) {
    if (id === undefined || id === null){
        id = "textarea01"
    }
    let textarea = getEID(id);
    textarea.value = textarea.value  + str;
};

// Print (....)
// Print the argument to the textarea "textarea01"
// or to a specific element with value as defined by ID parameter
// or to the elment 
// NO LINE Break
function printwBreak(str, id) {
    if (str === undefined || str === null) {
    str = '';
}

    print(str + '\n', id);
};

//get HTML element from the document by using the element id property

function getEID(id){
    return document.getElementById(id);
;}

// Get the text (the value property for an 
// input box or a textarea given the HTML ID
function getEVal(id){
    return getEID (id).value;
;}


// Pass two parameters, first is string, second is the ElementID; default ID is textarea01
function testPrint() {
    clrTxt();
    print("Hello World", "texbox01");
    printwBreak(", have a nice day.");
    printwBreak();
    printwBreak("See you Later.");
    let txt  = getEVal("textbox01");
    printwBreak(txt);
    println("yes indeed", "textbox02");
};