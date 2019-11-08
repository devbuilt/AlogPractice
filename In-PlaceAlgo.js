function squareArrayInPlace(intArray){

    intArray.forEach((int,index) => {
        intArray[index] *= int;
    
    });

    //NOTE: no need to return anything - we modified
    //intArray in place
}



function squaredArrayOutOfPlace(intArray){
    
    //we allocate a new array that we'll fill in with the new values

    const squaredArray = [];

    intArray.forEach((int, index) => {
        squaredArray[index] = Math.pow(int, 2)//?
   
    });

    return squaredArray;//?

}

squaredArrayOutOfPlace([67])




const originalArray = [2,3,4,5];

squareArrayInPlace(originalArray);

console.log('original array: ' + originalArray)

//logs: original array 4,9,16,25 confusingly