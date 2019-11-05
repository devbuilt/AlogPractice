// Closure is a function that access outside its self for example
const message = 'The British are coming!';
    function sayMessage(){
        console.log(message)//?
        // Here we have access to message,
        // even though it's declared outside this function!
    }
