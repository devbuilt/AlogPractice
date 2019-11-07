function squareArray(intArray){
    intArray.forEach(int,index => {
        intArray[index] *= int;
    });

    //NOTE: no need to return anything - we modified
    //intArray in place
}

