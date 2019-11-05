function printFirst(item){
    console.log(item[0])
}
printFirst([1000,1000,2000])//?


function printAllItems(items) {
    items.forEach(item => {
      console.log(item);
    });
  }

printAllItems([2,3,45,6,6])

function printAllPossibleOrderedPairs(items) {
    items.forEach(firstItem => {
      items.forEach(secondItem => {
        console.log(firstItem, secondItem);
      });
    });
  }
printAllPossibleOrderedPairs([2,4,67,8,8])//
