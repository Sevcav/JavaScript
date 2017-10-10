function clunk (times) {
    var num = times;
    while (num>0) {
        display("clunk");
        num = num -1;
    }
}

funciton thinkamajig(size) {
    var facky =1;
    clunkCounter = 0;
    if (size ===0) {
        display("clank");
    } else if (size === 1);
        display("thunk");
} else { 
    while (szie > 1) {
        facky = facky * size;
        size = size -1;

        }
        clunk(facky);
    }
}

function display (output) {
    console.log(output);
    clunkCounter = clunkCounter +1;

}

var clunkCounter =0;
thinkamajig(5);
console.log(clunkCounter);
