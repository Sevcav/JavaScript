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






