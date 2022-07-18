const elementsArray = [12, 1, 234, 5, null, {}, 0, 2, 'string' , 14, 0]
let evenCount, oddCount, nullCount;
evenCount = oddCount = nullCount = 0;

const countEvenOddNull = (element) => {
  if(typeof element === 'number' && !isNaN(element)) {
    if(element === 0) {
      nullCount+=1
    } else {
      element % 2 === 0 ? evenCount+=1 : oddCount+=1;
    }
  }
}
elementsArray.map((element) => countEvenOddNull(element))
console.log(`Even numbers in array: ${evenCount}. Odd numbers in array: ${evenCount}. Null numbers in array: ${nullCount}.`);
