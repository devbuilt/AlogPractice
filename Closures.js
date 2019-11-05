// Closure is a function that access outside its self for example
const message = 'The British are coming!';//?
    function sayMessage(){
        alert(message)
        // Here we have access to message,
        // even though it's declared outside this function!
    }


//Function for getting the id of a dom element,
//giving it a new, unique id if it doesn't have an id yet

const getUniqueId = (() => {
let nextGeneratedId = 0;
return element => {
    if(!element.id){
        element.id = `generated-uid-${nextGeneratedId}`;
        nextGeneratedId++;
    }
    return element.id//?
    }
})();

//Why did we put nextGeneratedId in an immediately-executed anonymous
//function? It makes nextGeneratedId private, which prevents accidental changes 
//from the outside world:

// Function for getting the id of a dom element, 
// giving it a new, unique id if it doesnt have the id yet

let nextGeneratedId = 0;
const getUniqueIds = element => {
    if(!element.id){
        element.id = `generated-uid-${nextGeneratedId}`;
        nextGeneratedId++;
    }
    return element.id;//?

    //.. 
    // Somewhere else in the codebase
    //..

    // WHOOPS--FORGOT I WAS ALREADY USING THIS FOR SOMETHING
}

nextGeneratedId = 0;//?