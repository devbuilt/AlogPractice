var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';

}

logIt()//?

//if we execute this javascript, what will the browsers console show?


// ---- Spoiler Alert ----



// undefined



function setVar(){
    //inside this function we have a new scope
    // so this variable, declared in this function scope wont be avaiable outside 
    // the function
    var varInFunction = 'inside a function';

}
setVar()

//console.log(varInFunction)// thorws Reference error


if(true) {
    //this if statment doesn't create a new scope
    // so varinIf is avaiable in the global scope
    var varInIf = 'inside and if statement';

}
console.log(varInIf)

//Declaration vs. assignment. A variable declaration simply tells the interpreter that a variable exists. By default it initializes the variable to undefined:

var unicorn;
console.log(unicorn)// logs undefined (NOT a ReferenceError

//A variable assignment assigns a value to the variable:

unicorn = 'Sparkles McGiggleton'//?


// We Can both declare and assign in the same line:

var centaur = 'Horsey Mcpersonhead';//?


//HOSTING. In javascript, variable declarations are 'hoisted' to the
//top of the current scope. variable assignment, however are not

//so Returning to the original problem

var text = 'outside';

function logIt(){
    console.log(text);

    var text = 'inside';
}

logIt()//?

//The declaration (but not the assignment) of text gets hoisted to the top of logIt(). So our code gets interpreted as though it were:

var text = 'outside'

function logIt(){
    var text;
    console.log(text)
    text = 'inside'

}
logIt()